import React from 'react'
import { useHistory } from "react-router-dom";
import {TbStethoscope} from "react-icons/tb"
import {FaHospitalUser} from "react-icons/fa"

import "../Appointment/appointment.css"
function Appointment() {
  const history = useHistory();
  return (
    <section>
    <div className="appointment ">
     <h1 className= "ap_head">Get Started</h1>
     <hr className="hr_start"/>
     <div className =" ap1">
      <TbStethoscope className ="apoint_logo"/>
      <button onClick={()=>{history.push("/appoint")}} className ="btn btn-primary b2"> Book an Appointment</button>
      
    </div>
    <div className =" ap1">
    <FaHospitalUser className ="apoint_logo"/>
    <button className ="btn btn-primary b2">Locate your Nearest Hospitals</button>
    </div>
    </div>
    </section>
  )
}

export default Appointment