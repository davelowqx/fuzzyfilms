import React from "react";
import styled from "styled-components";

const Image = styled.img`
  top: 0;
  height: 100%;
  position: absolute;
  transition: 300ms;
  z-index: 3;
  cursor: pointer;
  ${({ show }) => (show ? `opacity: 1` : `opacity: 0`)}
`;

const ImageSlider = ({ left, right, graded, toggle }) => {
  return (
    <div className="media">
      <div className="video">
        <Image show={graded} src={left} onClick={() => toggle(!graded)} />
        <Image show={!graded} src={right} onClick={() => toggle(!graded)} />
      </div>
    </div>
  );
};

export default ImageSlider;
