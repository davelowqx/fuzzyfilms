import React from "react";
import { Container } from "components/common";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 3rem 0;
  align-items: center;
`;

const Details = styled.div`
  padding: 1rem 0;
`;

const handleClick = () => console.log("magic!");

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
          We operate specialised cinema cameras, paired with indstry-standard
          workflows to achieve high-end, filmic images that will withstand the
          test of time. <a onClick={handleClick}>See it for yourself!</a>
        </p>
        <figure>
          <img alt="couple" src="/stills/couple1.png" />
        </figure>
        <figure>
          <img alt="bride" src="/stills/bride1.png" />
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
        <p>3am Gatecrash? Steady, no early surcharge.</p>
        <figure>
          <img alt="angpao" src="/stills/angpao.png" />
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
          <img alt="enjoy" src="/stills/enjoy.png" />
          <figcaption>Sparkles!</figcaption>
        </figure>
      </Details>
    </Wrapper>
  );
};
