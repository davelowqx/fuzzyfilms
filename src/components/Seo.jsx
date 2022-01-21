import React from "react";
import Helmet from "react-helmet";

const APP_NAME = "Truly Cinematic | fuzzyfilms";
const APP_URL = "https://fuzzyfilms.co";
const APP_DESCRIPTION = "Truly Cinematic Wedding Films";

const Seo = ({
  title = APP_NAME,
  description = APP_DESCRIPTION,
  location = "",
}) => {
  return (
    <Helmet>
      <title>{title}</title>

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta name="description" content={description} />
      <meta name="theme-color" content="#FFFFFF" />

      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={APP_NAME} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content={APP_URL} />
      <meta name="twitter:image" content="/og_logo.png" />

      <meta property="og:url" content={`${APP_URL}${location}`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/og_logo.png" />
    </Helmet>
  );
};

export default Seo;
