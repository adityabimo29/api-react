import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Input} from 'reactstrap';

const Modalia = (props) => {
  const {
    index,
    className,
    handleUpdate,
    value
  } = props;

  const [temp,setTemp] = useState(value);

  const handleChange = event => {
    setTemp(event.target.value);
  }

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);



  return (
    <div>
      <Button color="info" onClick={toggle}>V</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Form Edit</ModalHeader>
        <ModalBody>
        <form onSubmit={handleUpdate} id={index}>
            <Input  type="text" name="list" value={temp}  onChange={handleChange} />
            <Button className='mt-2' type='submit' id={index} color="primary" onClick={toggle}>Update</Button>
        </form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default Modalia;