import {React , useState}from 'react'
import { useHistory } from "react-router-dom";
import "../Appoint/appoint.css"

import {Card, ProgressBar, Button,Form,FloatingLabel,InputGroup,ListGroup,Modal } from 'react-bootstrap';
import pic7 from "../assets/pic7.png"
import pic8 from "../assets/pic8.png"
import pic9 from "../assets/pic9.png"
import pic10 from "../assets/pic10.png"
import DateAndTime from '../Dateandtime /DateAndTime';
import DoctorsCard from '../DoctorsCard/DoctorsCard';
import doctor from "../../doctor.json"
import $ from 'jquery';


function Appoint() {
  const [progress,setProgress] = useState(25)
  const [show, setShow] = useState(false);
  const history = useHistory();
  if (progress === 25){

    return (
      
      <div>
      
      <ProgressBar now = {progress}/>
      <h3 className = "get_h">Let's get some details</h3>
      <hr style={{width:"20rem", "marginLeft":"30.5rem"}}/>
      <img className = "appoint_img1" src={pic7}/>
      <FloatingLabel controlId="floatingSelect" label="Select your preferred doctor specialist">
      <Form.Select aria-label="">

        <option value="1">Allergists/Immunologists</option>
        <option value="2">Anesthesiologists</option>
        <option value="4">Colon and Rectal Surgeons</option>
        <option value="5">Dermatologists</option>
        <option value="6">Critical Care Medicine Specialists</option>
        <option value="7">Family Physicians</option>
        <option value="8">Gastroenterologists</option>
        <option value="9">Infectious Disease Specialists</option>
        <option value="10">Neurologists</option>
        <option value="11">others</option>
        
      </Form.Select>
    </FloatingLabel>
        <h4 className = "or">Or</h4>
        <Form.Label className ="appoint_label" htmlFor="appoint_inp">Enter your Problem or Disease</Form.Label>
        <InputGroup className="mb-3 appoint_inp" >
        <Form.Control placeholder ="ex: fever,stomach problem" id="appoint_inp" aria-describedby="basic-addon3" />
        </InputGroup>
        <button className = " btn btn-primary appoint_btn" onClick= {() => {setProgress(progress+25)}}>Next</button>
       
      </div>
   
    )
  }
  else if (progress === 50){
    return(
      <div>
      <ProgressBar now={progress} />
      <DateAndTime/>
      <img className = "appoint_img2" src ={pic8}/>
      <button className = " btn btn-primary appoint_btn" onClick= {() => {setProgress(progress+25)}}>Next</button>
      <button className = "btn btn-primary appoint_btn" onClick = {() => {setProgress(progress-25)}}>Back</button>
    </div>
     
    )
  }
  else if (progress === 75){
    return(
      <div>
      <ProgressBar now={progress} />
       <h3 className ="get_h">Enter your Location </h3>
       <hr style={{width:"20rem", "marginLeft":"29.5rem"}}/>
       <img className = "appoint_img3" src ={pic9}/>
      <button className = " btn btn-primary appoint_btn" onClick= {() => {setProgress(progress+25)}}>Next</button>
      <button className = "btn btn-primary appoint_btn" onClick = {() => {setProgress(progress-25)}}>Back</button>
    </div>
     
    )
  }
  else if(progress === 100){
    
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    const displayData = doctor.map((doc)=>{
      return(
        <div>
        

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Congratulations!</Modal.Title>
        </Modal.Header>
        <Modal.Body>You have successfully booked an appoint!
        <p>You can track your appointment in your profile</p></Modal.Body>
        <Modal.Footer>
          
          <Button variant="primary" onClick={()=>{history.push("/")}}>
            Home
          </Button>
        </Modal.Footer>
       </Modal>
        <li ><DoctorsCard 
         name={doc.name}
         desc ={doc.desc}
         rating ={doc.rating}
         location ={doc.location}
         trustscore ={doc.trustscore}
         id = {doc.id}
       /></li>
       </div>
      )
    })
;
    return(
    <div>
      <ProgressBar now={progress} />
       <h3 className ="app_h">Select the nearest doctor for appointment</h3>
       <hr style={{width:"20rem", "marginLeft":"29.5rem"}}/>
       <ul className="doctors_card">
       
       {displayData}
       <img className = "appoint_img4" src ={pic10}/>
       </ul>
      <button className = " btn btn-primary appoint_btn1" onClick= {handleShow}>Book Appointment</button>
      <button className = "btn btn-primary appoint_btn1" onClick = {() => {setProgress(progress-25)}}>Back</button>
      

    </div>
    )
  }

  return (
    
    <div>
    
      <ProgressBar now={progress} />
      
      
      <button className = " btn btn-primary appoint_btn" onClick= {() => {setProgress(progress+25)}}>Next</button>
      <button className = "btn btn-primary appoint_btn" onClick = {() => {setProgress(progress-25)}}>Back</button>
    </div>
 
  )
}


export default Appoint