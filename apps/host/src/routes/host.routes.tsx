import { createBrowserRouter } from 'react-router-dom';
import { Layout, SignIn, NotFoundPage } from '@prime-fresh/components';
import { AdminRoutes } from './admin.routes';
import { OperationRoutes } from './operation.routes';
import { SharedRoutes } from './shared.routes';

export const HostRoutes = createBrowserRouter([
  {
    path: '/',
    element: <SignIn />,
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      ...AdminRoutes,
      ...OperationRoutes,
      ...SharedRoutes,
    ],
    errorElement: <NotFoundPage />
  }
],
);
