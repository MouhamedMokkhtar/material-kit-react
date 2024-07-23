import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';
import ActivitiesPage from 'src/sections/activities/view/activities-view';

export const IndexPage = lazy(() => import('src/pages/app'));
export const BlogPage = lazy(() => import('src/pages/blog'));
export const UserPage = lazy(() => import('src/pages/user'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const ResetPasswordPage = lazy(() => import('src/pages/reset-password'));
export const ProductsPage = lazy(() => import('src/pages/products'));
export const BillPage = lazy(() => import('src/pages/bill'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));
export const TokenPage = lazy(() => import('src/pages/token-page'));
export const PaymentMethodPage = lazy(() => import('src/pages/payment-method'));
export const SandboxPage = lazy(() => import('src/pages/sandbox'));

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <IndexPage />, index: true },
        { path: 'activities', element: <ActivitiesPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
        { path: 'bills', element: <BillPage /> },
        { path: 'payment-method', element: <PaymentMethodPage /> },
        { path: 'reset-password', element: <ResetPasswordPage /> },
        { path: 'token', element: <TokenPage /> },
        { path: 'sandbox', element: <SandboxPage /> },
      ],
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
