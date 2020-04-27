import React, {Component} from 'react';
import './NewPost.css';
import axios from 'axios';

class NewPost extends Component {

    state= {
        title: '',
        content: '',
        author: 'Max'
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

    }

    render() {
        return (
            <div className="newPost">
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
