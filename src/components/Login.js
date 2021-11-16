import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" alt="" />
        <SignUp>GET ALL THERE</SignUp>
        <Description>
          Disney Plus Premier Access is a purchase option for Disney Plus
          subscribers, enabling members to pay an extra $30 one-time fee to gain
          early streaming access to a movie that's still playing in theaters.
          Once purchased, Disney Plus members can continue to stream or download
          a Premier Access movie for as long as they remain a subscriber.
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png" alt="" />
      </CTA>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  align-items: top;
  justify-content: center;

  &:before {
    z-index: -1;
    position: absolute;
    top: 0;
    bottom: 0;
    content: "";
    left: 0;
    right: 0;
    background-image: url("images/login-background.jpg");
    background-position: top;
    background-size: cover;
    opacity: 0.7;
    background-repeat: no-repeat;
  }
`;

const CTA = styled.div`
  max-width: 650px;
  width: 90%;
  padding: 80px 40px;
  display: flex;
  margin-top: 100px;
  flex-direction: column;
  align-items: center;
`;

const CTALogoOne = styled.img``;

const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0px;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;

  &:hover {
    background: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
`;
const CTALogoTwo = styled.img``;
