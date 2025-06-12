import { createBrowserRouter, Navigate } from 'react-router-dom';
import SkipSelection from './pages/SkipSelection';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/skip-selection" replace />,
  },
  {
    path: '/skip-selection',
    element: <SkipSelection />,
  },
]);
