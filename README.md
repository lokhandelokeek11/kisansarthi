# KisanSarthi - Smart Agriculture Platform

A modern, production-ready web application for farmers that provides smart agriculture solutions including crop monitoring, weather insights, expert advisory, and market prices.

## 🌟 Features

- **Responsive Design**: Mobile-first, optimized for all devices (mobile, tablet, desktop)
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Component Architecture**: Reusable, scalable React components
- **Dashboard**: Full-featured farmer dashboard with real-time data
- **Landing Page**: Marketing website with clear value propositions
- **Authentication**: Phone number + OTP with Google login ready
- **Market Intelligence**: Real-time mandi prices and trends
- **Advisory System**: Expert articles and guidance

## 🚀 Tech Stack

- **Frontend Framework**: React 18 with Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Build Tool**: Vite

## 📁 Project Structure

```
src/
├── components/
│   ├── AdvisoryCard.jsx
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── CropCard.jsx
│   ├── Footer.jsx
│   ├── Input.jsx
│   ├── MarketItem.jsx
│   ├── Navbar.jsx
│   ├── QuickActionCard.jsx
│   ├── Sidebar.jsx
│   ├── WeatherCard.jsx
├── data/
│   └── dummyData.js
├── pages/
│   ├── AdvisoryPage.jsx
│   ├── DashboardPage.jsx
│   ├── LandingPage.jsx
│   ├── LoginPage.jsx
│   ├── MarketPage.jsx
├── App.jsx
├── main.jsx
└── index.css

public/
└── vite.svg
```

## 🏗️ Components

### Reusable UI Components
- **Button**: Configurable button with multiple variants and sizes
- **Card**: Flexible card component with hover effects
- **Input**: Form input with validation and icons
- **Navbar**: Responsive navigation bar
- **Sidebar**: Dashboard sidebar with navigation
- **Footer**: Multi-column footer with links

### Feature Components
- **WeatherCard**: Real-time weather display
- **CropCard**: Farm crop information with health status
- **MarketItem**: Commodity price display
- **AdvisoryCard**: Article preview cards
- **QuickActionCard**: Dashboard quick action buttons

## 📄 Pages

1. **Landing Page** (`/`): Marketing website with features, testimonials, and CTA
2. **Login Page** (`/login`): Multi-language authentication with phone/OTP
3. **Dashboard** (`/dashboard`): Main farmer dashboard with overview
4. **Advisory** (`/advisory`): Expert articles and guidance system
5. **Market** (`/market`): Real-time market prices and alerts

## 🎨 Design System

### Colors
- Primary: Green (`#16a34a` / `green-600`)
- Secondary: Yellow (weather accents)
- Accent: Blue (actions)
- Background: White / Light gray (`#f9fafb`)

### Typography
- Font Family: Inter (Google Fonts)
- Weights: 300-800
- Responsive sizing using Tailwind

### Spacing & Borders
- Consistent padding using Tailwind scale
- Rounded corners: `rounded-xl`, `rounded-2xl`
- Soft shadows with hover effects

## ⚡ Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development

```bash
# Start Vite dev server on http://localhost:5173
npm run dev
```

### Production Build

```bash
# Create optimized production build
npm run build

# Preview the production build locally
npm run preview
```

## 🚢 Deployment

### Vercel
1. Push code to GitHub repository
2. Import project in Vercel
3. Build command: `npm run build`
4. Output directory: `dist`
5. Deploy!

### Netlify
1. Build project: `npm run build`
2. Deploy the `dist` folder
3. Or connect GitHub repository

### Other Platforms
The app is fully static and can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting
- AWS Amplify
- Any static hosting service

## 🔧 Configuration

### Tailwind CSS
- Configuration: `tailwind.config.js`
- Dark mode support enabled (optional)
- Custom theme extensions in config

### React Router
- Routes defined in `App.jsx`
- Protected routes can be added for authenticated sections

## 📱 Responsive Breakpoints

- Mobile: Default (mobile-first)
- Tablet: `sm:` (640px)
- Desktop: `lg:` (1024px)
- Large Desktop: `xl:` (1280px)

## 🎯 Key Features Implementation

### Dashboard
- Weather card with location, temperature, and conditions
- Quick action grid for common tasks
- My Crops section with health status
- Live market prices panel

### Landing Page
- Hero section with compelling headline
- Feature cards with icons
- How it works section
- Dashboard preview
- Testimonials
- Call-to-action section

### Advisory System
- Search functionality
- Category filter chips
- Article cards with metadata
- Read time indicators

### Market Page
- Mandi selector with dropdown
- Tabbed interface (Nearby/Favorites/Grains)
- Real-time price updates (mocked)
- Price alert configuration
- Market insights panel

## 🔐 Authentication (Extensible)

Current implementation:
- Phone number input
- OTP flow
- Google login button
- Multi-language support (UI ready)

To add real authentication:
1. Integrate with SMS API (Twilio, MSG91, etc.)
2. Add OTP verification backend
3. Implement Google OAuth flow
4. Add JWT or session management
5. Create protected route components

## 🧪 Testing

```bash
# Add test script to package.json
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom

# Run tests
npm test
```

## 🐛 Issue Reporting

If you encounter any issues, please:
1. Check the browser console for errors
2. Verify all dependencies are installed
3. Ensure Node.js version is 18+
4. Clear Vite cache: `rm -rf node_modules/.vite`

## 📝 Future Enhancements

- [ ] Dark mode toggle
- [ ] Real-time API integration
- [ ] Push notifications
- [ ] Progress tracking
- [ ] Farm map integration
- [ ] Crop calendar
- [ ] Expense tracking
- [ ] Report generation

## 📄 License

MIT License - feel free to use this project for learning or commercial purposes.

## 🙏 Credits

Built with ❤️ for farmers everywhere.

---

**KisanSarthi** - Empowering Farmers with Smart Technology 🌾
