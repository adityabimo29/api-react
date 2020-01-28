import React, { useState } from 'react'

export default function Register() {

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
        localStorage.setItem('user',JSON.stringify(user));
        
        e.preventDefault();
    }


    return (
        <form onSubmit={handleSubmit}>
            <input type='email' name='email' placeholder="Your Email" onChange={handleChange} value={email} />
            <input type='password' name='password' placeholder="*****" onChange={handleChange} value={password} />
            <button type='submit'>Register</button>
        </form>
    )
}
