import React from "react";
import classes from "../styles/Illustration.module.css";
import signupImage from "../assets/images/signup.svg";

export default function Illustration() {
  return (
    <div className={classes.Illustration}>
      <img src={signupImage} alt="Signup" />
    </div>
  );
}
