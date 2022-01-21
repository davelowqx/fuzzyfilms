import React from "react";
import Helmet from "react-helmet";

const SITE_NAME = "Truly Cinematic | fuzzyfilms";
const SITE_URL = "https://fuzzyfilms.co";
const SITE_DESCRIPTION = "Truly Cinematic Wedding Films";

const Seo = ({
  title = SITE_NAME,
  description = SITE_DESCRIPTION,
  path = "",
}) => {
  return (
    <Helmet>
      <title>{title}</title>

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta name="description" content={description} />
      <meta name="theme-color" content="#FFFFFF" />

      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

      <meta name="twitter:title" content={SITE_NAME} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content={SITE_URL} />
      <meta name="twitter:image" content={`${SITE_URL}/og_logo.png`} />
      <meta name="twitter:card" content="summary" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={SITE_URL + path} />
      <meta property="og:image" content={`${SITE_URL}/og_logo.png`} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
};

export default Seo;
