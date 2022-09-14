import { height } from 'dom-helpers'
import React from 'react'
import pic1 from "../assets/pic1.jpg"
import pic2 from "../assets/pic2.png"
import pic3 from "../assets/pic3.png"
import "../Features/features.css"

function Features() {
  return (
    <div>
    <h1 className = "features_head">What we offer </h1>
    <hr className= "features_hr"/>
    <img className = "pic" src={pic3}/>
    <div className = " f1 col-md-12">
    <h1 >24 x 7 Available for you !</h1>
    <p className ="">Available for you anytime for all your services</p>
    </div>
    <img s className ="pic2" src = {pic2}></img>
    <div className = "f2 col-md-5">
    <h1>Large Medical Team </h1>
    <p className ="">We have very large team of qualified doctors</p>
    </div>
    <img className = "pic" src={pic1}/>
    <div className = " f1 col-md-12">
    <h1>Appointing Made Easy</h1>
    <p className ="">You can appoint your nearest doctor within few sconds</p>
    </div>
    </div>
  )
}

export default Features