import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import Todos2 from './Todos2';
//import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import Poke from './pages/Poke';

ReactDOM.render(<Poke />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
