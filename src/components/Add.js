import React from 'react';
import {Col,Row,Button,Input} from 'reactstrap';

export default function Add(props) {

    const {handleChange,handleSubmit,item} = props;
    return (
        <form onSubmit={handleSubmit}>
            <Row className='mb-3'>
                <Col md={8}>
                    <Input value={item} onChange={handleChange} type='text' name='addItem'  />
                    </Col>
                    <Col md={4}>
                    <Button className='ml-2 btn btn-block' type='submit' color="info">Add List</Button>
                </Col>
            </Row>
        </form>
    )
}
