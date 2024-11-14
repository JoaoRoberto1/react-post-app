import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // Importação correta
import './index.css';
import App from './App.jsx';
import { Home } from './pages/home/Home.jsx';
import Login from './pages/login/Login.jsx';
import Post from './pages/Post/Post.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Contato } from './pages/contato/Contato.jsx';
import { Sobre } from './pages/sobre/Sobre.jsx';
import { Layout } from './components/layout/Layout.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/post",
        element: <Post />,
      },
      {
        path: "/contato",
        element: <Contato />,
      },
      {
        path: "/sobre",
        element: <Sobre />,
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
