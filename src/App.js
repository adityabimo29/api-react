import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Todo from './Todo';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {

    const isLogin = localStorage.getItem('user');

    return (
        <div>
            <Router>
                <Link to='/'>Home</Link>
                <Link to='/About'>About</Link>
                <Link to='/Todo'>Todo</Link>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/About'>
                        {isLogin ? <About />  : <Redirect to="/" />}
                    </Route>
                    <Route path='/Todo'>
                        {isLogin ? <Todo />  : <Redirect to="/" />}
                    </Route>
                    <Route  path='/Login'>
                        <Login />
                    </Route>
                    <Route  path='/Register'>
                        <Register />
                    </Route>
                </Switch>
            </Router>
            
        </div>
    )
}
export default App;
