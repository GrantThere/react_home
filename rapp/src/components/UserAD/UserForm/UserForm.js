import React, {useState} from 'react';

const UserForm = ({serUsers}) => {
    const [newUser, setNewUser] = useState({
        id: '',
        name: '',
        username:'',
        email:''
        }
    )

    const inHandle = (e) => {
        setNewUser(prev=>({...prev, [e.target.name]:e.target.value}))
        console.log(newUser)
    }
    const add = (e) => {
        e.preventDefault();
        fetch('https://jsonplaceholder.typicode.com/users', {
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(newUser),
            method: 'POST'})
            .then(res => res.json()).then(value =>{
            console.log(value);
            serUsers(prev=>[...prev, value])
        } )
    }
    return (
        <form onSubmit={add}>
            <label>Id:<input type="number" value={newUser.id} name={'id'} onChange={inHandle}/></label>
            <label>Name:<input type="text" value={newUser.name} name={'name'} onChange={inHandle}/></label>
            <label>Username:<input type="text" value={newUser.username} name={'username'} onChange={inHandle}/></label>
            <label>Email:<input type="text" value={newUser.email} name={'email'} onChange={inHandle}/></label>
            <button>ADD</button>
        </form>
    );
};

export default UserForm;