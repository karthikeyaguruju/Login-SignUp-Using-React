import React , { useState} from 'react';
import './LoginSignup.css';
import user_icon from'../Assets/person.png';
import password_icon from'../Assets/password.png';
import email_icon from'../Assets/email.png';


const LoginSignup = () => {

  const [action,SetAction]=useState('Login');

  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
        </div>
        <div className="inputs">
            {action==="Login"?<div></div>:<div className="input">
                <img src={user_icon} alt="" />
                <input type="text" placeholder="Username"/>
            </div>}
            

            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder="Email"/>
            </div>

            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder="Password"/>
            </div>
        </div>
        {action==="Sign Up"?<div></div>:<div className="forget-password">
            Lost Password? <span>Click Here!</span>
        </div>}
        
        <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{SetAction("Sign Up")}}>Sign Up</div>
            <div className={action==="signUp"?"submit gray":"submit"}onClick={()=>{SetAction("Login")}}>Log In</div>
        </div>
    </div>
  )
}

export default LoginSignup
