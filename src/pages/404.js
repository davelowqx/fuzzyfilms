import React from "react";
import Layout from "components/layout";
import Seo from "components/Seo";
import styled from "styled-components";

const Container = styled.div`
  padding: 11rem 0 8rem;
  text-align: center;
`;

const NotFound = () => (
  <Layout>
    <Seo title={"404: Not found"} path={"/404"} />
    <Container>
      <h1>NOT FOUND</h1>
      <p>
        Nothing to see here... <a href="/">back</a>
      </p>
    </Container>
  </Layout>
);

export default NotFound;
