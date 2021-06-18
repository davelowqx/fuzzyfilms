import React from "react";
import Helmet from "react-helmet";
import Thumbnail from "assets/thumbnail/thumbnail.png";

import {
  address,
  defaultTitle,
  defaultDescription,
  url,
  logo,
  foundingDate,
  socialLinks,
} from "data/config";

export const Seo = ({
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
    address: {
      "@type": "PostalAddress",
      addressLocality: "${address.city}",
      addressRegion: "${address.region}",
      addressCountry: "${address.country}",
      postalCode: "${address.zipCode}",
    },
    sameAs: ["${socialLinks.instagram}", "${socialLinks.vimeo}"],
  }`;

  return (
    <Helmet>
      <meta name="description" content={description} />
      <meta name="image" content={Thumbnail} />

      <meta property="og:url" content={`${url}${location}`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={Thumbnail} />
      <meta charset="utf-8" />

      <script type="application/ld+json">{structuredDataOrganization}</script>
      <title>{title}</title>
      <html lang="en" dir="ltr" />
    </Helmet>
  );
};
