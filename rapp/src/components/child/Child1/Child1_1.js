import React, {useContext} from 'react';
import {Context} from "../../../App";

const Child11 = () => {
    const {data} = useContext(Context);
    return (
        <div>
            {data}
        </div>
    );
};

export default Child11;