import React from "react";
import { Container } from "components/common";
import styled from "styled-components";
import ContactForm from "./ContactForm";

const Wrapper = styled.div`
  padding: 4rem 0;
  justify-content: space-between;
`;

const Details = styled.div``;

export const Contact = () => (
  <Wrapper as={Container} id="contact">
    <Details>
      <h2>
        LET'S CHAT
        <aria role="img" aria-label="">
          ☕
        </aria>
      </h2>
      <p>We'd love to hear from you!</p>
      <ContactForm />
    </Details>
  </Wrapper>
);
