import express from "express";
import Order from "../models/Order.js";
import Book from "../models/Book.js";
import { protect, admin } from "../middleware/auth.js";
import { body, query, validationResult } from "express-validator";

const router = express.Router();

// @desc    Get user's orders
// @route   GET /api/orders
// @access  Private
router.get(
  "/",
  protect,
  [
    query("page").optional().isInt({ min: 1 }).withMessage("Invalid page"),
    query("limit")
      .optional()
      .isInt({ min: 1, max: 50 })
      .withMessage("Invalid limit"),
    query("status").optional().isString(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          message: "Validation errors",
          errors: errors.array(),
        });
      }

      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const skip = (page - 1) * limit;

      const filter = { user: req.user.id };

      if (req.query.status) {
        filter.orderStatus = req.query.status;
      }

      const orders = await Order.find(filter)
        .populate("items.book", "title author image")
        .sort({ createdAt: -1 })
        .limit(limit)
        .skip(skip);

      const total = await Order.countDocuments(filter);

      res.json({
        success: true,
        data: {
          orders,
          pagination: {
            currentPage: page,
            totalPages: Math.ceil(total / limit),
            totalOrders: total,
            hasNextPage: page < Math.ceil(total / limit),
            hasPrevPage: page > 1,
          },
        },
      });
    } catch (error) {
      console.error("Get orders error:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch orders",
      });
    }
  },
);

// @desc    Get single order
// @route   GET /api/orders/:id
// @access  Private
router.get("/:id", protect, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate("items.book", "title author image")
      .populate("timeline.updatedBy", "name");

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    // Check if user owns this order or is admin
    if (order.user.toString() !== req.user.id && req.user.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Access denied",
      });
    }

    res.json({
      success: true,
      data: { order },
    });
  } catch (error) {
    console.error("Get order error:", error);
    if (error.name === "CastError") {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }
    res.status(500).json({
      success: false,
      message: "Failed to fetch order",
    });
  }
});

// @desc    Cancel order
// @route   PUT /api/orders/:id/cancel
// @access  Private
router.put(
  "/:id/cancel",
  protect,
  [
    body("reason")
      .optional()
      .trim()
      .isLength({ max: 500 })
      .withMessage("Cancellation reason cannot exceed 500 characters"),
  ],
  async (req, res) => {
    try {
      const { reason } = req.body;
      const order = await Order.findById(req.params.id);

      if (!order) {
        return res.status(404).json({
          success: false,
          message: "Order not found",
        });
      }

      // Check if user owns this order
      if (order.user.toString() !== req.user.id) {
        return res.status(403).json({
          success: false,
          message: "Access denied",
        });
      }

      // Check if order can be cancelled
      if (
        order.orderStatus === "shipped" ||
        order.orderStatus === "delivered" ||
        order.orderStatus === "cancelled"
      ) {
        return res.status(400).json({
          success: false,
          message: "Order cannot be cancelled at this stage",
        });
      }

      // Update order status
      order.orderStatus = "cancelled";
      order.cancellationReason = reason || "Cancelled by customer";
      order.cancelledAt = new Date();

      await order.updateStatus(
        "cancelled",
        `Order cancelled: ${reason || "Customer request"}`,
        req.user.id,
      );

      // Restore book stock
      for (const item of order.items) {
        await Book.findByIdAndUpdate(item.book, {
          $inc: {
            stockCount: item.quantity,
            salesCount: -item.quantity,
          },
        });

        // Update inStock status
        const book = await Book.findById(item.book);
        if (book.stockCount > 0) {
          book.inStock = true;
          await book.save();
        }
      }

      res.json({
        success: true,
        message: "Order cancelled successfully",
        data: { order },
      });
    } catch (error) {
      console.error("Cancel order error:", error);
      res.status(500).json({
        success: false,
        message: "Failed to cancel order",
      });
    }
  },
);

// @desc    Get all orders (Admin)
// @route   GET /api/orders/admin/all
// @access  Admin
router.get(
  "/admin/all",
  protect,
  admin,
  [
    query("page").optional().isInt({ min: 1 }).withMessage("Invalid page"),
    query("limit")
      .optional()
      .isInt({ min: 1, max: 100 })
      .withMessage("Invalid limit"),
    query("status").optional().isString(),
    query("search").optional().isString(),
  ],
  async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 20;
      const skip = (page - 1) * limit;

      const filter = {};

      if (req.query.status) {
        filter.orderStatus = req.query.status;
      }

      if (req.query.search) {
        filter.$or = [
          { orderNumber: { $regex: req.query.search, $options: "i" } },
          {
            "shippingAddress.name": { $regex: req.query.search, $options: "i" },
          },
          {
            "shippingAddress.phone": {
              $regex: req.query.search,
              $options: "i",
            },
          },
        ];
      }

      const orders = await Order.find(filter)
        .populate("user", "name email")
        .populate("items.book", "title author image")
        .sort({ createdAt: -1 })
        .limit(limit)
        .skip(skip);

      const total = await Order.countDocuments(filter);

      // Get order statistics
      const stats = await Order.aggregate([
        {
          $group: {
            _id: "$orderStatus",
            count: { $sum: 1 },
            totalValue: { $sum: "$orderSummary.total" },
          },
        },
      ]);

      res.json({
        success: true,
        data: {
          orders,
          stats,
          pagination: {
            currentPage: page,
            totalPages: Math.ceil(total / limit),
            totalOrders: total,
            hasNextPage: page < Math.ceil(total / limit),
            hasPrevPage: page > 1,
          },
        },
      });
    } catch (error) {
      console.error("Get all orders error:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch orders",
      });
    }
  },
);

// @desc    Update order status (Admin)
// @route   PUT /api/orders/:id/status
// @access  Admin
router.put(
  "/:id/status",
  protect,
  admin,
  [
    body("status")
      .isIn([
        "pending",
        "confirmed",
        "processing",
        "shipped",
        "out-for-delivery",
        "delivered",
        "cancelled",
        "returned",
      ])
      .withMessage("Invalid status"),
    body("message").optional().trim(),
    body("trackingId").optional().trim(),
  ],
  async (req, res) => {
    try {
      const { status, message, trackingId } = req.body;
      const order = await Order.findById(req.params.id);

      if (!order) {
        return res.status(404).json({
          success: false,
          message: "Order not found",
        });
      }

      // Update tracking ID if provided
      if (trackingId) {
        order.shippingDetails.trackingId = trackingId;
      }

      // Update delivery date if status is delivered
      if (status === "delivered") {
        order.shippingDetails.actualDelivery = new Date();
      }

      await order.updateStatus(
        status,
        message || `Order status updated to ${status}`,
        req.user.id,
      );

      res.json({
        success: true,
        message: "Order status updated successfully",
        data: { order },
      });
    } catch (error) {
      console.error("Update order status error:", error);
      res.status(500).json({
        success: false,
        message: "Failed to update order status",
      });
    }
  },
);

export default router;
