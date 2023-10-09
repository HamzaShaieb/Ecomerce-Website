import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import { mobile } from "../responsive";
import React from "react";
/*id: 2,
img: "https://i.ibb.co/DG69bQ4/2.png",
title: "AUTUMN COLLECTION",
desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
bg: "fcf1ed",
},*/
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;



const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  display:flex
  align-items:center !important
  justify-content:center !important

  `;

const Image = styled.img`
  height: 30%;
`;

const InfoContainer = styled.div`
  flex: 3;
  padding: 150px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background:teal !important;
  cursor: pointer;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Wrapper >
          <Slide  >
            <InfoContainer>
              <Title>Discover Your <br/>Perfect Tech Upgrade at </Title>
              <Desc>TechShop</Desc>
              <Button>SHOW NOW</Button>
            </InfoContainer>

          </Slide>
      </Wrapper>
    </Container>
  );
};

export default Slider;
