// import React from "react";
import React,{useState} from "react";
import "./LoginSignup/Login.css";
import user_icon from "../Components/Assets/download.png";
import email_icon from "../Components/Assets/email-icon-free-vector (1).jpg";
import password_icon from "../Components/Assets/250129-200.png";
export const LoginSignup = () => {

  const [action,setAction] = useState("Login");
  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action==="Login"? <div></div>:  <div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder="Name" />
        </div>}
      
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email Id" />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="password"/>
        </div>
      </div>
      {action==="Sign Up"?<div></div>: <div className="forgot-password">Lost Password <span>Click Here!</span></div>}
     
       <div className="submit-container">
        <div className={action==="Login"?"submit gray":"submit"}onClick={()=>{setAction("Sign Up")}}>Signup</div>
        <div className={action==="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
       </div>

    </div>
  );
};
