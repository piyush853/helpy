import React from 'react'
import pic6 from "../assets/pic6.png"
import "../Contact/contact.css"
import Card from 'react-bootstrap/Card';

function Contact() {
  return (
    <section id ="contact">
    <a href ="/" className="contact_home">Home</a>
  <div className="flex-container">
  
    <Card className="text-center contact_card h1-custom">
    <div className="" >
      <h1 className="contact_head">CONTACT US</h1>
      <img className = "contact_img"  src ={pic6}/>
      </div>
    <form className ="contact_form">
     
     <input className ="contact_inp" id="em1" placeholder="Email" type="email"/>
     <input className ="contact_inp"  id ="em2" placeholder="Contact No." type="number" />
     <textarea placeholder="Type your message here" className="contact_msg" id ="message" rows="7" cols="60" name="comment" form="usrform"></textarea>
     <button className="btn btn-primary contact_btn">Submit</button>
    </form>
    
  </Card>
</div>
</section>
  )
}

export default Contact