import React from "react";
import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/contexts/AppContext";

export function MobileCartPage() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartTotal,
    itemCount,
  } = useCart();

  const handleQuantityChange = (bookId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(bookId);
    } else {
      updateQuantity(bookId, newQuantity);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="bg-white border-b sticky top-0 z-40">
        <div className="flex items-center px-4 py-4">
          <Link to="/shop" className="mr-4">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-lg font-semibold flex-1">
            Shopping Cart
            {itemCount > 0 && (
              <span className="text-sm font-normal text-gray-600 ml-2">
                ({itemCount} items)
              </span>
            )}
          </h1>
        </div>
      </div>

      <div className="px-4 py-4">
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <ShoppingBag className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Your cart is empty
            </h3>
            <p className="text-gray-600 mb-8 max-w-sm">
              Looks like you haven't added any books yet. Start exploring our
              collection!
            </p>
            <Button asChild size="lg" className="w-full max-w-sm">
              <Link to="/shop">Start Shopping</Link>
            </Button>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="space-y-4 mb-6">
              {cart.map((item) => (
                <Card key={item.book.id} className="overflow-hidden">
                  <CardContent className="p-4">
                    <div className="flex space-x-4">
                      <Link
                        to={`/book/${item.book.id}`}
                        className="flex-shrink-0"
                      >
                        <img
                          src={item.book.image}
                          alt={item.book.title}
                          className="w-20 h-26 object-cover rounded-lg border"
                        />
                      </Link>

                      <div className="flex-1 min-w-0">
                        <Link to={`/book/${item.book.id}`} className="block">
                          <h3 className="font-semibold text-base line-clamp-2 mb-1">
                            {item.book.title}
                          </h3>
                          {item.book.titleTelugu && (
                            <p className="text-sm text-gray-600 telugu-text line-clamp-1 mb-1">
                              {item.book.titleTelugu}
                            </p>
                          )}
                        </Link>
                        <p className="text-sm text-gray-600 mb-3">
                          by {item.book.author}
                        </p>

                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-lg font-bold text-brand-600">
                              ₹{item.book.price}
                            </span>
                            {item.book.originalPrice && (
                              <span className="text-sm text-gray-500 line-through ml-2">
                                ₹{item.book.originalPrice}
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                          {/* Quantity Controls */}
                          <div className="flex items-center border rounded-lg">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-10 w-10 p-0"
                              onClick={() =>
                                handleQuantityChange(
                                  item.book.id,
                                  item.quantity - 1,
                                )
                              }
                            >
                              <Minus className="w-4 h-4" />
                            </Button>
                            <span className="w-12 text-center font-semibold">
                              {item.quantity}
                            </span>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-10 w-10 p-0"
                              onClick={() =>
                                handleQuantityChange(
                                  item.book.id,
                                  item.quantity + 1,
                                )
                              }
                            >
                              <Plus className="w-4 h-4" />
                            </Button>
                          </div>

                          {/* Remove Button */}
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFromCart(item.book.id)}
                            className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2"
                          >
                            <Trash2 className="w-5 h-5" />
                          </Button>
                        </div>

                        <div className="mt-3 pt-3 border-t">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">
                              Subtotal:
                            </span>
                            <span className="font-semibold">
                              ₹{item.book.price * item.quantity}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Clear Cart Button */}
            <div className="mb-6">
              <Button
                variant="outline"
                onClick={clearCart}
                className="w-full text-red-500 border-red-200 hover:bg-red-50"
              >
                Clear Cart
              </Button>
            </div>

            {/* Sticky Bottom Summary */}
            <div className="fixed bottom-16 left-0 right-0 bg-white border-t shadow-lg lg:hidden">
              <div className="px-4 py-4 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">
                      Subtotal ({itemCount} items):
                    </span>
                    <span className="font-medium">₹{cartTotal}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Delivery:</span>
                    <span className="font-medium text-green-600">FREE</span>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold">Total:</span>
                    <span className="text-lg font-bold text-brand-600">
                      ₹{cartTotal}
                    </span>
                  </div>
                </div>

                <Button asChild className="w-full h-12" size="lg">
                  <Link to="/checkout">Proceed to Checkout</Link>
                </Button>

                {/* Trust indicators */}
                <div className="text-center text-xs text-gray-500">
                  <p className="flex items-center justify-center space-x-4">
                    <span>✓ FREE Delivery</span>
                    <span>✓ Secure Payment</span>
                    <span>✓ Easy Returns</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Spacer for fixed bottom section */}
            <div className="h-48"></div>
          </>
        )}
      </div>
    </div>
  );
}
