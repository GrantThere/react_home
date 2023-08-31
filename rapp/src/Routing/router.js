import {createBrowserRouter} from "react-router-dom";
import {MainWr} from "../components/HW_6/MainWr";
import {AllRoutes} from './AllRoutes'
import {Cars} from "../components/HomeWork_7/cars/Cars";
import {Posts} from "../components/HomeWork_7/posts/Posts";
import {Comments} from "../components/HomeWork_7/comments/Comments";

export const router = createBrowserRouter([
    {
        path: AllRoutes.MAIN,
        element: <MainWr/>,
        children: [
            {
                path: AllRoutes.CARS,
                element: <Cars/>
            },
            {
                path: AllRoutes.POSTS,
                element: <Posts/>
            },
            {
                path: AllRoutes.COMMENTS,
                element: <Comments/>
            }

        ]
    }
])