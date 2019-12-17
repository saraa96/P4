import React, { Component } from 'react'
import './q.css'
import {Container,Card,Row,Col,Image} from 'react-bootstrap'
import AddQ from './addq'
export default class qPage extends Component {
    render() {
        return (
            <div>
      <Container>
      <Row>
    
           <div style={{borderBottom:"0.4px solid black", width:"100%"}}> 
             <h1  style={{float:"left" , paddingTop:"80px"}}>
       All Questions
      </h1>
            <Image style={{float:"right" , width:"190px" , }} src='https://risemutual.org/wp-content/uploads/2018/02/solving-problems-icon.png' />
            <br/>
       </div>
        <Col cclass="col-3" ><AddQ/> </Col>  
            </Row>
            
<Row> 
        
     <Col class="col-3" >

<Card style={{ width: '18rem',marginTop:"-80px",height:"400px" , position:"fixed"}}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>

     </Col> 
 <Col class="col-6" > 
         <div  style={{width:"800px",marginTop:"50px"}} class="ui card">
  <div  class="content">
    <div class="header">Cute Dog</div>
    
    <div class="meta">
      <span class="right floated time">2 days ago</span>
      <span class="category">Animals</span>
    </div>
    <div class="description">
      <p></p>
    </div>
  </div>
  <div class="extra content">
  
    <div class="right floated author">
      <img class="ui avatar image" src="https://image.flaticon.com/icons/png/512/147/147144.png"/> Matt
    </div>
       <i class="right floated like icon"></i>
    <i class="right floated star icon"></i>
  </div>

</div>
</Col> 

</Row>
</Container>

</div> 
            
        )
    }
}
