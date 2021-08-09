import React from "react";
import styled from "styled-components";

const Area = styled.div`
  z-index: 5;
  display: none;
  cursor: pointer;
  padding: 0.3rem;
  position: relative;
  align-items: center;

  @media (max-width: 960px) {
    display: block;
  }
  ${({ topbar }) =>
    topbar &&
    `
		
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

  ${({ top, topbar }) =>
    top &&
    topbar &&
    `
		transform: translateY(0.45rem) rotate(-135deg);
		
	`}

  ${({ mid, topbar }) =>
    mid &&
    topbar &&
    `
		transform: scale(0, 1);
		`}

	${({ bottom, topbar }) =>
    bottom &&
    topbar &&
    `
			transform: translateY(-0.45rem) rotate(-45deg);
	`}
`;

const Hamburger = ({ topbar, setTopbar }) => {
  return (
    <Area topbar={topbar} onClick={() => setTopbar(!topbar)}>
      <Bar top topbar={topbar} />
      <Bar mid topbar={topbar} />
      <Bar bottom topbar={topbar} />
    </Area>
  );
};

export default Hamburger;
