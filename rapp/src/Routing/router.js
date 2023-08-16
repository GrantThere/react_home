import {createBrowserRouter} from "react-router-dom";
import MainWr from "../components/HW_6/MainWr";
import {AllRoutes} from './AllRoutes'
import Todos from "../components/HW_6/todos/Todos";
import Albums from "../components/HW_6/Albums/Albums";
import Comments from "../components/HW_6/Comments/Comments";

export const router = createBrowserRouter([
    {
        path: AllRoutes.MAIN,
        element: <MainWr/>,
        children: [
            {
                path: AllRoutes.TODOS,
                element: <Todos/>
            },
            {
                path:AllRoutes.ALBUMS,
                element: <Albums/>
            },
            {
                path: AllRoutes.COMMENTS,
                element: <Comments/>
            }
        ]
    }
])