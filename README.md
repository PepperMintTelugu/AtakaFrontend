# Telugu Books Ecommerce Platform 📚

A complete full-stack ecommerce platform for Telugu books with mobile-first design, admin dashboard, payment integration, and theme customization.

## 🚀 Features

### Frontend

- ✅ **Mobile-First Design** - Amazon/Flipkart-style mobile interface
- ✅ **Sticky Navigation** - Mobile header with search and bottom navigation
- ✅ **Theme Customization** - Complete brand customization (colors, logo, buttons)
- ✅ **Book Catalog** - Advanced search, filtering, and sorting
- ✅ **Shopping Cart & Wishlist** - Persistent cart with local storage
- ✅ **Responsive Design** - Works perfectly on all devices
- ✅ **Telugu Language Support** - Bilingual content support

### Backend

- ✅ **Complete REST API** - Express.js with MongoDB
- ✅ **Authentication** - JWT + Google OAuth integration
- ✅ **Payment Gateway** - Razorpay integration
- ✅ **Shipping Integration** - ShipRocket API ready
- ✅ **Admin Dashboard** - Book management, orders, users
- ✅ **File Uploads** - Cloudinary integration for images
- ✅ **Security** - Rate limiting, validation, sanitization

### Admin Features

- ✅ **Product Management** - Add, edit, delete books
- ✅ **Order Management** - Track and update order status
- ✅ **User Management** - Manage customer accounts
- ✅ **Theme Customization** - Brand colors, logo, button styles
- ✅ **Analytics Dashboard** - Sales stats and insights

## 🛠️ Tech Stack

### Frontend

- **React 18** - Modern React with hooks
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **TailwindCSS** - Utility-first styling
- **Shadcn/UI** - Accessible components
- **React Router** - Client-side routing
- **React Query** - Server state management

### Backend

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **Razorpay** - Payment processing
- **Cloudinary** - Image storage
- **Nodemailer** - Email service

## 📦 Installation

### Prerequisites

- Node.js 18+
- MongoDB
- Cloudinary account
- Razorpay account
- Google OAuth credentials

### Frontend Setup

```bash
# Clone the repository
git clone <your-repo-url>
cd telugu-books-platform

# Install dependencies
npm install

# Start development server
npm run dev
```

### Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Edit .env with your configuration
nano .env

# Start the server
npm run dev
```

### Environment Variables

Create a `.env` file in the backend directory:

```env
# Server Configuration
NODE_ENV=development
PORT=5000
FRONTEND_URL=http://localhost:3000

# Database
MONGODB_URI=mongodb://localhost:27017/telugu-books

# JWT Secret
JWT_SECRET=your-super-secret-jwt-key-here
JWT_EXPIRE=7d

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# Razorpay Configuration
RAZORPAY_KEY_ID=your-razorpay-key-id
RAZORPAY_KEY_SECRET=your-razorpay-key-secret

# ShipRocket Configuration
SHIPROCKET_EMAIL=your-shiprocket-email
SHIPROCKET_PASSWORD=your-shiprocket-password

# Cloudinary (for image uploads)
CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_API_SECRET=your-cloudinary-api-secret

# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

## 🚀 Deployment

### Deploy to Production

#### Frontend (Netlify/Vercel)

```bash
# Build the frontend
npm run build

# Deploy to your hosting provider
# Upload the 'dist' folder
```

#### Backend (VPS/Cloud)

```bash
# On your server
git clone <your-repo-url>
cd telugu-books-platform/backend

# Install dependencies
npm install --production

# Set up environment variables
cp .env.example .env
# Edit .env with production values

# Install PM2 for process management
npm install -g pm2

# Start the application
pm2 start src/server.js --name "telugu-books-api"

# Set up nginx reverse proxy
# Configure SSL with Let's Encrypt
```

### Database Setup

```bash
# Import sample data (optional)
mongoimport --db telugu-books --collection books --file sample-books.json

# Create admin user
node scripts/createAdmin.js
```

## 📱 Mobile Features

### Sticky Navigation

- **Top Header**: Logo, search, cart, wishlist, menu
- **Bottom Navigation**: Home, Shop, Wishlist, Cart, Account
- **Search Bar**: Always visible and prominent on mobile

### Amazon-Style Features

- **Product Cards**: Image, title, author, price, ratings
- **Filters**: Category, language, price range, ratings
- **Sort Options**: Price, popularity, ratings, newest
- **Touch Optimized**: Large buttons, easy navigation

## 🎨 Theme Customization

### Admin Theme Panel

Access `/admin/theme` to customize:

- **Brand Settings**

  - Company name (English & Telugu)
  - Logo upload
  - Taglines
  - Favicon

- **Color Scheme**

  - Primary color
  - Secondary color
  - Accent color
  - Background & text colors

- **Button Styles**
  - Add to Cart button
  - Buy Now button
  - Wishlist button
  - Custom colors and hover effects

### Custom CSS Variables

The theme system uses CSS custom properties:

```css
:root {
  --color-primary: #ed7611;
  --color-secondary: #0ea5e9;
  --btn-add-to-cart-bg: #ed7611;
  --btn-buy-now-bg: #0ea5e9;
  /* ... more variables */
}
```

## 💳 Payment Integration

### Razorpay Setup

1. Create Razorpay account
2. Get API keys from dashboard
3. Add keys to environment variables
4. Test with sample payments

### Payment Flow

1. User adds items to cart
2. Proceeds to checkout
3. Creates Razorpay order
4. Payment processing
5. Order confirmation
6. Stock updates

## 📦 Shipping Integration

### ShipRocket Setup

1. Create ShipRocket account
2. Get API credentials
3. Configure pickup address
4. Set up webhook endpoints

### Shipping Flow

1. Order confirmed
2. Create shipment in ShipRocket
3. Generate AWB and tracking ID
4. Send tracking details to customer
5. Handle delivery updates

## 🔐 Authentication

### Google OAuth Setup

1. Go to Google Cloud Console
2. Create OAuth 2.0 credentials
3. Configure authorized origins
4. Add client ID to environment

### JWT Authentication

- Secure token-based authentication
- 7-day token expiry
- Refresh token support
- Role-based access control

## 📊 Admin Dashboard

### Features

- **Analytics**: Revenue, orders, users, books
- **Product Management**: CRUD operations
- **Order Management**: Status updates, tracking
- **User Management**: Roles, permissions
- **Settings**: Theme, features, notifications

### Access

- Login as admin user
- Navigate to `/admin`
- Use theme customization at `/admin/theme`

## 🔧 API Documentation

### Authentication Endpoints

```
POST /api/auth/register
POST /api/auth/login
POST /api/auth/google
GET  /api/auth/me
POST /api/auth/logout
```

### Books Endpoints

```
GET    /api/books
GET    /api/books/:id
POST   /api/books (Admin)
PUT    /api/books/:id (Admin)
DELETE /api/books/:id (Admin)
```

### Orders Endpoints

```
GET  /api/orders
GET  /api/orders/:id
PUT  /api/orders/:id/cancel
POST /api/orders/:id/status (Admin)
```

### Payment Endpoints

```
POST /api/payments/create-order
POST /api/payments/verify
POST /api/payments/webhook
```

## 🐛 Troubleshooting

### Common Issues

1. **MongoDB Connection Error**

   ```bash
   # Check if MongoDB is running
   sudo systemctl status mongod

   # Start MongoDB
   sudo systemctl start mongod
   ```

2. **Port Already in Use**

   ```bash
   # Kill process using port 5000
   lsof -ti:5000 | xargs kill -9
   ```

3. **Environment Variables Not Loading**
   ```bash
   # Check .env file exists and has correct format
   cat .env | grep -v "^#"
   ```

### Performance Optimization

1. **Database Indexing**

   ```javascript
   // Add indexes for better query performance
   db.books.createIndex({ title: "text", author: "text" });
   db.books.createIndex({ category: 1, inStock: 1 });
   ```

2. **Image Optimization**

   - Use Cloudinary transformations
   - Implement lazy loading
   - WebP format support

3. **Caching**
   - Redis for session storage
   - CDN for static assets
   - API response caching

## 📈 Scaling

### Database Scaling

- MongoDB replica sets
- Read replicas for analytics
- Sharding for large datasets

### Application Scaling

- Load balancer (nginx)
- Multiple server instances
- Container deployment (Docker)

### CDN Integration

- Static assets delivery
- Image optimization
- Global distribution

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Make changes
4. Add tests
5. Submit pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:

- Email: support@telugubooks.org
- GitHub Issues: Create an issue
- Documentation: Check the wiki

## 🎯 Roadmap

### Phase 1 (Current)

- ✅ Basic ecommerce functionality
- ✅ Payment integration
- ✅ Admin dashboard
- ✅ Theme customization

### Phase 2 (Upcoming)

- 📧 Email notifications
- 🔔 Push notifications
- 📊 Advanced analytics
- 🎁 Coupon system
- ⭐ Review system

### Phase 3 (Future)

- 📱 Mobile app (React Native)
- 🤖 AI recommendations
- 📚 Ebook support
- 🌐 Multi-language support
- 🎨 Advanced themes

---

**Built with ❤️ for Telugu literature enthusiasts**

Made by [Kataari] | [Website](https://store.ataka.co.in)
