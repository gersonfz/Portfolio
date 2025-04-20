import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from '../layout/LayoutPublic'
import { About, Home, Projects } from "../pages";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutPublic />,
        errorElement: 'Not found',
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/projects',
                element: <Projects/>
            },
        ]
    }
])  
