import React, {Component} from 'react';
import './FullPost.css';
import axios from 'axios'

class FullPost extends Component {

    state ={
        loadedPost: null
    }


    // here we changed componentdid update to mount cos we arent updating but adding/removing from d DOM
   componentDidMount(){
        console.log(this.props);
        if(this.props.match.params.id){
            if(!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.match.params.id)){
                axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.match.params.id)
                    .then(response=>{
                        console.log(response);
                        this.setState({loadedPost: response.data})
                    });
            }

        }

   }

   deletePostHandler = ()=>{
       axios.delete('https://jsonplaceholder.typicode.com/posts/' + this.props.match.params.id)
           .then(response=> {
               console.log(response);
           })
   }


    render() {
        let post = <p style={{textAlign: 'center'}}>please select a post</p>;
        if (this.props.id){
            post = <p style={{textAlign: "center"}}> Loading...</p>
        }
        if (this.state.loadedPost){
            post = (
                <div className="full__post">
                    <div className="post__one">
                        <div className="post__details">
                            <h4>{this.state.loadedPost.title}</h4>
                            <p>{this.state.loadedPost.body}</p>
                            <button onClick={this.deletePostHandler}>Delete</button>
                        </div>
                    </div>
                </div>
            )
        }
        return post;
    }
}

export default FullPost;
