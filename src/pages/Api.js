
import React, { Fragment, useState, useEffect} from 'react';
import axios from 'axios';
import {Container,Row,Col} from 'reactstrap';
import CardList from '../components/CardList';

export default function Api(props) {

    const [data,setData] = useState('');

    const [name,setName] = useState('');

    const [avatar,setAvatar] = useState('');

    const [loading,setLoading] = useState(true);

    const [total , setTotal] = useState(0);

    useEffect(() => {
        fetchData();
    },[total]);

    


    const fetchData = () => {
        axios.get('https://5e2fe92f9c29c900145db5c1.mockapi.io/testpost')
        .then(res => {
            if(res.status === 200){
            const data =  res.data ;
            setData(data);
            setLoading(false);
            setTotal(data.length);
            console.log(data);
            }else{
                console.log('Something is wrong with that status data');
            }
        })
    }

    const handleChange = e => {

        if(e.target.name === 'name'){
            setName(e.target.value);
        }else{
            setAvatar(e.target.value);
        }
        
    }

    const handlePut = e => {

        const name = prompt('Name');
        const avatar= prompt('Url Avatar');

        axios.put(`https://5e2fe92f9c29c900145db5c1.mockapi.io/testpost/${e.target.id}`, {
            name:name,avatar:avatar
        })
        .then(response => {
                fetchData();
                console.log(response);
            })
        .then(error => {
                console.log(error)
            })
    }

    const handleDelete = e => {
        //console.log(e.target.id)
        axios.delete(`https://5e2fe92f9c29c900145db5c1.mockapi.io/testpost/${e.target.id}`)
	    .then(res => fetchData());
    }

    const handlePost = e => {
        axios.post('https://5e2fe92f9c29c900145db5c1.mockapi.io/testpost', {
        name:name,
        avatar:avatar
        })
        .then(response => {
            alert("Sukses di Inputkan");
            setName('');
            setAvatar('');
            fetchData();
            //console.log(response);
        })
        .then(error => {
            console.log(error)
        })
        e.preventDefault();
    }


        return (
            <Container>
            { !loading ? ( 
            <Fragment>
                <Row className='mt-4'>
                    
                    <Col md={{size:6,offset:3}}>
                    <h1 className='text-center alert alert-info '>SIMPLE API with AXIOS</h1>
                        <form onSubmit={handlePost} className='mt-4'>
                        <Row>
                            <Col md={6}>
                            <input className='form-control' type='text' name='name' value={name} onChange={handleChange} placeholder='name' />
                            </Col>
                            <Col md={6}>
                            <input className='form-control' type='text' name='avatar' value={avatar} onChange={handleChange} placeholder='url image' />
                            </Col>
                        </Row>
                        
                        
                        <button className='btn btn-success btn-block mt-2' type="submit">POST</button>
                        </form>
                    </Col>
                </Row>
                <Row>
                    <CardList handlePut={handlePut} handleDelete={handleDelete} data={data} />
                </Row>
            </Fragment>
            ) : (<p className='text-center'>Loading</p>)
            }
            </Container>
        )
}
