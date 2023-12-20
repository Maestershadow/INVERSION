import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './pages/Root';
import MainContent from './components/MainContent';
import AuthPage from './pages/AuthPage';
import { AuthProvider } from './providers/authProvider';


const router = createBrowserRouter([

  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <MainContent />
      }
    ],
  },
  {
    path: "/auth",
    element: <AuthPage />,
  }
]);



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider >
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
