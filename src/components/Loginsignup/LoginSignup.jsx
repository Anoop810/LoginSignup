import React, { useState } from 'react'
import './LoginSignup.css'

export default function LoginSignup() {
    const[action,setAction]=useState("Signup");
  return (
    <div className='container'>
        <div className='Header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
        {action==="Login"? <div></div>: <div className='input'>
                <input type='text' placeholder='enter your username'></input>
            </div> }
           
        </div>
        <div className='inputs'>
            
            <div className='input'>
                <input type='email' placeholder='enter your email'></input>
            </div>
        </div>
        <div className='inputs'>
            
            <div className='input'>
                <input type='password' placeholder='enter password'></input>
            </div>
        </div>
        {action=="Signup"?<div></div>:<div className="forgot-password">Lost password? <span>Click here</span></div>}
        
        <div className='Submit-container'>
            <div className={action==="Login"?"submit gray": "submit"}onClick={()=>{setAction("Signup")}}>Signup</div>
            <div className={action==="Signup"?"submit gray": "submit"}onClick={()=>{setAction("Login")}}>Login</div>
        </div>
    </div>
  )
}
