import React, { useContext } from "react";
//import { useStaticQuery, graphql } from "gatsby";
import { ThemeContext } from "providers/ThemeProvider";
import { Container, Card, TitleWrap } from "components/common";
import Star from "components/common/Icons/Star";
import Fork from "components/common/Icons/Fork";
import { Wrapper, Grid, Item, Content, Stats, Languages } from "./styles";

export const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const videos = [
    429553859, 395751458, 393493064, 393252091, 393251491, 393251469, 393251435,
    393251262, 393250436,
  ];
  return (
    <Wrapper as={Container} id="projects">
      <Grid>
        <h2>PAST WORKS</h2>
        <p>Grab some popcorn!</p>
        {videos.map((id) => (
          <div style={{ alignItems: "center" }}>
            <iframe
              src={`https://player.vimeo.com/video/${id}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
              width="1280"
              height="536"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        ))}
      </Grid>
    </Wrapper>
  );
};
