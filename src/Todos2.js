import React, { useState } from 'react'
import {Col,Row,Container} from 'reactstrap';
import Add from './components/Add';
import Lists from './components/Lists';

export default function Todos2() {

    let db = JSON.parse(localStorage.getItem('lists'));

    const [lists,setLists] = useState(db !== null ? db : []);

    const [item,setItem] = useState('');



    const handleChange = event => {
        setItem(event.target.value);
    }

    const handleSubmit = event => {

        setLists(lists.concat(item));
        setItem('');
        
        localStorage.setItem('lists',JSON.stringify(lists.concat(item)));  
        event.preventDefault();
    } 

    const handleRemove = event => {
        let index = event.target.parentNode.id;

        let filtered = lists.filter(function(value, i){

            return i !== parseInt(index);
        
        });
        
        if(filtered.length > 0){
            setLists(filtered);
            localStorage.setItem('lists',JSON.stringify(filtered));
        }else{
            setLists([]);
            localStorage.clear();
        }
    }

    const handleEdit = event => {
        let item = event.target.value;
        let index= event.target.id;

        const edited = prompt(item);
        lists.splice(parseInt(index),1,edited);

        
        setLists(lists);
        localStorage.setItem('lists',JSON.stringify(lists));

        let todos = lists.slice();

        setLists(todos);

    }

        return (
            <Container>
                <Row>
                    <Col className='mt-3' md={{size:8,offset:2}}>
                    <h3 className='text-center'>Todo List</h3>
                        <Add handleSubmit={handleSubmit} item={item} handleChange={handleChange} />
                        <Lists datas={lists} handleEdit={handleEdit} handleRemove={handleRemove}  />
                    </Col>
                </Row>
            </Container>
        )
}
