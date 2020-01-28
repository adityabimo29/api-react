import React,{useState} from 'react';
import {withRouter} from 'react-router-dom';

function Login(props) {
    const [email,setEmail] = useState('');
    const [password,setPass] = useState('');

    const handleChange = e => {
        if(e.target.name === 'email'){
            setEmail(e.target.value);
        }else{
            setPass(e.target.value)
        }
    }

    const handleSubmit = e => {
        
        const user = {
            'email' : email,
            'pass'  : password
        }

        const dbUser = JSON.parse(localStorage.getItem('user'));
        if(user.email === dbUser.email && user.pass === dbUser.pass ){
            props.history.push('/todo');
        }else{
            alert('password incorrect');
        }
       
        e.preventDefault();
        
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input type='email' name='email' placeholder="Your Email" onChange={handleChange} value={email} />
            <input type='password' name='password' placeholder="*****" onChange={handleChange} value={password} />
            <button type='submit'>Login</button>
        </form>
    )
}

export default withRouter(Login);