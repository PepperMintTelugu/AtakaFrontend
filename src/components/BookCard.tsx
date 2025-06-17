import React from "react";
import { Link } from "react-router-dom";
import { Star, Heart, ShoppingCart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useCart, useWishlist } from "@/contexts/AppContext";
import { Book } from "@/types/book";
import { cn } from "@/lib/utils";

interface BookCardProps {
  book: Book;
  variant?: "default" | "horizontal" | "featured";
  className?: string;
}

export function BookCard({
  book,
  variant = "default",
  className,
}: BookCardProps) {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const inWishlist = isInWishlist(book.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(book);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (inWishlist) {
      removeFromWishlist(book.id);
    } else {
      addToWishlist(book);
    }
  };

  const discountedPrice = book.originalPrice
    ? book.originalPrice - book.price
    : 0;
  const discountPercentage = book.originalPrice
    ? Math.round(((book.originalPrice - book.price) / book.originalPrice) * 100)
    : 0;

  if (variant === "horizontal") {
    return (
      <Card className={cn("book-card-hover overflow-hidden", className)}>
        <Link to={`/book/${book.id}`}>
          <div className="flex">
            <div className="relative w-32 flex-shrink-0">
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-full object-cover"
              />
              {book.discount && book.discount > 0 && (
                <Badge className="absolute top-2 left-2 bg-red-500 text-white">
                  {book.discount}% OFF
                </Badge>
              )}
            </div>
            <CardContent className="flex-1 p-4">
              <div className="flex justify-between items-start mb-2">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg line-clamp-2 mb-1">
                    {book.title}
                  </h3>
                  {book.titleTelugu && (
                    <p className="text-sm text-gray-600 telugu-text mb-1">
                      {book.titleTelugu}
                    </p>
                  )}
                  <p className="text-sm text-gray-600 mb-2">by {book.author}</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleToggleWishlist}
                  className="p-1"
                >
                  <Heart
                    className={cn(
                      "w-4 h-4",
                      inWishlist
                        ? "fill-red-500 text-red-500"
                        : "text-gray-400",
                    )}
                  />
                </Button>
              </div>

              <div className="flex items-center mb-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "w-3 h-3",
                        i < Math.floor(book.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300",
                      )}
                    />
                  ))}
                  <span className="text-xs text-gray-600 ml-1">
                    ({book.reviewCount})
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-xl font-bold text-brand-600">
                    ₹{book.price}
                  </span>
                  {book.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      ₹{book.originalPrice}
                    </span>
                  )}
                </div>
                <Button size="sm" onClick={handleAddToCart} className="ml-2">
                  <ShoppingCart className="w-4 h-4 mr-1" />
                  Add
                </Button>
              </div>
            </CardContent>
          </div>
        </Link>
      </Card>
    );
  }

  if (variant === "featured") {
    return (
      <Card
        className={cn(
          "book-card-hover overflow-hidden group relative",
          className,
        )}
      >
        <Link to={`/book/${book.id}`}>
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-col space-y-1">
              {book.bestseller && (
                <Badge className="bg-yellow-500 text-black">Bestseller</Badge>
              )}
              {book.newArrival && (
                <Badge className="bg-green-500 text-white">New</Badge>
              )}
              {book.discount && book.discount > 0 && (
                <Badge className="bg-red-500 text-white">
                  {book.discount}% OFF
                </Badge>
              )}
            </div>

            {/* Wishlist button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={handleToggleWishlist}
              className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm hover:bg-white"
            >
              <Heart
                className={cn(
                  "w-5 h-5",
                  inWishlist ? "fill-red-500 text-red-500" : "text-gray-600",
                )}
              />
            </Button>

            {/* Quick actions */}
            <div className="absolute bottom-3 left-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Button size="sm" onClick={handleAddToCart} className="flex-1">
                <ShoppingCart className="w-4 h-4 mr-1" />
                Add to Cart
              </Button>
              <Button variant="secondary" size="sm" asChild>
                <Link to={`/book/${book.id}`}>
                  <Eye className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>

          <CardContent className="p-4">
            <h3 className="font-semibold text-lg line-clamp-2 mb-1">
              {book.title}
            </h3>
            {book.titleTelugu && (
              <p className="text-sm text-gray-600 telugu-text mb-1">
                {book.titleTelugu}
              </p>
            )}
            <p className="text-sm text-gray-600 mb-2">by {book.author}</p>

            <div className="flex items-center mb-3">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "w-4 h-4",
                      i < Math.floor(book.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300",
                    )}
                  />
                ))}
                <span className="text-sm text-gray-600 ml-2">
                  {book.rating} ({book.reviewCount})
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-xl font-bold text-brand-600">
                  ₹{book.price}
                </span>
                {book.originalPrice && (
                  <>
                    <span className="text-sm text-gray-500 line-through">
                      ₹{book.originalPrice}
                    </span>
                    <span className="text-sm text-green-600 font-medium">
                      Save ₹{discountedPrice}
                    </span>
                  </>
                )}
              </div>
            </div>
          </CardContent>
        </Link>
      </Card>
    );
  }

  // Default variant
  return (
    <Card className={cn("book-card-hover overflow-hidden group", className)}>
      <Link to={`/book/${book.id}`}>
        <div className="relative">
          <div className="aspect-[3/4] overflow-hidden">
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col space-y-1">
            {book.bestseller && (
              <Badge className="bg-yellow-500 text-black text-xs">
                Bestseller
              </Badge>
            )}
            {book.newArrival && (
              <Badge className="bg-green-500 text-white text-xs">New</Badge>
            )}
            {book.discount && book.discount > 0 && (
              <Badge className="bg-red-500 text-white text-xs">
                {book.discount}% OFF
              </Badge>
            )}
          </div>

          {/* Wishlist button - Always visible on mobile */}
          <Button
            variant="ghost"
            size="sm"
            onClick={handleToggleWishlist}
            className="absolute top-2 right-2 p-2 bg-white/90 backdrop-blur-sm hover:bg-white opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 touch-manipulation"
          >
            <Heart
              className={cn(
                "w-4 h-4",
                inWishlist ? "fill-red-500 text-red-500" : "text-gray-600",
              )}
            />
          </Button>
        </div>

        <CardContent className="p-3">
          <h3 className="font-medium text-base line-clamp-2 mb-1">
            {book.title}
          </h3>
          {book.titleTelugu && (
            <p className="text-xs text-gray-600 telugu-text mb-1 line-clamp-1">
              {book.titleTelugu}
            </p>
          )}
          <p className="text-sm text-gray-600 mb-2 line-clamp-1">
            by {book.author}
          </p>

          <div className="flex items-center mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "w-3 h-3",
                    i < Math.floor(book.rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300",
                  )}
                />
              ))}
              <span className="text-xs text-gray-600 ml-1">
                ({book.reviewCount})
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-1">
              <span className="text-lg font-bold text-brand-600">
                ₹{book.price}
              </span>
              {book.originalPrice && (
                <span className="text-xs text-gray-500 line-through">
                  ₹{book.originalPrice}
                </span>
              )}
            </div>
          </div>

          <Button
            size="sm"
            onClick={handleAddToCart}
            className="w-full opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 touch-manipulation h-9"
          >
            <ShoppingCart className="w-4 h-4 mr-1" />
            Add to Cart
          </Button>
        </CardContent>
      </Link>
    </Card>
  );
}
