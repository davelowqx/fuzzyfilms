import React from "react";
import styled from "styled-components";

const Image = styled.img`
  top: 0;
  height: 100%;
  position: absolute;
  transition: 300ms;
  z-index: 3;
  ${({ show }) => (show ? `opacity: 1` : `opacity: 0`)}
`;

const ImageSlider = ({ left, right, graded, toggle }) => {
  return (
    <div className="media">
      <div className="video">
        <label className="switch">
          <input type="checkbox" onClick={toggle} checked={graded}></input>
          <span className="slider round"></span>
        </label>
        <Image show={!graded} src={left} />
        <Image show={graded} src={right} />
      </div>
    </div>
  );
};

export default ImageSlider;
