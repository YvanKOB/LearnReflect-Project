import React, { useState, useEffect } from "react";
import "../../css/ContactPage.css";
import { Link } from "react-router-dom";
import LR from "../img/LearnReflect.jpeg";

function Contact() {
  const [Values, setValues] = useState({
    // values lagrer data fra form og setValues setter verdien fra input inn i values lagrings variablen
    Email: "",
    Option: [],
    Message: ""
  });

  const HandleChange = event => {};

  const ContactRequest = async event => {};

  return (
    <div className="contact-panel">
      <Link to="/LR">
        <img className="LR-Logo" src={LR} />
      </Link>

      <div className="Form-Container">
        <form onSubmit={ContactRequest}>
          <input placeholder="Email" type="Email" onChange={HandleChange} />
          <div className="dropdownContact">
          <label>Products</label>
          <div className="dropdownShop-content">
          <a>Account Issue</a>
          <a>Questions</a>
          </div>
          </div>

          <div className="RequestMessage" onChange={HandleChange} />

          <div />

          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
}
export default Contact;
