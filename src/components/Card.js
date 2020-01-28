import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
  } from 'reactstrap';

export default function Cardy(props) {

    const {name,id,avatar,handleDelete,handlePut} = props ;
    return (
        <Card key={id} className='my-4'>
            <CardImg top width="100%" src={avatar} alt="Card image cap" />
            <CardBody>
            <CardTitle className='text-center'>{name}</CardTitle>
            <CardText className='text-center'>Your ID is : {id}</CardText>
            <Button onClick={handlePut} id={id}  className='mr-2'>Edit</Button>
            <Button onClick={handleDelete} id={id} >Delete</Button>
            </CardBody>
        </Card>
    )
}
