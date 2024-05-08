import React from 'react'
import './Css/LoginSignUp.css'

const LoginSignUp = () => {
  return (
    <div className='loginSignUp'>
      <div className="loginSingUp-container">
        <h1>Sign Up</h1>
      
      <div className="loginSignUp-fields">
        <input type="text" placeholder='Your Name' />
        <input type="email" placeholder='Your Email'/>
        <input type="password" placeholder='Your PassWord' />
      </div>
      <button>Continue</button>
      <p className='loginSignUp-login'>
        Alertdy have an accaunt ? <span>Login here</span>
      </p>
      <div className="loginSignUp-agree">
        <input type="checkbox" name="" id="" />
        <p>By continuing, i agree to the terms of use & privancy policy</p>
      </div>
      </div>
    </div>
  )
}

export default LoginSignUp
