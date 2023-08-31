import {Component} from "react";
import axios from "axios";
import {Post} from "./post/Post";


class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    getAllPosts() {
        const postS = axios.create({baseURL:'https://jsonplaceholder.typicode.com'});
        return postS.get('/posts')
    }

    componentDidMount() {
        this.getAllPosts().then(({data}) => this.setState({posts: data}))
    }

    render() {
        return (
            <div>
                {this.state.post.map(post => <Post key={post.id} post={post}/>)}
            </div>
        )
    }
}

export {Posts};