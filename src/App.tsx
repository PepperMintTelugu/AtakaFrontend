import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "@/contexts/AppContext";
import { Navigation } from "@/components/Navigation";
import { Cart } from "@/components/Cart";
import { Wishlist } from "@/components/Wishlist";
import { Footer } from "@/components/Footer";
import Index from "./pages/Index";
import Shop from "./pages/Shop";
import BookDetails from "./pages/BookDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AppProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Navigation />
            <Cart />
            <Wishlist />

            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/book/:id" element={<BookDetails />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/admin" element={<Admin />} />

                {/* Placeholder routes for future implementation */}
                <Route
                  path="/login"
                  element={
                    <PlaceholderPage
                      title="Login"
                      description="Google One-tap signin coming soon"
                    />
                  }
                />
                <Route
                  path="/register"
                  element={
                    <PlaceholderPage
                      title="Register"
                      description="Account creation coming soon"
                    />
                  }
                />
                <Route
                  path="/checkout"
                  element={
                    <PlaceholderPage
                      title="Checkout"
                      description="Razorpay integration coming soon"
                    />
                  }
                />
                <Route
                  path="/orders"
                  element={
                    <PlaceholderPage
                      title="My Orders"
                      description="Order history coming soon"
                    />
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <PlaceholderPage
                      title="My Profile"
                      description="User profile management coming soon"
                    />
                  }
                />
                <Route
                  path="/shipping"
                  element={
                    <PlaceholderPage
                      title="Shipping Info"
                      description="Shipping information coming soon"
                    />
                  }
                />
                <Route
                  path="/returns"
                  element={
                    <PlaceholderPage
                      title="Returns"
                      description="Returns policy coming soon"
                    />
                  }
                />
                <Route
                  path="/faq"
                  element={
                    <PlaceholderPage
                      title="FAQ"
                      description="Frequently asked questions coming soon"
                    />
                  }
                />
                <Route
                  path="/track-order"
                  element={
                    <PlaceholderPage
                      title="Track Order"
                      description="ShipRocket tracking coming soon"
                    />
                  }
                />
                <Route
                  path="/privacy"
                  element={
                    <PlaceholderPage
                      title="Privacy Policy"
                      description="Privacy policy coming soon"
                    />
                  }
                />
                <Route
                  path="/terms"
                  element={
                    <PlaceholderPage
                      title="Terms of Service"
                      description="Terms and conditions coming soon"
                    />
                  }
                />

                {/* Catch-all route */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </BrowserRouter>
      </AppProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

// Placeholder component for future pages
function PlaceholderPage({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="w-24 h-24 bg-gradient-to-br from-brand-100 to-telugu-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-brand-500 to-telugu-500 rounded-full"></div>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
        <p className="text-gray-600 mb-8">{description}</p>
        <div className="space-y-4">
          <a
            href="/"
            className="inline-block px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-lg transition-colors"
          >
            Back to Homepage
          </a>
          <div className="text-sm text-gray-500">
            <p>
              This feature will be available in the next phase of development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
