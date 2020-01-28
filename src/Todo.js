import React, {  Component } from 'react'
import {Col,Row,Container} from 'reactstrap';
import Add from './components/Add';
import Lists from './components/Lists';
import SearchBox from './components/SearchBox';

export default class Todo extends Component {

    constructor(props){
        super(props);
        let db = JSON.parse(localStorage.getItem('lists'));
        this.state = {
            lists:db !== null ? db : [],
            item:'',
            searchfield:'',
        }
    }

    handleChange = event => {
        this.setState({item:event.target.value})
    }

    handleSubmit = event => {

        this.setState({lists:this.state.lists.concat(this.state.item)});
        this.setState({item:''});
        
        localStorage.setItem('lists',JSON.stringify(this.state.lists.concat(this.state.item))); 
        alert(this.state.lists.concat(this.state.item)); 
        event.preventDefault();
    } 

    handleRemove = event => {
        let index = event.target.parentNode.id;

        let filtered = this.state.lists.filter(function(value, i){

            return i !== parseInt(index);
        
        });
        
        if(filtered.length > 0){
            this.setState({lists:filtered});
            localStorage.setItem('lists',JSON.stringify(filtered));
        }else{
            localStorage.clear();
            this.setState({lists:[]})
        }
    }

    handleEdit = event => {
        let item = event.target.value;
        let index= event.target.id;

        const edited = prompt(item);
        this.state.lists.splice(parseInt(index),1,edited);

        this.setState({lists:this.state.lists});
        localStorage.setItem('lists',JSON.stringify(this.state.lists));

        let todos = this.state.lists.slice();

        this.setState({lists:todos});

    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

        render(){
            const { lists, searchfield } = this.state;

            const filteredDatas = lists.filter(list =>{
                return list.toLowerCase().includes(searchfield.toLowerCase());
              })
              
        
        return  ( 
            <Container>
                <Row>
                    <Col className='mt-3' md={{size:8,offset:2}}>
                    <h3 className='text-center'>Todo List</h3>
                        <Add handleSubmit={this.handleSubmit} item={this.state.item} handleChange={this.handleChange} />
                        <SearchBox searchChange={this.onSearchChange} />
                        <Lists datas={filteredDatas} handleEdit={this.handleEdit} handleRemove={this.handleRemove}  />
                    </Col>
                </Row>
            </Container>
        )
    }
}
