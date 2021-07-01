const config = require("./src/data/config");

require("dotenv").config({
  path: `.env`,
});

module.exports = {
  plugins: ["gatsby-plugin-react-helmet", "gatsby-plugin-styled-components"],
};
