import React, {Component} from 'react';
import './Post.css';

class Post extends Component {
    render() {
        return (
            <div className="post">
                <div className="post__Card" onClick={this.props.clicked}>
                    <div className="card__details">
                        <h3>{this.props.title}</h3>
                        <p>{this.props.author}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Post;
