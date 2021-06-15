import React from "react";
import { Container } from "components/common";
import { Wrapper, Flex, Links, Details } from "./styles";

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
