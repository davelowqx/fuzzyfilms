import styled from "styled-components";

export const Wrapper = styled.div``;

export const SkillsWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  flex: 1;
  padding-left: 2rem;

  @media (max-width: 960px) {
    padding-left: unset;
    width: 100%;
  }

  h2 {
    margin-bottom: 2rem;
    font-size: 20pt;
    color: #212121;
  }

  p {
    font-family: LibreFranklin;
    margin-bottom: 1rem;
    font-size: 14pt;
    font-weight: normal;
    line-height: 1.5;
    color: #707070;
  }
`;

export const Thumbnail = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  img {
    width: 100%;
  }
`;
