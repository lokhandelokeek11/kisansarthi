import { Navigate, useLocation } from 'react-router-dom'

// Redirect from /dashboard to appropriate role-based dashboard
export const DashboardRedirect = () => {
  const sellerType = localStorage.getItem('sellerType')
  const location = useLocation()

  // Preserve the intended path if there was one
  if (sellerType === 'fv') {
    return <Navigate to="/dashboard/fv" state={{ from: location }} replace />
  } else if (sellerType === 'agro') {
    return <Navigate to="/dashboard/agro" state={{ from: location }} replace />
  }

  // If no seller type, redirect to login
  return <Navigate to="/login" state={{ from: location }} replace />
}
