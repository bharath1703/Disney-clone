import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import movieData from "./movieData";
import { useParams } from "react-router-dom";

function VideoRender(props) {
  const [videosource, setVideosrc] = useState({});

  const { id } = useParams();
  // console.log(videosource);

  useEffect(() => {
    setVideosrc(movieData[id - 1]);
  }, [id]);

  return (
    <Container>
      <Videocontainer>
        <div>
          <video width={600} height={350} controls autoPlay={false}>
            <source src={videosource.videoSrc} type="video/mp4" />
          </video>
        </div>
      </Videocontainer>
    </Container>
  );
}

export default VideoRender;

const Container = styled.div`
  position: relative;
  min-height: calc(100vh-250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;
const Videocontainer = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;
