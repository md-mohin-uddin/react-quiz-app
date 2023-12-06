import React from "react";
import classes from "../styles/Form.module.css";
export default function Form({ children, className, ...rest }) {
  return (
    <div>
      <form className={`${classes.signup}${classes.form}`} action="#" {...rest}>
        {children}
      </form>
    </div>
  );
}
