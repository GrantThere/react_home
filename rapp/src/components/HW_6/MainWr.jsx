import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {AllRoutes} from "../../Routing/AllRoutes";

class MainWr extends Component {
    render() {
        return (
            <div>
                <NavLink to={AllRoutes.CARS}>CARS</NavLink>
                <NavLink to={AllRoutes.POSTS}>POSTS</NavLink>
                <NavLink to={AllRoutes.COMMENTS}>COMMENTS</NavLink>
            </div>
        );
    }
}

export  {MainWr};