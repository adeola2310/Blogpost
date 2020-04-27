import React, {Component} from 'react';
import './Post.css';
// import withRouter from "react-router/modules/withRouter";

class Post extends Component {
    render() {
        console.log(this.props);
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

// for wrapping HOC
export default (Post);
