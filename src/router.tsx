// router.tsx or wherever your router is defined
import { createBrowserRouter, Navigate } from 'react-router-dom';
import SkipSelection from './pages/SkipSelection';
import ErrorBoundary from './components/ErrorBoundary';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/skip-selection" replace />,
  },
  {
    path: '/skip-selection',
    element: <SkipSelection />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: '*',
    errorElement: <ErrorBoundary />,
    element: <ErrorBoundary />,
  },
]);
