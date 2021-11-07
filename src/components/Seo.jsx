import React from "react";
import Helmet from "react-helmet";
import Thumbnail from "assets/thumbnail/thumbnail.png";

import {
  defaultTitle,
  defaultDescription,
  keywords,
  url,
  logo,
  foundingDate,
  socialLinks,
} from "config";

const Seo = ({
  title = defaultTitle,
  description = defaultDescription,
  location = "",
}) => {
  const structuredDataOrganization = `{
    "@context": "http://schema.org",
    "@type": "Organization",
    url: "${url}",
    logo: "${logo}",
    foundingDate: "${foundingDate}",
    sameAs: ["${socialLinks.instagram}", "${socialLinks.vimeo}"],
  }`;

  return (
    <Helmet>
      <meta charset="utf-8" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="image" content={Thumbnail} />

      <meta property="og:url" content={`${url}${location}`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={Thumbnail} />
      <link rel="canonical" href={`${url}${location}`} />
      <link rel="icon" href="https://www.fuzzyfilms.co/favicon.ico" />

      <script type="application/ld+json">{structuredDataOrganization}</script>
      <title>{title}</title>
      <html lang="en" dir="ltr" />
    </Helmet>
  );
};

export default Seo;
