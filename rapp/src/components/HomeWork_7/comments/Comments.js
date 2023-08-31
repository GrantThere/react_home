import {Component} from "react";
import axios from "axios";
import {Comment} from "./comment/Comment";


class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
    }

    getAllComments() {
        const commentS = axios.create({baseURL:'https://jsonplaceholder.typicode.com'});
        return commentS.get('/comment')
    }

    componentDidMount() {
        this.getAllComments().then(({data}) => this.setState({comments: data}))
    }

    render() {
        return (
            <div>
                {this.state.comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
            </div>
        )
    }
}

export {Comments};