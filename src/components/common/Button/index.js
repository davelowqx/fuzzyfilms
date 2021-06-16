import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  padding: 0.7rem 2.5rem;
  width: unset;
  border: none;
  -webkit-appearance: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #000;
  background: #e1c48f;

  &:focus {
    outline: none;
  }

  &:disabled {
    background: gray;
  }
  @media (max-width: 960px) {
    width: 100%;
  }
`;
