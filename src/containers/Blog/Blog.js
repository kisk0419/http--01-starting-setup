import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import asyncComponent from '../../hoc/asyncComponent';
//import NewPost from './NewPost/NewPost';

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});
class Blog extends Component {
    state = {
        auth: true
    };

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
                    { this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null }
                    <Route render={() => <h1>Not Found</h1>} />
                    {/*<Redirect from="/" to="/posts" />*/}
                </Switch>
             </div>
        );
    }
}

export default Blog;