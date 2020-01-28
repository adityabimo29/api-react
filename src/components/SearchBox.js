import React from 'react';
import {Row,Col,Input} from 'reactstrap';

export default function searchBox(props) {
    return (
        <Row className='text-center'>
            <Col md={{size:8,offset:2}}>
            <Input
                className='form-control'
                type='search'
                placeholder='search list'
                onChange={props.searchChange}
            />
            </Col>
        </Row>
    )
}
