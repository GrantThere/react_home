import React, {useEffect, useState} from 'react';
import SpaceLa from "./SpaceLa/SpaceLa";
import style from "./SpaceXes.module.css"

const SpaceXes = () => {
    const [launch, setlaunch] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(res => res.json())
            .then(lach => setlaunch(lach))
    }, [] )
    return (
        <div className={style.wrap}>
            {launch.map(launch => <SpaceLa
                mission_name={launch.mission_name}
                launch_year={launch.launch_year}
                mission_patch_small={launch.links.mission_patch_small}
            />)}
        </div>
    );
};

export default SpaceXes;