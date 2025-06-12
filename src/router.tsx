import { createBrowserRouter, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import SkipSelection from './pages/SkipSelection';
import ErrorBoundary from './components/ErrorBoundary';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      { path: '/', element: <Navigate to="/skip-selection" replace /> },
      { path: '/skip-selection', element: <SkipSelection /> },
      { path: '*', element: <div className="p-10 text-center">404 Not Found</div> },
    ],
  },
]);
