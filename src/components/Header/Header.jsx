import React from 'react'
import "../Header/header.css"
import logo1 from "../assets/cover.png"
import Banner from '../Banner/Banner'
import Main_img from '../assets/main.png'
import {HiOutlineArrowNarrowRight} from "react-icons/hi"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import {BsSearch} from "react-icons/bs"
function Header() {
  
  return (
    <header >
       <img className="logo" src= {logo1}/>
       <img className ="main_img" src = {Main_img}/>
       <InputGroup className="mb-3 newsletter_inp search">
        <Form.Control
          placeholder="Search..."
          
        />
        <Button className =" search_btn" variant="outline-secondary" id="button-addon2">
          <BsSearch/>
        </Button>
        </InputGroup>
       <a className ="links" href = "/">Home</a>
       <a className ="links" href = "/contact">Contact</a>
       <a className ="links" href = "/login">Login</a>
       <button className = "btn btn-primary started" ><span><a className="getStarted" href="/appoint">Get Started</a></span></button>
       
       <p className =" title col-md-5 col-lg- 4">Have a Hustle Free Appointment With Your Doctor!</p>
       
    </header>
    
  ) 
}

export default Header