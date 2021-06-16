import React from "react";
import styled from "styled-components";
import { Container } from "components/common";

const Wrapper = styled.div`
  padding: 4rem 0;
  align-items: center;
`;

const Grid = styled.div`
  padding: 0.5rem 0;
  align-items: center;
`;

const VideoWrapper = styled.div`
  padding-bottom: 41.875%;
  position: relative;
`;

const Video = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`;

export const Portfolio = () => {
  const videos = [
    429553859, 395751458, 393493064, 393252091, 393251491, 393251469, 393251435,
    393251262, 393250436,
  ];
  return (
    <Wrapper as={Container} id="portfolio">
      <h2>PORTFOLIO</h2>
      <p>
        Grab some popcorn!{" "}
        <span role="img" aria-label="">
          🍿
        </span>
      </p>
      {videos.map((id) => (
        <Grid>
          <VideoWrapper>
            <Video
              src={`https://player.vimeo.com/video/${id}?color=E1C48F`}
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
            ></Video>
          </VideoWrapper>
          <script src="https://player.vimeo.com/api/player.js"></script>
        </Grid>
      ))}
    </Wrapper>
  );
};
