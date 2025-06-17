import React from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Trash2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useWishlist, useCart } from "@/contexts/AppContext";

export function MobileWishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleAddToCart = (bookId: string) => {
    const wishlistItem = wishlist.find((item) => item.book.id === bookId);
    if (wishlistItem) {
      addToCart(wishlistItem.book);
      removeFromWishlist(bookId);
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
            My Wishlist
            {wishlist.length > 0 && (
              <span className="text-sm font-normal text-gray-600 ml-2">
                ({wishlist.length} items)
              </span>
            )}
          </h1>
        </div>
      </div>

      <div className="px-4 py-4">
        {wishlist.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <Heart className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Your wishlist is empty
            </h3>
            <p className="text-gray-600 mb-8 max-w-sm">
              Save books you love for later by tapping the heart icon while
              browsing.
            </p>
            <Button asChild size="lg" className="w-full max-w-sm">
              <Link to="/shop">Browse Books</Link>
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {wishlist.map((item) => (
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
                      <div className="flex justify-between items-start mb-2">
                        <Link to={`/book/${item.book.id}`} className="flex-1">
                          <h3 className="font-semibold text-base line-clamp-2 mb-1">
                            {item.book.title}
                          </h3>
                          {item.book.titleTelugu && (
                            <p className="text-sm text-gray-600 telugu-text line-clamp-1 mb-1">
                              {item.book.titleTelugu}
                            </p>
                          )}
                        </Link>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFromWishlist(item.book.id)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 ml-2"
                        >
                          <Trash2 className="w-5 h-5" />
                        </Button>
                      </div>

                      <p className="text-sm text-gray-600 mb-3">
                        by {item.book.author}
                      </p>

                      <div className="flex items-center justify-between mb-4">
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
                        {item.book.discount && (
                          <span className="text-sm font-medium text-green-600">
                            {item.book.discount}% OFF
                          </span>
                        )}
                      </div>

                      <div className="space-y-2">
                        {item.book.inStock ? (
                          <>
                            <Button
                              onClick={() => handleAddToCart(item.book.id)}
                              className="w-full h-10"
                            >
                              <ShoppingCart className="w-4 h-4 mr-2" />
                              Move to Cart
                            </Button>
                            <Button
                              variant="outline"
                              asChild
                              className="w-full h-10"
                            >
                              <Link to={`/book/${item.book.id}`}>
                                View Details
                              </Link>
                            </Button>
                          </>
                        ) : (
                          <div className="space-y-2">
                            <Button disabled className="w-full h-10">
                              Out of Stock
                            </Button>
                            <Button
                              variant="outline"
                              asChild
                              className="w-full h-10"
                            >
                              <Link to={`/book/${item.book.id}`}>
                                View Details
                              </Link>
                            </Button>
                          </div>
                        )}
                      </div>

                      <div className="mt-3 pt-3 border-t">
                        <p className="text-xs text-gray-500">
                          Added on{" "}
                          {new Date(item.addedAt).toLocaleDateString("en-IN")}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Bottom Actions */}
            <div className="pt-6 border-t">
              <Button variant="outline" asChild className="w-full h-12">
                <Link to="/shop">Continue Shopping</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
