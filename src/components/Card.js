import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button,Row,Col
  } from 'reactstrap';

import Modalia from './Modal';

export default function Cardy(props) {

    const {name,id,avatar,handleDelete,total} = props ;
    
    
    return (
        <Card key={id} className='my-4'>
            <CardImg top width="100%" src={avatar} alt="Card image cap" />
            <CardBody>
            <CardTitle className='text-center'>{name}</CardTitle>
            <CardText className='text-center'>Your ID is : {id}</CardText>
            <Row>
                <Col md={6}>
                <Modalia totalia={total} id={id} curName={name} curAvatar={avatar} />
                {/* <Button color="warning" onClick={handlePut} id={id}  className='btn-block'>Edit</Button> */}
                </Col>
                <Col md={6}>
                <Button color="danger" onClick={handleDelete} id={id} className='btn-block' >Delete</Button>
                </Col>
            </Row>
            
            
            </CardBody>
        </Card>
    )
}
