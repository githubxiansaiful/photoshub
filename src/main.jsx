import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './layout/Main.jsx'
import Home from './pages/home/Home.jsx'
import About from './pages/about/About.jsx'
import Contact from './pages/contact/Contact.jsx'
import Privacy from './pages/policy/Privacy.jsx'
import Terms from './pages/policy/Terms.jsx'
import Faq from './pages/others/Faq.jsx'
import Blog from './pages/others/Blog.jsx'
import Login from './pages/user/Login.jsx'
import Categories from './pages/categories/Categories.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/privacy-policy",
        element: <Privacy></Privacy>
      },
      {
        path: "/terms-conditions",
        element: <Terms></Terms>
      },
      {
        path: "/faq",
        element: <Faq></Faq>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/categories",
        element: <Categories></Categories>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
