
import React, { Component, Fragment} from 'react';
import axios from 'axios';
import {Container,Row,Col} from 'reactstrap';
import CardList from '../components/CardList';

export default class Poke extends Component {

    constructor(props){
        super(props);
        this.state = {
            data:'',
            isLoading:true,
            name:'',
            avatar:'https://avatars3.githubusercontent.com/u/6480022?s=400&v=4'
        }

    }

    // componentDidMount(){
    //     fetch('https://pokeapi.co/api/v2/pokemon/rattata/')
    //     .then((response) => {
    //         return response.json();
    //     })
    //     .then((myJson) => {
    //         console.log(myJson);
    //     });
    // }

    componentDidMount(){
        this.fetchData();
    }

    fetchData() {
        axios.get('https://5e2fe92f9c29c900145db5c1.mockapi.io/testpost')
        .then(res => {
            const data =  res.data ;
            this.setState({data:data,isLoading:false});
        })
    }

    handleChange = e => {
        this.setState({name:e.target.value});
    }

    handlePut = e => {

        const name = prompt();

        axios.put(`https://5e2fe92f9c29c900145db5c1.mockapi.io/testpost/${e.target.id}`, {
            name:name,
        })
        .then(response => {
                //console.log(response);
                this.fetchData();
            })
        .then(error => {
                console.log(error)
            })
    }

    handleDelete = e => {
        //console.log(e.target.id)
        axios.delete(`https://5e2fe92f9c29c900145db5c1.mockapi.io/testpost/${e.target.id}`)
	    .then(res => this.fetchData());
    }

    handlePost = e => {
        axios.post('https://5e2fe92f9c29c900145db5c1.mockapi.io/testpost', {
        name:this.state.name,
        avatar:this.state.avatar
        })
        .then(response => {
            alert("Sukses di Inputkan");
            this.setState({name:''})
            this.fetchData()
            //console.log(response);
        })
        .then(error => {
            console.log(error)
        })
        e.preventDefault();
    }


    render() {
        const {isLoading,data} = this.state;
        console.log(this.state.data)
        return (
            <Container>
            { !isLoading ? ( 
            <Fragment>
                <Row className='mt-4'>
                    
                    <Col md={{size:6,offset:3}}>
                    <h1 className='text-center alert alert-info '>SIMPLE API with AXIOS</h1>
                        <form onSubmit={this.handlePost} className='mt-4'>
                        <input className='form-control' type='text' name='name' value={this.state.name} onChange={this.handleChange} />
                        <button className='btn btn-success btn-block mt-2' type="submit">POST</button>
                        </form>
                    </Col>
                </Row>
                <Row>
                    <CardList handlePut={this.handlePut} handleDelete={this.handleDelete} data={data} />
                </Row>
            </Fragment>
            ) : (<p>Loading</p>)
            }
            </Container>
        )
    }
}
