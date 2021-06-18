import React from "react";
import styled from "styled-components";

const Area = styled.div`
  z-index: 5;
  top: 1.6rem;
  right: 1.6rem;
  display: none;
  cursor: pointer;
  padding: 0.3rem;
  position: absolute;
  align-items: center;

  @media (max-width: 960px) {
    display: block;
  }
  ${({ sidebar }) =>
    sidebar &&
    `
    position: fixed;
		
	`}
`;

const Bar = styled.div`
  width: 1.6rem;
  border-radius: 2px;
  height: 0.15rem;
  margin-bottom: 0.3rem;
  background-color: #212121;
  position: relative;
  transition: transform 400ms cubic-bezier(0.6, 0.05, 0.28, 0.91), opacity 500ms,
    box-shadow 250ms, background-color 500ms;
  &:last-child {
    margin-bottom: 0;
  }

  ${({ top, sidebar }) =>
    top &&
    sidebar &&
    `
		transform: translateY(0.45rem) rotate(-135deg);
		
	`}

  ${({ mid, sidebar }) =>
    mid &&
    sidebar &&
    `
		transform: scale(0, 1);
		`}

	${({ bottom, sidebar }) =>
    bottom &&
    sidebar &&
    `
			transform: translateY(-0.45rem) rotate(-45deg);
	`}
`;

const Hamburger = ({ sidebar, toggle }) => {
  return (
    <Area sidebar={sidebar} onClick={() => toggle(!sidebar)}>
      <Bar top sidebar={sidebar} />
      <Bar mid sidebar={sidebar} />
      <Bar bottom sidebar={sidebar} />
    </Area>
  );
};

export default Hamburger;
