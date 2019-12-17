import React, { Component } from 'react'
import {Modal,Button,Form} from 'react-bootstrap'
export default class addq extends Component {
    state={
        show:false,
        setShow:false
    }
    setShow=(e)=>{
        this.setState({
show:e

        })
    }
    render() {
        return (
            < >
      <Button style= {{float:"right",marginTop:"30px"}} variant="outline-success" onClick={() => this.setShow(true)}>
       
Ask Question
      </Button>

      <Modal
       show={ this.state.show}
        onHide={() => this.setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Ask a public question
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Label>Title</Form.Label>
            Be specific and imagine you’re asking a question to another person
          <Form.Control
            required
            type="text"
            placeholder="title"
          />
          <br/>
     <Form.Label>Body</Form.Label>
     <p>Include all the information someone would need to answer your question</p>
    <Form.Control as="textarea" rows="10" />
          <Button variant="outline-success" type="submit" >
       
Submit your question
      </Button>
        </Modal.Body>
      </Modal>



    </>
        )
    }
}
