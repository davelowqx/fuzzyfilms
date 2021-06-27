import React from "react";
import { Layout } from "components/layout";
import { Seo } from "components/Seo";

const NotFound = () => (
  <Layout>
    <Seo title="404: Not found" location="/404" />
    <div className="center">
      <h1>NOT FOUND</h1>
      <p>
        Nothing to see here... <a href="/">back</a>
      </p>
    </div>
  </Layout>
);

export default NotFound;
