import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import dance from "assets/stills/dance640.gif";

const Intro = () => {
  return (
    <div className={`wrapper center priority`}>
      <h1>
        IT'S YOUR <mark>SPECIAL DAY </mark>
      </h1>
      <p className="title">
        We craft cinematic highlight reels that last a lifetime. If you are
        currently searching for actual day videography, look no further.{" "}
        <AnchorLink href="#about">Here's why.</AnchorLink>
      </p>
      <img alt="dance" src={dance} />
    </div>
  );
};

export default Intro;
