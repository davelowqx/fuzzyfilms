import React from "react";
import styled from "styled-components";
import { Container } from "components/common";

const Wrapper = styled.div`
  padding: 4rem 0;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-rows: 8fr;
  gap: 1.2rem 1.2rem;
`;

export const Projects = () => {
  const videos = [
    429553859, 395751458, 393493064, 393252091, 393251491, 393251469, 393251435,
    393251262, 393250436,
  ];
  return (
    <Wrapper as={Container} id="projects">
      <h2>PAST WORKS</h2>
      <p>Grab some popcorn! 🍿</p>
      <Grid>
        {videos.map((id) => (
          <iframe
            src={`https://player.vimeo.com/video/${id}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
            width="1280"
            height="536"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          ></iframe>
        ))}
      </Grid>
    </Wrapper>
  );
};
