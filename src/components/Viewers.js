import React from "react";
import styled from "styled-components";

function Viewers() {
  return (
    <ContainerV>
      <WrapV>
        <img src="/images/viewers-disney.png" alt="" />
        {/* <video autoplay={true} loop={true} playsInline={true} muted={true}>
          <source src="/videos/1564674844-disney.mp4" type="video/mp4"></source>
        </video> */}
      </WrapV>
      <WrapV>
        <img src="/images/viewers-pixar.png" alt="" />
      </WrapV>
      <WrapV>
        <img src="/images/viewers-marvel.png" alt="" />
      </WrapV>
      <WrapV>
        <img src="/images/viewers-starwars.png" alt="" />
      </WrapV>
      <WrapV>
        <img src="/images/viewers-national.png" alt="" />
      </WrapV>
    </ContainerV>
  );
}

const ContainerV = styled.div`
  margin-top: 30px;
  display: grid;
  cursor: pointer;
  grid-gap: 25px;
  padding: 30px 0 26px;

  grid-template-columns: repeat(5, minmax(0, 1fr));
`;

const WrapV = styled.div`
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  box-shadow: rgba(0 0 0 /69%) 0px 26px 30px -10px,
    rgba(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    box-shadow: rgba(0 0 0 /80%) 0px 40px 58px -16px,
      rgba(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    background-video: url("/videos/1564674844-disney.mp4");
  }
`;

export default Viewers;
