import React from "react";
import { Layout } from "components/layout";
import { Seo } from "components/Seo";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
`;

const NotFound = () => (
  <Layout>
    <Seo title="404: Not found" location="/404" />
    <Wrapper>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Wrapper>
  </Layout>
);

export default NotFound;
