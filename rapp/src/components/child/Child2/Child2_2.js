import React, { useContext} from 'react';
import {Context} from "../../../App";


const Child2_2 = () => {
    const {setArr} = useContext(Context);
    return (
        <div>
           <button onClick={()=>setArr('Cliked')}>clic</button>
        </div>
    );
};

export default Child2_2;