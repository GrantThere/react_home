import './App.css';
import {createContext, useState} from "react";
import Child1 from "./components/child/Child1/Child1";
import Child2 from "./components/child/Child2/Child2";


export const Context = createContext(null);
const App = () => {
    const [data, setData] = useState([1,2,3]);
    return (
        <Context.Provider value={{data,setData}}>
            <div>
                <Child1/>
                <Child2/>
            </div>
        </Context.Provider>

    );
};

export default App;
