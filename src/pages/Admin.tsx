import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Plus,
  Search,
  Edit3,
  Trash2,
  Eye,
  BookOpen,
  Users,
  ShoppingCart,
  TrendingUp,
  Filter,
  Upload,
  Save,
  X,
  CreditCard,
  Truck,
  Settings,
  Key,
  CheckCircle,
  XCircle,
  ExternalLink,
  Copy,
  RefreshCw,
  AlertCircle,
  Zap,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { mockBooks, categories, languages } from "@/data/books";
import { Book } from "@/types/book";

export default function Admin() {
  const [isAddBookOpen, setIsAddBookOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [books, setBooks] = useState(mockBooks);

  // Sample stats data
  const stats = {
    totalBooks: books.length,
    totalOrders: 1250,
    totalCustomers: 850,
    totalRevenue: 245000,
  };

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      !selectedCategory ||
      selectedCategory === "all" ||
      book.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
              >
                <BookOpen className="w-5 h-5" />
                <span>Back to Store</span>
              </Link>
              <div className="h-6 w-px bg-gray-300"></div>
              <h1 className="text-2xl font-bold text-gray-900">
                Admin Dashboard
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" asChild>
                <Link to="/admin/import">
                  <Upload className="w-4 h-4 mr-2" />
                  Import Products
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/admin/theme">
                  <Settings className="w-4 h-4 mr-2" />
                  Theme Settings
                </Link>
              </Button>
              <span className="text-sm text-gray-600">Welcome, Admin</span>
              <Button variant="outline" asChild>
                <Link to="/login">Logout</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="books">Books</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="customers">Customers</TabsTrigger>
            <TabsTrigger value="payments">Payments</TabsTrigger>
            <TabsTrigger value="shipping">Shipping</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Books
                  </CardTitle>
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.totalBooks}</div>
                  <p className="text-xs text-muted-foreground">
                    +12 from last month
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Orders
                  </CardTitle>
                  <ShoppingCart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.totalOrders}</div>
                  <p className="text-xs text-muted-foreground">
                    +180 from last month
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Customers
                  </CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {stats.totalCustomers}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    +73 from last month
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Revenue</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    ₹{stats.totalRevenue.toLocaleString()}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    +20.1% from last month
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Integration Status */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        Payments
                      </p>
                      <p className="text-xs text-green-600">
                        Razorpay Connected
                      </p>
                    </div>
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <CreditCard className="w-4 h-4 text-green-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        Shipping
                      </p>
                      <p className="text-xs text-green-600">ShipRocket Ready</p>
                    </div>
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Truck className="w-4 h-4 text-green-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        Authentication
                      </p>
                      <p className="text-xs text-green-600">
                        Google OAuth Active
                      </p>
                    </div>
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Shield className="w-4 h-4 text-green-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Theme</p>
                      <p className="text-xs text-blue-600">Customizable</p>
                    </div>
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Settings className="w-4 h-4 text-blue-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Orders</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between"
                      >
                        <div>
                          <p className="font-medium">Order #{1000 + i}</p>
                          <p className="text-sm text-gray-600">
                            Customer {i} • ₹{(i * 299).toLocaleString()}
                          </p>
                        </div>
                        <Badge variant="secondary">Pending</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Popular Books</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {books.slice(0, 5).map((book) => (
                      <div
                        key={book.id}
                        className="flex items-center justify-between"
                      >
                        <div>
                          <p className="font-medium">{book.title}</p>
                          <p className="text-sm text-gray-600">
                            {book.author} • ₹{book.price}
                          </p>
                        </div>
                        <span className="text-sm font-medium">
                          {book.reviewCount} sales
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Books Tab */}
          <TabsContent value="books" className="space-y-6">
            {/* Books Header */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between">
              <div>
                <h2 className="text-2xl font-bold">Books Management</h2>
                <p className="text-gray-600">
                  Manage your book inventory and add new books
                </p>
              </div>
              <AddBookDialog
                isOpen={isAddBookOpen}
                onOpenChange={setIsAddBookOpen}
              />
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search books..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Books Table */}
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Book</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Stock</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredBooks.map((book) => (
                      <TableRow key={book.id}>
                        <TableCell>
                          <div className="flex items-center space-x-3">
                            <img
                              src={book.image}
                              alt={book.title}
                              className="w-12 h-16 object-cover rounded"
                            />
                            <div>
                              <p className="font-medium">{book.title}</p>
                              <p className="text-sm text-gray-600">
                                {book.author}
                              </p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{book.category}</TableCell>
                        <TableCell>₹{book.price}</TableCell>
                        <TableCell>{book.stockCount}</TableCell>
                        <TableCell>
                          <Badge
                            variant={book.inStock ? "default" : "destructive"}
                          >
                            {book.inStock ? "In Stock" : "Out of Stock"}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end space-x-2">
                            <Button variant="ghost" size="sm">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Edit3 className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Orders Tab */}
          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle>Orders Management</CardTitle>
                <p className="text-gray-600">
                  Manage customer orders and track shipments
                </p>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <ShoppingCart className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Orders Management
                  </h3>
                  <p className="text-gray-600">
                    Order management system will be available in the next phase.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Customers Tab */}
          <TabsContent value="customers">
            <Card>
              <CardHeader>
                <CardTitle>Customer Management</CardTitle>
                <p className="text-gray-600">
                  View and manage customer accounts
                </p>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Customer Management
                  </h3>
                  <p className="text-gray-600">
                    Customer management system will be available in the next
                    phase.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Payments (Razorpay) Tab */}
          <TabsContent value="payments">
            <PaymentIntegrationTab />
          </TabsContent>

          {/* Shipping (ShipRocket) Tab */}
          <TabsContent value="shipping">
            <ShippingIntegrationTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

// Add Book Dialog Component
function AddBookDialog({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [formData, setFormData] = useState({
    title: "",
    titleTelugu: "",
    author: "",
    authorTelugu: "",
    publisher: "",
    publisherTelugu: "",
    isbn: "",
    price: "",
    originalPrice: "",
    description: "",
    descriptionTelugu: "",
    category: "",
    pages: "",
    language: "",
    publicationYear: "",
    weight: "",
    length: "",
    width: "",
    height: "",
    stockCount: "",
    tags: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("New book data:", formData);
    // Reset form and close dialog
    setFormData({
      title: "",
      titleTelugu: "",
      author: "",
      authorTelugu: "",
      publisher: "",
      publisherTelugu: "",
      isbn: "",
      price: "",
      originalPrice: "",
      description: "",
      descriptionTelugu: "",
      category: "",
      pages: "",
      language: "",
      publicationYear: "",
      weight: "",
      length: "",
      width: "",
      height: "",
      stockCount: "",
      tags: "",
    });
    onOpenChange(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add New Book
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add New Book</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="title">Title *</Label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="titleTelugu">Title (Telugu)</Label>
              <Input
                id="titleTelugu"
                name="titleTelugu"
                value={formData.titleTelugu}
                onChange={handleInputChange}
                className="telugu-text"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="author">Author *</Label>
              <Input
                id="author"
                name="author"
                value={formData.author}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="authorTelugu">Author (Telugu)</Label>
              <Input
                id="authorTelugu"
                name="authorTelugu"
                value={formData.authorTelugu}
                onChange={handleInputChange}
                className="telugu-text"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="publisher">Publisher *</Label>
              <Input
                id="publisher"
                name="publisher"
                value={formData.publisher}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="publisherTelugu">Publisher (Telugu)</Label>
              <Input
                id="publisherTelugu"
                name="publisherTelugu"
                value={formData.publisherTelugu}
                onChange={handleInputChange}
                className="telugu-text"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="category">Category *</Label>
              <Select
                value={formData.category}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, category: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="language">Language *</Label>
              <Select
                value={formData.language}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, language: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  {languages.map((language) => (
                    <SelectItem key={language.id} value={language.name}>
                      {language.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="isbn">ISBN *</Label>
              <Input
                id="isbn"
                name="isbn"
                value={formData.isbn}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <Label htmlFor="price">Price (₹) *</Label>
              <Input
                id="price"
                name="price"
                type="number"
                value={formData.price}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="originalPrice">Original Price (₹)</Label>
              <Input
                id="originalPrice"
                name="originalPrice"
                type="number"
                value={formData.originalPrice}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="pages">Pages *</Label>
              <Input
                id="pages"
                name="pages"
                type="number"
                value={formData.pages}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="stockCount">Stock Count *</Label>
              <Input
                id="stockCount"
                name="stockCount"
                type="number"
                value={formData.stockCount}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <Label htmlFor="length">Length (cm)</Label>
              <Input
                id="length"
                name="length"
                type="number"
                value={formData.length}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="width">Width (cm)</Label>
              <Input
                id="width"
                name="width"
                type="number"
                value={formData.width}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="height">Height (cm)</Label>
              <Input
                id="height"
                name="height"
                type="number"
                value={formData.height}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="weight">Weight (g)</Label>
              <Input
                id="weight"
                name="weight"
                type="number"
                value={formData.weight}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="publicationYear">Publication Year</Label>
            <Input
              id="publicationYear"
              name="publicationYear"
              type="number"
              value={formData.publicationYear}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <Label htmlFor="description">Description *</Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={3}
              required
            />
          </div>

          <div>
            <Label htmlFor="descriptionTelugu">Description (Telugu)</Label>
            <Textarea
              id="descriptionTelugu"
              name="descriptionTelugu"
              value={formData.descriptionTelugu}
              onChange={handleInputChange}
              rows={3}
              className="telugu-text"
            />
          </div>

          <div>
            <Label htmlFor="tags">Tags (comma-separated)</Label>
            <Input
              id="tags"
              name="tags"
              value={formData.tags}
              onChange={handleInputChange}
              placeholder="Classic, Literature, Award-winning"
            />
          </div>

          <div>
            <Label>Book Cover Image</Label>
            <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-600">
                Click to upload or drag and drop
              </p>
              <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
            </div>
          </div>

          <div className="flex justify-end space-x-4 pt-4 border-t">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button type="submit">
              <Save className="w-4 h-4 mr-2" />
              Add Book
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

// Payment Integration Tab Component
function PaymentIntegrationTab() {
  const [razorpayConfig, setRazorpayConfig] = useState({
    keyId: import.meta.env.VITE_RAZORPAY_KEY_ID || "",
    keySecret: "",
    webhookSecret: "",
    isLive: false,
  });
  const [isConnected, setIsConnected] = useState(false);
  const [transactions, setTransactions] = useState([
    {
      id: "pay_123456789",
      orderId: "order_987654321",
      amount: 599,
      status: "captured",
      date: "2024-01-15",
      customer: "John Doe",
    },
    {
      id: "pay_123456788",
      orderId: "order_987654320",
      amount: 899,
      status: "failed",
      date: "2024-01-14",
      customer: "Jane Smith",
    },
    {
      id: "pay_123456787",
      orderId: "order_987654319",
      amount: 1299,
      status: "captured",
      date: "2024-01-13",
      customer: "Mike Johnson",
    },
  ]);

  const handleConfigSave = () => {
    // Save Razorpay configuration
    console.log("Saving Razorpay config:", razorpayConfig);
    setIsConnected(true);
  };

  const testConnection = () => {
    // Test Razorpay connection
    console.log("Testing Razorpay connection...");
  };

  return (
    <div className="space-y-6">
      {/* Razorpay Configuration */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <CreditCard className="w-5 h-5 mr-2" />
            Razorpay Configuration
          </CardTitle>
          <p className="text-gray-600">
            Configure your Razorpay payment gateway integration
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Connection Status */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              {isConnected ? (
                <CheckCircle className="w-5 h-5 text-green-500" />
              ) : (
                <XCircle className="w-5 h-5 text-red-500" />
              )}
              <div>
                <h3 className="font-medium">
                  {isConnected ? "Connected" : "Not Connected"}
                </h3>
                <p className="text-sm text-gray-600">
                  {isConnected
                    ? "Razorpay is configured and ready to accept payments"
                    : "Configure Razorpay to start accepting payments"}
                </p>
              </div>
            </div>
            {isConnected && (
              <Badge
                variant="secondary"
                className="bg-green-100 text-green-700"
              >
                {razorpayConfig.isLive ? "Live Mode" : "Test Mode"}
              </Badge>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="keyId">Key ID</Label>
              <div className="relative">
                <Input
                  id="keyId"
                  value={razorpayConfig.keyId}
                  onChange={(e) =>
                    setRazorpayConfig((prev) => ({
                      ...prev,
                      keyId: e.target.value,
                    }))
                  }
                  placeholder="rzp_test_..."
                />
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-2 top-1 h-8 w-8 p-0"
                  onClick={() =>
                    navigator.clipboard.writeText(razorpayConfig.keyId)
                  }
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div>
              <Label htmlFor="keySecret">Key Secret</Label>
              <Input
                id="keySecret"
                type="password"
                value={razorpayConfig.keySecret}
                onChange={(e) =>
                  setRazorpayConfig((prev) => ({
                    ...prev,
                    keySecret: e.target.value,
                  }))
                }
                placeholder="Enter your key secret"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="webhookSecret">Webhook Secret</Label>
            <Input
              id="webhookSecret"
              type="password"
              value={razorpayConfig.webhookSecret}
              onChange={(e) =>
                setRazorpayConfig((prev) => ({
                  ...prev,
                  webhookSecret: e.target.value,
                }))
              }
              placeholder="Enter webhook secret"
            />
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="isLive"
              checked={razorpayConfig.isLive}
              onChange={(e) =>
                setRazorpayConfig((prev) => ({
                  ...prev,
                  isLive: e.target.checked,
                }))
              }
              className="rounded"
            />
            <Label htmlFor="isLive">Enable Live Mode</Label>
          </div>

          <div className="flex space-x-3">
            <Button onClick={testConnection} variant="outline">
              <Zap className="w-4 h-4 mr-2" />
              Test Connection
            </Button>
            <Button onClick={handleConfigSave}>
              <Save className="w-4 h-4 mr-2" />
              Save Configuration
            </Button>
            <Button variant="outline" asChild>
              <a
                href="https://dashboard.razorpay.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Razorpay Dashboard
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Recent Transactions */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
          <p className="text-gray-600">
            Latest payment transactions from Razorpay
          </p>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Transaction ID</TableHead>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell className="font-mono text-sm">
                      {transaction.id}
                    </TableCell>
                    <TableCell className="font-mono text-sm">
                      {transaction.orderId}
                    </TableCell>
                    <TableCell>{transaction.customer}</TableCell>
                    <TableCell>₹{transaction.amount}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          transaction.status === "captured"
                            ? "default"
                            : transaction.status === "failed"
                              ? "destructive"
                              : "secondary"
                        }
                      >
                        {transaction.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{transaction.date}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Payment Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Payment Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-2">Accepted Payment Methods</h3>
              <div className="space-y-2">
                {[
                  "Credit/Debit Cards",
                  "UPI",
                  "Net Banking",
                  "Wallets",
                  "EMI",
                ].map((method) => (
                  <div key={method} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id={method}
                      defaultChecked
                      className="rounded"
                    />
                    <Label htmlFor={method}>{method}</Label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-2">Currency Settings</h3>
              <Select defaultValue="INR">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="INR">Indian Rupee (₹)</SelectItem>
                  <SelectItem value="USD">US Dollar ($)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Shipping Integration Tab Component
function ShippingIntegrationTab() {
  const [shiprocketConfig, setShiprocketConfig] = useState({
    email: "",
    password: "",
    token: "",
    companyId: "",
    isConnected: false,
  });
  const [shippingRates, setShippingRates] = useState([
    { zone: "Local", rate: 40, freeAbove: 500 },
    { zone: "Metro", rate: 60, freeAbove: 500 },
    { zone: "Rest of India", rate: 80, freeAbove: 500 },
    { zone: "Northeast", rate: 100, freeAbove: 500 },
  ]);

  const handleShiprocketLogin = () => {
    // Authenticate with ShipRocket
    console.log("Connecting to ShipRocket...");
    setShiprocketConfig((prev) => ({ ...prev, isConnected: true }));
  };

  return (
    <div className="space-y-6">
      {/* ShipRocket Configuration */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Truck className="w-5 h-5 mr-2" />
            ShipRocket Configuration
          </CardTitle>
          <p className="text-gray-600">
            Configure your ShipRocket shipping integration
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Connection Status */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              {shiprocketConfig.isConnected ? (
                <CheckCircle className="w-5 h-5 text-green-500" />
              ) : (
                <XCircle className="w-5 h-5 text-red-500" />
              )}
              <div>
                <h3 className="font-medium">
                  {shiprocketConfig.isConnected ? "Connected" : "Not Connected"}
                </h3>
                <p className="text-sm text-gray-600">
                  {shiprocketConfig.isConnected
                    ? "ShipRocket is configured and ready for shipping"
                    : "Configure ShipRocket to start shipping orders"}
                </p>
              </div>
            </div>
            {shiprocketConfig.isConnected && (
              <Badge
                variant="secondary"
                className="bg-green-100 text-green-700"
              >
                Active
              </Badge>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="shipEmail">ShipRocket Email</Label>
              <Input
                id="shipEmail"
                type="email"
                value={shiprocketConfig.email}
                onChange={(e) =>
                  setShiprocketConfig((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }))
                }
                placeholder="your-email@example.com"
              />
            </div>
            <div>
              <Label htmlFor="shipPassword">Password</Label>
              <Input
                id="shipPassword"
                type="password"
                value={shiprocketConfig.password}
                onChange={(e) =>
                  setShiprocketConfig((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }))
                }
                placeholder="Enter your password"
              />
            </div>
          </div>

          <div className="flex space-x-3">
            <Button onClick={handleShiprocketLogin}>
              <Key className="w-4 h-4 mr-2" />
              Connect to ShipRocket
            </Button>
            <Button variant="outline" asChild>
              <a
                href="https://app.shiprocket.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                ShipRocket Panel
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Shipping Rates */}
      <Card>
        <CardHeader>
          <CardTitle>Shipping Rates</CardTitle>
          <p className="text-gray-600">
            Configure shipping rates for different zones
          </p>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Zone</TableHead>
                  <TableHead>Base Rate (₹)</TableHead>
                  <TableHead>Free Shipping Above (₹)</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {shippingRates.map((rate, index) => (
                  <TableRow key={rate.zone}>
                    <TableCell className="font-medium">{rate.zone}</TableCell>
                    <TableCell>₹{rate.rate}</TableCell>
                    <TableCell>₹{rate.freeAbove}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <Edit3 className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Pickup Address */}
      <Card>
        <CardHeader>
          <CardTitle>Pickup Address</CardTitle>
          <p className="text-gray-600">
            Configure your warehouse/pickup address
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="pickupName">Company Name</Label>
              <Input
                id="pickupName"
                placeholder="Your Company Name"
                defaultValue="Telugu Books Store"
              />
            </div>
            <div>
              <Label htmlFor="pickupPhone">Phone</Label>
              <Input
                id="pickupPhone"
                placeholder="Phone number"
                defaultValue="+91 9876543210"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="pickupAddress">Address</Label>
            <Input
              id="pickupAddress"
              placeholder="Complete address"
              defaultValue="123 Main Street, City, State - 500001"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="pickupCity">City</Label>
              <Input id="pickupCity" defaultValue="Hyderabad" />
            </div>
            <div>
              <Label htmlFor="pickupState">State</Label>
              <Input id="pickupState" defaultValue="Telangana" />
            </div>
            <div>
              <Label htmlFor="pickupPincode">Pincode</Label>
              <Input id="pickupPincode" defaultValue="500001" />
            </div>
          </div>
          <Button>
            <Save className="w-4 h-4 mr-2" />
            Save Pickup Address
          </Button>
        </CardContent>
      </Card>

      {/* Courier Partners */}
      <Card>
        <CardHeader>
          <CardTitle>Courier Partners</CardTitle>
          <p className="text-gray-600">Available shipping partners</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "BlueDart", status: "active", logo: "BD" },
              { name: "Delhivery", status: "active", logo: "DL" },
              { name: "Ecom Express", status: "active", logo: "EE" },
              { name: "DTDC", status: "inactive", logo: "DT" },
              { name: "FedEx", status: "active", logo: "FX" },
              { name: "Professional", status: "active", logo: "PR" },
            ].map((partner) => (
              <div
                key={partner.name}
                className="flex items-center justify-between p-3 border rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-sm font-bold text-blue-600">
                    {partner.logo}
                  </div>
                  <span className="font-medium">{partner.name}</span>
                </div>
                <Badge
                  variant={
                    partner.status === "active" ? "default" : "secondary"
                  }
                >
                  {partner.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
