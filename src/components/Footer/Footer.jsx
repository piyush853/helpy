import React from 'react'
import "../Footer/footer.css"
import { FaCopyright } from 'react-icons/fa'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {BsTwitter} from "react-icons/bs"
import {AiFillInstagram} from "react-icons/ai"

function Footer() {
  return (
    <footer>
    <div className ="container newsletter col-med-5">
    
    <a href="https://twitter.com/home" className = "social_ico"><BsTwitter/></a>
    <a href="https://www.instagram.com/" className="social_ico"><AiFillInstagram/></a>
    <Card  className=" container newslttr_card">
      <Card.Body>
        <Card.Title className="newslttr_title">Subscribe to our Newsletter</Card.Title>
        <hr className="newslttr_hr"/>
        <Card.Text className="newslttr_text">
        Join the Newsletter and Have exciting offers every month !
        <InputGroup className="mb-3 newsletter_inp">
        <Form.Control
          placeholder="Enter Your Email"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button className =" newsletter_btn" variant="outline-secondary" id="button-addon2">
          Subscribe !
        </Button>
      </InputGroup>
        </Card.Text>
        
      </Card.Body>
    </Card>

    </div>

    <div className="cr">
    <FaCopyright/> 2022 webapp compnay ltd.
    </div>
    
    </footer>
  )}
export default Footer