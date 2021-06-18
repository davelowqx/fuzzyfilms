import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const Intro = () => {
  return (
    <div className={`wrapper center`}>
      <h1>
        IT'S YOUR <mark>SPECIAL DAY </mark>
      </h1>
      <p className="title">
        We craft cinematic highlight reels that last a lifetime. If you are
        currently searching for actual day videography, look no further.{" "}
        <AnchorLink href="#about">Here's why.</AnchorLink>
      </p>
      <img alt="dance" src="/stills/dance.gif" />
    </div>
  );
};
