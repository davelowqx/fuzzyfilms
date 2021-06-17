import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Container } from "components/common/Container";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 3rem 0;
  text-align: center;
`;

const Details = styled.div`
  h1 {
    font-size: 24pt;
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
      <Wrapper as={Container}>
        <Details>
          <h1>
            IT'S YOUR <mark>SPECIAL DAY </mark>
          </h1>
        </Details>
        <Details>
          <p>
            We craft cinematic highlight reels that last a lifetime. If you are
            currently searching for actual day videography, look no further.{" "}
            <AnchorLink href="#about">Here's why.</AnchorLink>
          </p>
        </Details>
        <img alt="dance" src="/stills/dance.gif" />
      </Wrapper>
    </>
  );
};
