import React, {Component} from 'react';
import './NewPost.css';
import axios from 'axios';
import {Redirect} from "react-router";

class NewPost extends Component {

    state= {
        title: '',
        content: '',
        author: 'Max',
        submitted: false
    }

    postPostHandler =()=>{
        const data = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author
        }
        axios.post('https://jsonplaceholder.typicode.com/posts', data)
            .then(response=> {
                console.log(response);
            })
        this.props.history.push('/post');
        // this.setState({submitted: true})

    }

    render() {
        let redirect;
            if (this.state.submitted){
                // redirects replaces the previous page from the new one; totally diff from .push and you cant go bk to previous
                redirect = <Redirect to="/post"/>
            }
        return (
            <div className="newPost">
                {redirect}
                <div className="header" style={{paddingTop: '30px'}}>
                    <h3>Add a New post</h3>
                </div>
                <form className="formSpace">
                    <input type="text" placeholder="Add Title" value={this.state.title} onChange={(e) => this.setState({title: e.target.value})}/>
                    <input type="text" placeholder="Content" value={this.state.content} onChange={(e)=>this.setState({content: e.target.value})}/>
                    <select className="allSelect" value={this.state.author} onChange={(e)=>this.setState({author: e.target.value})}>
                        <option value="Max">Max</option>
                        <option value="Max">Adeola</option>
                        <option value="Max">Bayo</option>
                        <option value="Max">Wunmi</option>
                    </select>
                   <button className="add" onClick={this.postPostHandler}> Add Post</button>
                </form>
            </div>
        );
    }
}

export default NewPost;
