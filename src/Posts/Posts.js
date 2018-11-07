import React, { Component } from 'react';
import axios from 'axios';

class Posts extends Component {

    state={
        posts:[]
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res => {
            const posts = res.data.slice(0,6);
            this.setState({
                ...posts,
                posts
            })
        })
    }
    
    render() {
        console.log(this.state.posts)
        return (
            <div>
                <h2>Posts</h2>
                <ul>
                    {this.state.posts.map(post =>{
                        return <li key={post.id} > {post.title}</li>
                    })}
                </ul>
            </div>
        );
    }
}

export default Posts;