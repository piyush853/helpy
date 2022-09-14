import {React,useState} from 'react'
import {Card, ProgressBar, Button,Form,FloatingLabel,InputGroup,ListGroup } from 'react-bootstrap';
import $ from 'jquery';
import "../DoctorsCard/doctorscard.css"
import d1 from "../assets/d1.jpeg"
function DoctorsCard(props) {
    const [active,setActive]=useState(false)
    function cardSelect(){
     setActive(active === true)
    
    $('#'+props.id).toggleClass("card_click","add")
    $(".card").css("pointer-events","none")
   

}
  return (
      <div>
   <Card className = "doctor_card" onClick= {cardSelect} id ={props.id}>
      <Card.Img style ={{width:"9rem"}} variant="top" src={d1} />
      <Card.Body>
        <Card.Title>Dr. {props.name}</Card.Title>
        <Card.Text>
          {props.desc}
        </Card.Text>
  
        <ListGroup.Item>Rating : {props.rating}</ListGroup.Item>
        <ListGroup.Item>Trust-Score : {props.trustscore}</ListGroup.Item>
        <ListGroup.Item>Current loaction : {props.location}</ListGroup.Item>
      
      </Card.Body>
    
      
    </Card>

    </div>
  )
}

export default DoctorsCard