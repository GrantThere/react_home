import style from "./UserList.module.css";
import {useState} from "react";
import Posts from "../Posts/Posts";

const UserShort = (props) => {
    const [display, setDisplay] = useState(false)
    const {user} = props;
    return (
        <>
            <div className={style.mainWrap}>
                <div className={style.wrap}>
                    <div>{user.id}</div>
                    <div>{user.name}</div>
                    <div>{user.username}</div>
                </div>
                <div>
                    <button onClick={()=>setDisplay(!display)}>{display?'Hide':'Show'}</button>
                    {
                        display && <Posts userId={user.id}/>
                    }
                </div>
            </div>
        </>
    )
}

export default UserShort;