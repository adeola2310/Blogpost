import React, {Component} from 'react';
import Post from "../../components/Post/Post";
import axios from "axios";
import {Link} from "react-router-dom";

class Posts extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }

    componentDidMount() {
        // get request happens asynchronously so we cant save in a variable
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response);
                // this shows 4 posts only
                const posts = response.data.slice(0, 4);
                const updatedPost = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                })
                this.setState({posts: updatedPost})
                // console.log(response)
            })
            // handling error
            .catch(error=>{
                console.log(error);
                this.setState({error: true})
            })
    }
    postClicked = (id)=>{
        this.setState({selectedPostId: id})
    }
    render() {
        let posts = <p>Something went wrong</p>
        if(!this.state.error){
            posts = this.state.posts.map((post, index)=>{
                return (
                    <Link to={'/' + post.id} key={post.id}>
                        <Post
                            title={post.title}
                            author={post.author}
                            clicked={()=>{this.postClicked(post.id)}}/>
                    </Link>

                )
            })
        }
        return (
            <div>
                <section>
                    {posts}
                </section>
            </div>
        );
    }
}

export default Posts;
