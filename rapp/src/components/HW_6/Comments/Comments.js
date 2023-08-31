import React, {useEffect, useState} from 'react';
import {JSNapiService} from "../../../services/JSNapiService";
import Comment from "./Comment/Comment";

const Comments = () => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        JSNapiService.getComments()
            .then(({data}) => setComments(data))
    }, [])
    return (
        <div>
            {comments.map((comment) => <Comment key={comment.id} comment={comment} />)}
        </div>
    );
};

export default Comments;