import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
class Blog extends Component {

    render () {
        
        return (
            <div>
                <header className="Blog">
                    <ul>
                        <li>
                            <NavLink 
                                to="/posts" 
                                activeClassName="my-active"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}
                                exact>Posts</NavLink></li>
                        <li><NavLink to={
                            {
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }
                        }>New Post</NavLink></li>
                    </ul>
                </header>
                <Switch>
                    <Route path="/posts" component={Posts} />
                    <Route path="/new-post" component={NewPost} />
                    <Redirect from="/" to="/posts" />
                </Switch>
             </div>
        );
    }
}

export default Blog;