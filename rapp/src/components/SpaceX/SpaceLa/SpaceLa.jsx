import React from 'react';
import style from "./SpaceLa.module.css"

const SpaceLa = (launch) => {
    const {mission_name, launch_year, mission_patch_small} = launch;
    return (
        <div className={style.wprap}>
            <div>{mission_name}</div>
            <div>{launch_year}</div>
            <img src={mission_patch_small} alt={'errr'}/>
        </div>
    );
};

export default SpaceLa;