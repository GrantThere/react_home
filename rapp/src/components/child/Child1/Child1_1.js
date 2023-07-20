import React, {useContext} from 'react';
import {Context} from "../../../App";

const Child1_1 = () => {
    const {data} =useContext(Context)
    return (
        <div>
            <div>{data}</div>
        </div>
    );
};

export default Child1_1;