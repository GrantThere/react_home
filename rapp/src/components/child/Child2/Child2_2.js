import React, {useContext} from 'react';
import {Context} from "../../../App";

const Child22 = () => {
    const {setData} = useContext(Context);
    return (
        <div>
            <button onClick={()=>setData('CCCCCC')}>Child2_2</button>
        </div>
    );
};

export default Child22;