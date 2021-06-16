import React from "react";
import { Layout, Seo } from "components/common";
import { Intro } from "components/landing/Intro";
import { Projects } from "components/landing/Projects";
import { Skills } from "components/landing/Skills";
import { Contact } from "components/landing/Contact";

const Home = () => (
  <Layout>
    <Seo />
    <Intro />
    <hr align="center"></hr>
    <Skills />
    <hr align="center"></hr>
    <Projects />
    <Contact />
  </Layout>
);

export default Home;
