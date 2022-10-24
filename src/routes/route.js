import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Category from "../pages/Category/Category";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import News from "../pages/News/News";
import Register from "../pages/Register/Register";
import TermsAndConditions from "../pages/TermsAndConditions/TermsAndConditions";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <p>404 Page not found</p>,
        children: [
            {
                path: '/',
                element: <Home/>,
                loader: () => fetch('https://news-portal-server-peach.vercel.app/news')
            },
            {
                path: '/category/:id',
                element: <Category/>,
                loader: ({params}) => fetch(`https://news-portal-server-peach.vercel.app/category/${params.id}`)
            },
            {
                path: '/news/:id',
                element: <PrivateRoute><News/></PrivateRoute>,
                loader: ({params}) => fetch(`https://news-portal-server-peach.vercel.app/news/${params.id}`)
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/terms-conditions',
                element: <TermsAndConditions/>
            }
        ]
    }
])