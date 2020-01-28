import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";


import Home from './pages/Home';
import About from './pages/About';
import Todo from './Todo';
import Login from './pages/Login';
import Register from './pages/Register';
import Poke from './pages/Poke';
import Navbaria from './components/Navbar';

class App extends Component {

 
    
    render(){
        
        const isLogin = localStorage.getItem('status')

        return (
            <div>
                <Router>
                    <Navbaria />
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/About'>
                            {isLogin ? <About />  : <Redirect to="/login" />}
                        </Route>
                        <Route path='/Todo'>
                            {isLogin ? <Todo />  : <Redirect to="/login" />}
                        </Route>
                        <Route path='/Api'>
                            {isLogin ? <Poke />  : <Redirect to="/login" />}
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
}
export default App;
