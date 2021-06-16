import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Header } from "components/theme";
import { Container } from "components/common";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 4rem 0;
  text-align: center;
`;

const Details = styled.div`
  h1 {
    font-size: 24pt;
    color: #212121;
  }

  p {
    margin-bottom: 2.5rem;
    font-size: 14pt;
    line-height: 1.5;
  }
`;

export const Intro = () => {
  return (
    <>
      <Header />
      <Wrapper as={Container}>
        <Details>
          <h1>IT'S YOUR SPECIAL DAY </h1>
        </Details>
        <Details>
          <p>
            We craft cinematic highlight reels that last a lifetime. If you are
            currently searching for actual day videography, look no further.{" "}
            <AnchorLink href="#about">Here's why.</AnchorLink>
          </p>
        </Details>
        <img src="/stills/dance.gif" />
      </Wrapper>
    </>
  );
};
