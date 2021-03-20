import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';
class Blog extends Component {

    render () {
        
        return (
            <div>
                <header className="Blog">
                    <ul>
                        <li>
                            <NavLink 
                                to="/" 
                                activeClassName="my-active"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}
                                exact>Home</NavLink></li>
                        <li><NavLink to={
                            {
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }
                        }>New Post</NavLink></li>
                    </ul>
                </header>
                {/*<Route path="/" exact render={ () => <h1>Home</h1> } />
                <Route path="/"  render={ () => <h1>Home2</h1> } />*/}
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" component={NewPost} />
                <Route path="/:id" component={FullPost} />
            </div>
        );
    }
}

export default Blog;