import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Container } from "components/common";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 4rem 0;
  align-items: center;
`;

const Details = styled.div`
  padding: 1rem 0;
`;

export const Skills = () => {
  return (
    <Wrapper id="about" as={Container}>
      <Details>
        <h2>
          THE CINEMATIC DIFFERENCE{" "}
          <span aria-label="" role="img">
            🎥
          </span>
        </h2>
        <p>
          We pride ourselves in operating specialised cinema cameras capable of
          4K resolutions, paired with industry-standard workflows to achieve
          high-end, filmic images that will withstand the test of time.{" "}
          <AnchorLink href="#projects">See it for yourself!</AnchorLink>
        </p>
        <figure>
          <img src="/stills/couple1.png" />
          <img src="/stills/bride1.png" />
        </figure>
      </Details>
      <Details>
        <h2>
          PREDICTABLE PRICING{" "}
          <span aria-label="" role="img">
            💰
          </span>
        </h2>
        <p>Pay for what you need. By the hour, breaks excluded.</p>
        <p>
          And the best part? <b>Express Edits at no additional surcharge.</b>
        </p>
        <p>
          Having an infallible deadline makes my job more exciting. Definitely a
          win-win.{" "}
        </p>
        <figure>
          <img src="/stills/angpao.png" />
          <figcaption>Huat ah!</figcaption>
        </figure>
      </Details>
      <Details>
        <h2>
          ENJOY THE MOMENT{" "}
          <span role="img" aria-label="">
            👰🤵
          </span>
        </h2>
        <p>
          Don't worry the slightest about posing for the camera. Allow us to
          document your day, just the way it is ~.
        </p>
        <figure>
          <img src="/stills/enjoy.png" />
          <figcaption>Sparkles!</figcaption>
        </figure>
      </Details>
    </Wrapper>
  );
};
