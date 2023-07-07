import React from 'react';
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
const IframeBox = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  margin-bottom: 60px
`;
const Iframe = styled.iframe`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const ProductVideo = () => {
  return (
    <Container>
      <IframeBox>
        <Iframe 
        src="https://www.youtube.com/embed/ro-QNaKx8I8?autoplay=1&mute=1&controls=0&loop=1&playlist=ro-QNaKx8I8  " 
        title="YouTube video player" 
        frameborder="0" 
        allow="?autoplay=1&mute=1 ;"
        allowfullscreen 
        />
      </IframeBox>
    </Container>
  )
}

export default ProductVideo;
