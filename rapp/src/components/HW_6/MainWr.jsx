import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from "./Nav";

const MainWr = () => {
    return (
        <div>
            <Nav/>
            <Outlet/>
        </div>
    );
};

export default MainWr;