import {useEffect, useState} from "react";
import Post from "./Post/Post";

const  Posts = ({userId}) => {
    const [posts,setPosts] = useState([]);

    useEffect(()=> {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(resp => resp.json())
            .then(val => setPosts(val))
    },[userId])

    return (
        <div>
            {posts.map(post => <Post post={post}/>)}
        </div>
    )
}

export default Posts;