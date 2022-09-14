import React from 'react'
import pic5 from "../assets/pic5.png"
import "../Signup/signup.css"
import {BsFacebook} from "react-icons/bs"
import {BsGoogle} from "react-icons/bs"
import {BsApple} from "react-icons/bs"
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
} from 'mdb-react-ui-kit';
function Signup() {
  return (
<div className = "login_form">
<MDBContainer fluid className="p-3 my-5 h-custom">

      <MDBRow>
        <a className="home_btn" href="/">Home</a>
        <MDBCol col='9' md='6'>
          
          <img src={pic5} class="img-fluid" alt="login_image" />
        </MDBCol>
   
        <MDBCol col='4' md='6'>

          <div className="d-flex flex-row align-items-center justify-content-center">

            <p className="lead fw-normal mb-0 me-3">Sign up with</p>
             <div className ="social_btn">
            <MDBBtn floating size='md' tag='a' className='me-2'>
            <BsFacebook/>
            </MDBBtn>

            <MDBBtn floating size='md' tag='a'  className='me-2 '>
             <BsGoogle/>
            </MDBBtn>

            <MDBBtn floating size='md' tag='a'  className='me-2 ' >
              <BsApple/>            
              </MDBBtn>
        </div>
         </div>
          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Or</p>
          </div>

          <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>
          <MDBInput wrapperClass='mb-4' label='Confirm Password' id='formControlLg' type='password' size="lg"/>

          <div className="d-flex justify-content-between mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>

          <div className='text-center text-md-start mt-4 pt-2'>
            <MDBBtn className="mb-0 px-5" size='lg'>Sign up for free</MDBBtn>
            <p className="small fw-bold mt-2 pt-1 mb-2">Already have an account? <a href="/login" className="link-danger">Login</a></p>
          </div>

        </MDBCol>

      </MDBRow>


       

        <div>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
            <MDBIcon fab icon='facebook-f' size="md"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
            <MDBIcon fab icon='twitter' size="md"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
            <MDBIcon fab icon='google' size="md"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
            <MDBIcon fab icon='linkedin-in' size="md"/>
          </MDBBtn>

        </div>


    </MDBContainer>
  </div>
 
  )
  

}
export default Signup;