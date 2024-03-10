// client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import BlogList from './components/BlogList';
import CreateBlogForm from './components/CreateBlogForm';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact component={BlogList} />
                    <Route path="/register" component={RegistrationForm} />
                    <Route path="/login" component={LoginForm} />
                    <Route path="/create" component={CreateBlogForm} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
