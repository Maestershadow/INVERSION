import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './pages/Root';
import MainContent from './components/MainContent';
import AuthPage from './pages/AuthPage';
import { AuthProvider } from './providers/authProvider';
import SigninSection from './components/SigninSection';
import SignupSection from './components/SignupSection';


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
    children: [
      {
        index: true,
        element: <SigninSection />
      },
      {
        path: "signup",
        element: <SignupSection />
      }
    ]
  }
]);



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider >
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
