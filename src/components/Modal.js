import React, { useState, useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, Input} from 'reactstrap';
import axios from 'axios';

const Modalia = (props) => {
  const {
    id,curName,curAvatar
  } = props;

  const [name,setName] = useState(curName);
  const [avatar,setAvatar] = useState(curAvatar);

  const fetchData = () => {
    axios.get('https://5e2fe92f9c29c900145db5c1.mockapi.io/testpost')
    .then(res => {
        if(res.status === 200){
        const data =  res.data ;
        setName('');
        setAvatar('');
        console.log(data);
        }else{
            console.log('Something is wrong with that status data');
        }
    })
  }


    useEffect(() => {
      fetchData();
    },[]);


  const handleChange = event => {

    if(event.target.name === 'name'){
      setName(event.target.value);
    }else{
      setAvatar(event.target.value);
    }
    
  }

  const handlePut = e => {

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
    //alert(e.target.id)
    e.preventDefault();
}

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="warning" onClick={toggle}>Edit</Button>
      <Modal isOpen={modal} toggle={toggle} className={id}>
        <ModalHeader toggle={toggle}>Form Edit</ModalHeader>
        <ModalBody>
        <form onSubmit={handlePut} id={id} >
            <Input className='form-control'  type="text" name="name" value={name}  onChange={handleChange} placeholder='name' />
            <Input className='form-control mt-2'  type="text" name="avatar" value={avatar}  onChange={handleChange} placeholder='avatar url' />
            <Button className='mt-2' type='submit'  color="primary" onClick={toggle}>Update</Button>
        </form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default Modalia;