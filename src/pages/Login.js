import React,{useState} from 'react';
import {withRouter} from 'react-router-dom';
import {Row,Col,Container,Button} from 'reactstrap';

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
            'pass'  : password,
            'status':false
        }

        const dbUser = JSON.parse(localStorage.getItem('user'));
        if(email.length <= 0 && password.length <= 0  ){
            alert('login failed');
        }
        else if(user.email === dbUser.email && user.pass === dbUser.pass ){
            localStorage.setItem('status',true);
            props.history.push('/api');
            window.location.reload();
        }else{
            alert('password incorrect');
        }
       
        e.preventDefault();
        
    }
    
    return (
        <Container className='mt-4'>
            <Row>
                <Col md={{size:6,offset:3}}>
                <h3 className='text-center'>Login Page</h3>
                <form onSubmit={handleSubmit}>
                    <input className='form-control' type='email' name='email' placeholder="Your Email" onChange={handleChange} value={email} />
                    <input className='form-control mt-2' type='password' name='password' placeholder="*****" onChange={handleChange} value={password} />
                    <Button className='mt-2' color="info" type='submit'>Login</Button>
                </form>
                </Col>
            </Row>
        </Container>
    )
}

export default withRouter(Login);