import React, { useContext } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { ThemeContext } from "providers/ThemeProvider";
import { Container, Button } from "components/common";
import dev from "assets/illustrations/skills.svg";
import { Wrapper, SkillsWrapper, Details, Thumbnail } from "./styles";

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img />
        </Thumbnail>
        <Details theme={theme}>
          <h2>THE CINEMATIC DIFFERENCE</h2>
          <p>
            We pride ourselves in operating specialised cinema cameras capable
            of 4K resolutions, paired with industry-standard workflows to
            achieve high-end, filmic images that will withstand the test of
            time.{" "}
            <AnchorLink href="#projects">
              <u>See it for yourself!</u>
            </AnchorLink>
          </p>
        </Details>
      </SkillsWrapper>
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img />
        </Thumbnail>
        <Details theme={theme}>
          <h2>PREDICTABLE PRICING</h2>
          <p>Pay for what you need. By the hour, breaks excluded.</p>
          <p>
            And the best part? <b>Express Edits at no additional surcharge.</b>
          </p>
          <p>
            Having an infallible deadline makes my job more exciting. Definitely
            a win-win.{" "}
          </p>
        </Details>
      </SkillsWrapper>
      <SkillsWrapper as={Container}>
        <Details theme={theme}>
          <h2>ENJOY THE MOMENT</h2>
          <p>
            Don't worry the slightest about posing for the camera. Allow us to
            document your day, just the way it is ~.
          </p>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
