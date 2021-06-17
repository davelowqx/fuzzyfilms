import React from "react";
import { Layout } from "components/common/Layout";
import { Intro } from "components/landing/Intro";
import { Portfolio } from "components/landing/Portfolio";
import { Skills } from "components/landing/Skills";
import { Contact } from "components/landing/Contact";
import styled from "styled-components";

const Divider = styled.hr`
  width: 80%;
  margin: auto;
  max-width: 1024px;
`;

const Home = () => (
  <Layout>
    <Intro />
    <Divider />
    <Skills />
    <Divider />
    <Portfolio />
    <Divider />
    <Contact />
  </Layout>
);

export default Home;
