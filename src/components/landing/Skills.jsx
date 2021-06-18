import React from "react";
import styled from "styled-components";
import ImageSlider from "./ImageSlider";

const Details = styled.div`
  padding: 1rem 0;
`;

export const Skills = () => {
  const [graded, toggle] = React.useState(true);

  return (
    <div className="wrapper" id="about">
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
          test of time.{" "}
          <a onClick={() => toggle(!graded)}>See it for yourself!</a>
        </p>
        <ImageSlider
          left="stills/couple0.png"
          right="stills/couple1.png"
          graded={graded}
          toggle={toggle}
        />
        <ImageSlider
          left="stills/bride0.png"
          right="stills/bride1.png"
          graded={graded}
          toggle={toggle}
        />
      </Details>
      <Details>
        <h2>
          PREDICTABLE PRICING{" "}
          <span aria-label="" role="img">
            💰
          </span>
        </h2>
        <pre>
          Pay for what you need. By the hour, breaks excluded.{"\n"}3am
          Gatecrash? Steady, no early surcharge.
        </pre>
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
          document your day, just the way it is ~
        </p>
        <figure>
          <img alt="enjoy" src="/stills/enjoy.png" />
          <figcaption>Sparkles!</figcaption>
        </figure>
      </Details>
    </div>
  );
};
