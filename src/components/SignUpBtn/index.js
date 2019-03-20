import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function SignUpBtn(props) {
  return (
    <span className="login-btn" {...props} role="button" tabIndex="0">
      Login
    </span>    
  );
}

export default SignUpBtn;

