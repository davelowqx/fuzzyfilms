import React from "react";
import Layout from "components/layout";
import Intro from "components/landing/Intro";
import Portfolio from "components/landing/Portfolio";
import Skills from "components/landing/Skills";
import Contact from "components/landing/Contact";

const Home = () => (
  <Layout>
    <Intro />
    <hr />
    <Skills />
    <hr />
    <Portfolio />
    <hr />
    <Contact />
  </Layout>
);

export default Home;
