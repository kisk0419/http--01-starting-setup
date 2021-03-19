import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
class Blog extends Component {

    render () {
        
        return (
            <div>
                <header className="Blog">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/new-post">New Post</a></li>
                    </ul>
                </header>
                {/*<Route path="/" exact render={ () => <h1>Home</h1> } />
                <Route path="/"  render={ () => <h1>Home2</h1> } />*/}
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" component={NewPost} />
            </div>
        );
    }
}

export default Blog;