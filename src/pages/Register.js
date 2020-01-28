import React, { useState } from 'react'
import {Row,Col,Container,Button} from 'reactstrap';
import {withRouter} from 'react-router-dom';

function Register(props) {

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
        if(email.length > 0 && password.length > 0) {
            localStorage.setItem('user',JSON.stringify(user));
            props.history.push('/login');
        }
        
        e.preventDefault();
    }


    return (
        <Container className='mt-4'>
            <Row>
                <Col md={{size:6,offset:3}}>
                <h3 className='text-center'>Form Register</h3>
                <form onSubmit={handleSubmit}>
                    <input className='form-control' type='email' name='email' placeholder="Your Email" onChange={handleChange} value={email} />
                    <input className='form-control mt-2' type='password' name='password' placeholder="*****" onChange={handleChange} value={password} />
                    <Button className='mt-2' color="warning" type='submit'>Register</Button>
                </form>
                </Col>
            </Row>
        </Container>
    )
}

export default withRouter(Register);