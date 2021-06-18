import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const Portfolio = () => {
  const [videos, setVideos] = React.useState([395751458, 393493064, 393252091]);

  const handleClick = () => {
    setVideos([
      395751458, 393493064, 393252091, 429553859, 393251491, 393251469,
      393251435, 393251262, 393250436,
    ]);
  };
  return (
    <div className="wrapper" id="portfolio">
      <h2>PORTFOLIO</h2>
      <p>
        Grab some popcorn!{" "}
        <span role="img" aria-label="">
          🍿
        </span>
      </p>
      {videos.map((id, index) => (
        <div className="media" id={index}>
          <div className="video" id={index}>
            <iframe
              src={`https://player.vimeo.com/video/${id}?color=E1C48F`}
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <script src="https://player.vimeo.com/api/player.js"></script>
        </div>
      ))}
      <br />
      <ButtonWrapper>
        <button
          className="secondary"
          href="#4"
          disabled={videos.length > 3}
          onClick={handleClick}
        >
          More!
        </button>
      </ButtonWrapper>
    </div>
  );
};
