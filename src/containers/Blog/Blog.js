import React, {Component} from 'react';
import NewPost from '../NewPost/NewPost';
import './Blog.css';
import Posts from "../Posts/Posts";
import FullPost from "../FullPost/FullPost";
import {Route, BrowserRouter as Router, Link, NavLink} from 'react-router-dom';

class Blog extends Component {

    render() {

        return (
            <div className="blogs">
                <header>
                    <nav>
                        <ul className='nav-list'>
                            <li className="items">
                                <NavLink to="/"
                                         activeStyle={{color: '#fa923f', textDecoration: 'underline'}}
                                         activeClassName="active">Home</NavLink>
                            </li>
                            {/*<li className="items"><Link to={{*/}
                            {/*    pathname: '/new-post',*/}
                            {/*    hash: '#submit',*/}
                            {/*    search: '?quick-submit=true'*/}
                            {/*}}>New Post</Link>*/}
                            {/*</li>*/}
                            {/*the hash here represent jumping to a new section on that page and search rep a query string for searching*/}
                            <li className="items">
                                <Link to={{pathname: '/new-post'}}>New Post</Link>
                            </li>


                            {/*<Link to={props.match.url + '/new'}>  will lead to example.com/posts/new  when placing this link in a component loaded on /posts .*/}
                        </ul>
                    </nav>
                </header>
                {/*<Router>*/}
                <Route path="/" exact component={Posts}/>
                <Route path="/new-post"  component={NewPost}/>
                {/*/:id is loaded after new-post to avoid the app catching newpost as an ir route=param*/}
                <Route path="/:id" exact component={FullPost}/>
                {/*</Router>*/}

            </div>
        );
    }
}

export default Blog;
