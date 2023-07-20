import './App.css';
import {useEffect, useState} from "react";
import Users from "./components/Users/Users";
import UserComponent from "./components/UserComponent/UserComponent";
import Posts from "./components/Posts/Posts";


const App = () => {
    const [userId, setUserId] = useState(null);
    return (
      <div>
          <UserComponent setUserId={setUserId}/>
          <hr/>
          {userId && <Posts userId={userId}/>}
      </div>

  );
}

export default App;
