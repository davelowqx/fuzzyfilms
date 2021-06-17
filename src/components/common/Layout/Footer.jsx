import React from "react";
import { Container } from "components/common/Container";
import footerIllustration from "assets/illustrations/footer.svg";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 28rem 0 4rem 0;
  background-image: url(${footerIllustration});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;

  @media (max-width: 1960px) {
    padding: 14rem 0 4rem;
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media (max-width: 680px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;

  a {
    img {
      margin: 0;
    }

    &:first-child {
      margin: 0 2.5px 0 0;
    }
    &:last-child {
      margin: 0 0 0 2.5px;
    }
  }
`;

const Details = styled.div`
  a {
    font-family: "Affectionately Yours";
    font-weight: normal;
    font-size: 20pt;
    color: #212121;
    display: block;
    margin-bottom: 1rem;
    &:active,
    &:hover {
      cursor: pointer;
      background: none;
    }
  }
  p {
    margin-bottom: 0.5rem;
  }

  @media (max-width: 680px) {
    margin-bottom: 1rem;
  }
`;

export const Footer = () => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <a
          onClick={() =>
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
          }
        >
          fuzzyfilms
        </a>
        <p>
          © {new Date().getFullYear()} | Made with{" "}
          <span aria-label="love" role="img">
            💖
          </span>
        </p>
      </Details>
      <Links>
        <a
          href={"https://instagram.com/fuzzyfilms.co"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img width="24" src={"/icons/instagram.svg"} alt={"Instagram"} />
        </a>
        <a
          href={"https://vimeo.com/fuzzyfilms"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img width="24" src={"/icons/vimeo.svg"} alt={"Vimeo"} />
        </a>
      </Links>
    </Flex>
  </Wrapper>
);
