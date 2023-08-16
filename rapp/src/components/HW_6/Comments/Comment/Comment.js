import React from 'react';
import {useNavigate} from "react-router-dom";

const Comment = ({comment}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`posts/${comment.postId}`)
    }
    return (
        <div>
            <hr/>
            <div>{comment.postId}</div>
            <div>{comment.id}</div>
            <div>{comment.name}</div>
            <div>{comment.email}</div>
            <div>{comment.body}</div>
            <button onClick={handleClick}>Post</button>
            <hr/>
        </div>
    );
};

export default Comment;