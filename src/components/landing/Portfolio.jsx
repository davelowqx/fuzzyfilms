import React from "react";
import styled from "styled-components";
import { Container } from "components/common/Container";
import AnchorLink from "react-anchor-link-smooth-scroll";

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

const ButtonWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  background: none;
  color: #707070;
  border: 2px solid #707070;

  &:hover:not([disabled]) {
    background: none;
    color: #212121;
    border: 2px solid #212121;
  }
  &:active {
    color: #212121;
    border: 2px solid #212121;
  }
  &:disabled {
    display: none;
  }
`;

export const Portfolio = () => {
  const [videos, setVideos] = React.useState([395751458, 393493064, 393252091]);

  const handleClick = () => {
    setVideos([
      395751458, 393493064, 393252091, 429553859, 393251491, 393251469,
      393251435, 393251262, 393250436,
    ]);
    window.scrollBy({
      top: 500,
      behavior: "smooth",
    });
  };
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
      <br />
      <ButtonWrapper>
        <Button disabled={videos.length > 3} onClick={handleClick}>
          View More
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};
