import React from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-brand-600 to-telugu-600 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              Stay Updated with New Releases
            </h3>
            <p className="text-white/90 mb-6 telugu-text">
              కొత్త పుస్తకాలు మరియు ప్రత్యేక ఆఫర్లకు సబ్స్క్రైబ్ చేసుకోండి
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:bg-white/20"
              />
              <Button
                variant="secondary"
                className="bg-white text-brand-600 hover:bg-gray-100 whitespace-nowrap"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center space-x-2 mb-4">
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-brand-500 to-telugu-500 rounded-lg">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold">TeluguBooks</span>
                  <span className="text-xs text-gray-400 telugu-text">
                    తెలుగు పుస్తకాలు
                  </span>
                </div>
              </Link>
              <p className="text-gray-300 text-sm mb-4">
                Preserving and promoting Telugu literature with free delivery,
                aesthetic packaging, and cut-throat prices.
              </p>
              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2 text-gray-400 hover:text-white hover:bg-gray-800"
                >
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2 text-gray-400 hover:text-white hover:bg-gray-800"
                >
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2 text-gray-400 hover:text-white hover:bg-gray-800"
                >
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2 text-gray-400 hover:text-white hover:bg-gray-800"
                >
                  <Youtube className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <nav className="space-y-2">
                <Link
                  to="/shop"
                  className="block text-gray-300 hover:text-white transition-colors text-sm"
                >
                  All Books
                </Link>
                <Link
                  to="/shop?category=literature"
                  className="block text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Literature
                </Link>
                <Link
                  to="/shop?category=poetry"
                  className="block text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Poetry
                </Link>
                <Link
                  to="/shop?category=devotional"
                  className="block text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Devotional
                </Link>
                <Link
                  to="/shop?category=children"
                  className="block text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Children's Books
                </Link>
                <Link
                  to="/shop?bestseller=true"
                  className="block text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Bestsellers
                </Link>
              </nav>
            </div>

            {/* Customer Service */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Customer Service</h4>
              <nav className="space-y-2">
                <Link
                  to="/about"
                  className="block text-gray-300 hover:text-white transition-colors text-sm"
                >
                  About Us
                </Link>
                <Link
                  to="/contact"
                  className="block text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Contact Us
                </Link>
                <Link
                  to="/shipping"
                  className="block text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Shipping Info
                </Link>
                <Link
                  to="/returns"
                  className="block text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Returns & Exchanges
                </Link>
                <Link
                  to="/faq"
                  className="block text-gray-300 hover:text-white transition-colors text-sm"
                >
                  FAQ
                </Link>
                <Link
                  to="/track-order"
                  className="block text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Track Your Order
                </Link>
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Mail className="w-4 h-4 text-brand-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-300">Email:</p>
                    <a
                      href="mailto:support@telugubooks.org"
                      className="text-sm text-white hover:text-brand-400 transition-colors"
                    >
                      support@telugubooks.org
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="w-4 h-4 text-brand-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-300">Phone:</p>
                    <a
                      href="tel:+919876543210"
                      className="text-sm text-white hover:text-brand-400 transition-colors"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-brand-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-300">Address:</p>
                    <p className="text-sm text-white">
                      Hyderabad, Telangana
                      <br />
                      India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-800" />

      {/* Bottom Footer */}
      <div className="py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-sm text-gray-400">
                © 2024 TeluguBooks. All rights reserved.
              </p>
              <div className="flex space-x-4">
                <Link
                  to="/privacy"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <span>Powered by</span>
                <span className="text-brand-400 font-medium">Razorpay</span>
                <span>&</span>
                <span className="text-telugu-400 font-medium">ShipRocket</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
