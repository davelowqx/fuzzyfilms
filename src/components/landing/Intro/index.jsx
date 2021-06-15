import React, { useContext } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { ThemeContext } from "providers/ThemeProvider";
import { Header } from "components/theme";
import { Container, Button } from "components/common";
import { Wrapper, IntroWrapper, Details } from "./styles";

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>IT'S YOUR SPECIAL DAY</h1>
        </Details>
        <Details theme={theme}>
          <p>
            We craft cinematic highlight reels that last a lifetime. If you are
            currently searching for actual day videography, look no further.{" "}
            <AnchorLink href="#about">
              <u>Here's why.</u>
            </AnchorLink>
          </p>
        </Details>
      </IntroWrapper>
      <hr style={{ width: "80%" }}></hr>
    </Wrapper>
  );
};
