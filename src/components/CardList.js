import React, { Fragment } from 'react'
import {Col} from 'reactstrap';
import Cardy from './Card';

export default function CardList(props) {
    const {data,handleDelete,handlePut,total} = props;
    
    return (
        <Fragment>

        {
            data.map( (item) => {
                return(
                    <Col md={3} key={item.id}>
                        <Cardy total={total} handlePut={handlePut} handleDelete={handleDelete}  id={item.id} name={item.name} avatar={item.avatar} />
                    </Col>
                )
            })
        }
        </Fragment>
        
    )
}
