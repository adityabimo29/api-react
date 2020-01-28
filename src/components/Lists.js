import React, { Fragment } from 'react'
import {Col,Row,Button,Input} from 'reactstrap';

export default function Lists(props) {
    const {datas,handleRemove,handleEdit} = props;
    
    return (
        <Fragment>
            {
                datas.map( (item,index) => {
                    return(
                        
                        <Row className='mt-2' key={index} id={index} >
                            <Col md={8}>
                                <Input id={index} name={item}  type="text"  value={item} readOnly  />
                            </Col>
                                <Button className='mr-2 ml-4'  onClick={handleRemove}  color="danger">Delete List</Button>
                                <Button id={index} className='mr-2'  onClick={handleEdit}  color="warning">Edit List</Button>
                        </Row>
                        
                        
                    )
                })
            }
        </Fragment>
    )
}
