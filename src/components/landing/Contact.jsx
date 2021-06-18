import React from "react";
import styled from "styled-components";
import ContactForm from "./Form";

export const Contact = () => (
  <div className="wrapper" id="contact">
    <h2>
      LET'S CHAT
      <span role="img" aria-label="">
        ☕
      </span>
    </h2>
    <p>We'd love to hear from you!</p>
    <ContactForm />
  </div>
);
