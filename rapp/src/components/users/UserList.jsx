import {useEffect, useState} from "react";
import UserShort from "./UserShort";


const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((resp) => resp.json())
            .then((users) => setUsers(users))
    },[])


    return (
        <>
            {users.map((user) => {
                return(
                    <UserShort
                        user={user}

                    />
                )
            })}
        </>
    )
}

export default UserList;