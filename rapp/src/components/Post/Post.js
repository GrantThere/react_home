import React, {useEffect, useState} from 'react';
import {JSNapiService} from "../../services/JSNapiService";
import {useParams} from "react-router-dom";
import PostDetail from "../Posts/PostDetail/PostDetail";

const Post = () => {
    const [post, setPost] = useState(null);
    const {postID} = useParams();
    useEffect(() => {
        JSNapiService.getPost(postID).then(({data}) => setPost(data))
    }, [postID])
    return (
        <div>
            {post && <PostDetail post={post}/>}
        </div>
    );
};

export default Post;