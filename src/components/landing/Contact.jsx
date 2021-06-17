import React from "react";
import { Container } from "components/common/Container";
import styled from "styled-components";
import ContactForm from "./Form";

const Wrapper = styled.div`
  padding: 3rem 0;
  justify-content: space-between;
`;

const Details = styled.div``;

export const Contact = () => (
  <Wrapper as={Container} id="contact">
    <Details>
      <h2>
        LET'S CHAT
        <span role="img" aria-label="">
          ☕
        </span>
      </h2>
      <p>We'd love to hear from you!</p>
      <ContactForm />
    </Details>
  </Wrapper>
);
