import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Search, Heart, User, ShoppingBag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useCart, useWishlist } from "@/contexts/AppContext";
import { cn } from "@/lib/utils";

export function MobileBottomNav() {
  const location = useLocation();
  const { itemCount } = useCart();
  const { wishlist } = useWishlist();

  const navItems = [
    {
      id: "home",
      label: "Home",
      icon: Home,
      path: "/",
      badge: null,
    },
    {
      id: "shop",
      label: "Shop",
      icon: Search,
      path: "/shop",
      badge: null,
    },
    {
      id: "wishlist",
      label: "Wishlist",
      icon: Heart,
      path: "/wishlist",
      badge: wishlist.length > 0 ? wishlist.length : null,
    },
    {
      id: "cart",
      label: "Cart",
      icon: ShoppingBag,
      path: "/cart",
      badge: itemCount > 0 ? itemCount : null,
    },
    {
      id: "account",
      label: "Account",
      icon: User,
      path: "/login",
      badge: null,
    },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <nav className="grid grid-cols-5 h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);

          return (
            <Link
              key={item.id}
              to={item.path}
              className={cn(
                "flex flex-col items-center justify-center space-y-1 transition-colors touch-manipulation relative",
                active
                  ? "text-brand-600 bg-brand-50"
                  : "text-gray-600 hover:text-gray-900 active:bg-gray-100",
              )}
            >
              <div className="relative">
                <Icon className={cn("w-5 h-5", active && "text-brand-600")} />
                {item.badge && (
                  <Badge
                    variant="destructive"
                    className="absolute -top-2 -right-2 h-4 w-4 rounded-full p-0 flex items-center justify-center text-xs"
                  >
                    {item.badge > 99 ? "99+" : item.badge}
                  </Badge>
                )}
              </div>
              <span
                className={cn(
                  "text-xs font-medium",
                  active ? "text-brand-600" : "text-gray-600",
                )}
              >
                {item.label}
              </span>
              {active && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-brand-600 rounded-full"></div>
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
