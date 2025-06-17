import express from "express";
import User from "../models/User.js";
import Book from "../models/Book.js";
import Order from "../models/Order.js";
import { protect, admin } from "../middleware/auth.js";

const router = express.Router();

// @desc    Get admin dashboard stats
// @route   GET /api/admin/stats
// @access  Admin
router.get("/stats", protect, admin, async (req, res) => {
  try {
    // Get date ranges
    const today = new Date();
    const thisMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
    const thisYear = new Date(today.getFullYear(), 0, 1);

    // Basic counts
    const totalBooks = await Book.countDocuments({ isActive: true });
    const totalUsers = await User.countDocuments({ isActive: true });
    const totalOrders = await Order.countDocuments();

    // Revenue calculations
    const totalRevenue = await Order.aggregate([
      { $match: { "paymentDetails.status": "paid" } },
      { $group: { _id: null, total: { $sum: "$orderSummary.total" } } },
    ]);

    const thisMonthRevenue = await Order.aggregate([
      {
        $match: {
          "paymentDetails.status": "paid",
          createdAt: { $gte: thisMonth },
        },
      },
      { $group: { _id: null, total: { $sum: "$orderSummary.total" } } },
    ]);

    const lastMonthRevenue = await Order.aggregate([
      {
        $match: {
          "paymentDetails.status": "paid",
          createdAt: { $gte: lastMonth, $lt: thisMonth },
        },
      },
      { $group: { _id: null, total: { $sum: "$orderSummary.total" } } },
    ]);

    // Order status breakdown
    const ordersByStatus = await Order.aggregate([
      {
        $group: {
          _id: "$orderStatus",
          count: { $sum: 1 },
        },
      },
    ]);

    // Top selling books
    const topBooks = await Book.find({ isActive: true })
      .sort({ salesCount: -1 })
      .limit(5)
      .select("title author salesCount price");

    // Recent orders
    const recentOrders = await Order.find()
      .populate("user", "name email")
      .sort({ createdAt: -1 })
      .limit(10)
      .select("orderNumber user orderSummary.total orderStatus createdAt");

    // Monthly sales data (last 12 months)
    const monthlySales = await Order.aggregate([
      {
        $match: {
          "paymentDetails.status": "paid",
          createdAt: {
            $gte: new Date(today.getFullYear() - 1, today.getMonth(), 1),
          },
        },
      },
      {
        $group: {
          _id: {
            year: { $year: "$createdAt" },
            month: { $month: "$createdAt" },
          },
          revenue: { $sum: "$orderSummary.total" },
          orders: { $sum: 1 },
        },
      },
      { $sort: { "_id.year": 1, "_id.month": 1 } },
    ]);

    // Growth calculations
    const revenueGrowth =
      lastMonthRevenue[0]?.total > 0
        ? (((thisMonthRevenue[0]?.total || 0) - lastMonthRevenue[0].total) /
            lastMonthRevenue[0].total) *
          100
        : 0;

    res.json({
      success: true,
      data: {
        overview: {
          totalBooks,
          totalUsers,
          totalOrders,
          totalRevenue: totalRevenue[0]?.total || 0,
          thisMonthRevenue: thisMonthRevenue[0]?.total || 0,
          revenueGrowth: Math.round(revenueGrowth * 100) / 100,
        },
        ordersByStatus,
        topBooks,
        recentOrders,
        monthlySales,
      },
    });
  } catch (error) {
    console.error("Get admin stats error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch admin statistics",
    });
  }
});

// @desc    Get users list
// @route   GET /api/admin/users
// @access  Admin
router.get("/users", protect, admin, async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const skip = (page - 1) * limit;

    const filter = {};
    if (req.query.search) {
      filter.$or = [
        { name: { $regex: req.query.search, $options: "i" } },
        { email: { $regex: req.query.search, $options: "i" } },
      ];
    }

    if (req.query.role) {
      filter.role = req.query.role;
    }

    const users = await User.find(filter)
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(skip)
      .select("-password");

    const total = await User.countDocuments(filter);

    res.json({
      success: true,
      data: {
        users,
        pagination: {
          currentPage: page,
          totalPages: Math.ceil(total / limit),
          totalUsers: total,
          hasNextPage: page < Math.ceil(total / limit),
          hasPrevPage: page > 1,
        },
      },
    });
  } catch (error) {
    console.error("Get users error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch users",
    });
  }
});

// @desc    Update user role
// @route   PUT /api/admin/users/:id/role
// @access  Admin
router.put("/users/:id/role", protect, admin, async (req, res) => {
  try {
    const { role } = req.body;

    if (!["user", "admin"].includes(role)) {
      return res.status(400).json({
        success: false,
        message: "Invalid role",
      });
    }

    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    user.role = role;
    await user.save();

    res.json({
      success: true,
      message: "User role updated successfully",
      data: { user },
    });
  } catch (error) {
    console.error("Update user role error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update user role",
    });
  }
});

// @desc    Deactivate/activate user
// @route   PUT /api/admin/users/:id/status
// @access  Admin
router.put("/users/:id/status", protect, admin, async (req, res) => {
  try {
    const { isActive } = req.body;

    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    user.isActive = isActive;
    await user.save();

    res.json({
      success: true,
      message: `User ${isActive ? "activated" : "deactivated"} successfully`,
      data: { user },
    });
  } catch (error) {
    console.error("Update user status error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update user status",
    });
  }
});

export default router;
