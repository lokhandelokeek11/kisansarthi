import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LandingPage from './pages/LandingPage'
import SellerSelectionPage from './pages/SellerSelectionPage'
import FVLoginPage from './pages/FVLoginPage'
import AgroLoginPage from './pages/AgroLoginPage'
import DashboardLayout from './components/DashboardLayout'
import FVDashboardPage from './pages/FVDashboardPage'
import AgroDashboardPage from './pages/AgroDashboardPage'
import AdvisoryPage from './pages/AdvisoryPage'
import MarketPage from './pages/MarketPage'
import FindBuyersPage from './pages/FindBuyersPage'
import MarketPricesPage from './pages/MarketPricesPage'
import WasteConnectPage from './pages/WasteConnectPage'
import ProfilePage from './pages/ProfilePage'
import AgroCataloguePage from './pages/AgroCataloguePage'
import AgroDealersPage from './pages/AgroDealersPage'
import AgroOrdersPage from './pages/AgroOrdersPage'
import AgroProfilePage from './pages/AgroProfilePage'

import { DashboardRedirect } from './components/Redirects'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes with Navbar/Footer */}
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-gray-50 flex flex-col">
              <Navbar />
              <main className="flex-1">
                <LandingPage />
              </main>
              <Footer />
            </div>
          }
        />

        {/* Auth routes */}
        <Route path="/login" element={<SellerSelectionPage />} />
        <Route path="/login/fv" element={<FVLoginPage />} />
        <Route path="/login/agro" element={<AgroLoginPage />} />

        {/* Dashboard routes with Layout */}
        <Route path="/dashboard" element={<DashboardRedirect />} />
        
        {/* FV Seller Dashboard & Features */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard/fv" element={<FVDashboardPage />} />
          <Route path="/find-buyers" element={<FindBuyersPage />} />
          <Route path="/market-prices" element={<MarketPricesPage />} />
          <Route path="/waste-connect" element={<WasteConnectPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>

        <Route path="/dashboard/agro" element={<DashboardLayout />}>
          <Route index element={<AgroDashboardPage />} />
        </Route>

        <Route path="/agro" element={<DashboardLayout />}>
          <Route path="catalogue" element={<AgroCataloguePage />} />
          <Route path="dealers" element={<AgroDealersPage />} />
          <Route path="orders" element={<AgroOrdersPage />} />
          <Route path="profile" element={<AgroProfilePage />} />
        </Route>

        {/* Public pages */}
        <Route path="/advisory" element={<AdvisoryPage />} />
        <Route path="/market" element={<MarketPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
