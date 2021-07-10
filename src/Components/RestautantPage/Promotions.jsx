import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carousalOne from '../../images/cashback.png';

const Img = styled.img`
  cursor: pointer;
  display: block;
  width: 250px;
  height: 250px;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
    backface-visibility: visible;
  }
`;

const Wrapper = styled.header`
  max-width: 100%;
  min-width: 100%;
  position: relative;
  margin: auto;
  margin-top: 60px;
  padding: 20px 0;
  background: #fff;
`;

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
};

function Promotions() {
  return (
    <Wrapper>
      <div style={{ background: "#171a29", padding: "30px 20px" }}>
        <div className="container my-3">
          <Slider {...settings}>
            <div className="col">
              <Img
                src={carousalOne}
                alt="promotion img"
              />
            </div>
            <div className="col">
              <Img
                src={carousalOne}
                alt="promotion img"
              />
            </div>
            <div className="col">
              <Img
                src={carousalOne}
                alt="promotion img"
              />
            </div>
            <div className="col">
              <Img
                src={carousalOne}
                alt="promotion img"
              />
            </div>
            <div className="col">
              <Img
                src={carousalOne}
                alt="promotion img"
              />
            </div>
            <div className="col">
              <Img
                src={carousalOne}
                alt="promotion img"
              />
            </div>
            <div className="col">
              <Img
                src={carousalOne}
                alt="promotion img"
              />
            </div>
            <div className="col">
              <Img
                src={carousalOne}
                alt="promotion img"
              />
            </div>
          </Slider>
        </div>
      </div>
    </Wrapper>
  );
}

export default Promotions;
