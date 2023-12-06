import React from "react";
import Account from "./Account";
import classes from "../styles/Nav.module.css";
import logo from "../assets/images/logo-bg.png";

export default function Nav() {
  return (
    <div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <a href="index.html" className={classes.brand}>
              <img src={logo} alt="Learn with Sumit Logo" />
              <h3>Develope with Mohin</h3>
            </a>
          </li>
        </ul>
        <Account />
      </nav>
    </div>
  );
}
