import React from "react";
import { Container } from "components/common";
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
    margin: 0 0.5rem;

    img {
      margin: 0;
    }

    &:first-child,
    &:last-child {
      margin: 0;
    }
  }
`;

const Details = styled.div`
  span {
    color: #212121;
  }

  h3 {
    font-family: "Affectionately Yours";
    color: #212121;
  }

  @media (max-width: 680px) {
    margin-bottom: 2rem;
  }
`;

export const Footer = () => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <h3>fuzzyfilms</h3>
        <span>
          © {new Date().getFullYear()} | Made with{" "}
          <span aria-label="love" role="img">
            💖
          </span>
        </span>
      </Details>
      <Links>
        <a
          href={"https://instagram.com/fuzzyfilms.co"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img width="24" src={"/icons/instagram.svg"} alt={"Instagram"} />
        </a>
      </Links>
    </Flex>
  </Wrapper>
);
