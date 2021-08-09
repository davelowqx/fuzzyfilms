import React from "react";
import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import couple0 from "assets/stills/couple0.png";
import couple1 from "assets/stills/couple1.png";
import bride0 from "assets/stills/bride0.png";
import bride1 from "assets/stills/bride1.png";
import { StaticImage } from "gatsby-plugin-image";

const Details = styled.div`
  padding: 1rem 0;
`;

const Skills = () => {
  const [graded, setGraded] = React.useState({ a: false, b: false, c: false });

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
          <a
            onClick={() => {
              setGraded({ a: true, b: true, c: true });
            }}
          >
            See it for yourself!
          </a>
        </p>
        <ImageSlider
          key="b"
          left={couple0}
          right={couple1}
          graded={graded.b}
          toggle={() => setGraded({ ...graded, b: !graded.b })}
        />
        <ImageSlider
          key="c"
          left={bride0}
          right={bride1}
          graded={graded.c}
          toggle={() => setGraded({ ...graded, c: !graded.c })}
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
          <div className="img">
            <StaticImage
              alt="angpao"
              src="../../assets/stills/angpao.png"
              quality={100}
            />
          </div>
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
          <div className="img">
            <StaticImage
              alt="enjoy"
              src="../../assets/stills/enjoy.png"
              quality={100}
            />
          </div>
          <figcaption>*Sparkles*</figcaption>
        </figure>
      </Details>
      <Details>
        <h2>
          BONUS UNGLAMS{" "}
          <span role="img" aria-label="">
            🙈
          </span>
        </h2>
        <p>Because authentic moments aren't usually the most glamorous.</p>
        <figure>
          <div className="img">
            <StaticImage
              alt="enjoy"
              src="../../assets/stills/me.png"
              quality={100}
            />
          </div>
          <figcaption>Me 24/7</figcaption>
        </figure>
      </Details>
    </div>
  );
};

export default Skills;
