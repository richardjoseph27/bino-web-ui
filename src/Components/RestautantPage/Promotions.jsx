import React from "react";
import styled from "styled-components";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import useMediaQuery from '@material-ui/core/useMediaQuery';

const img = styled.img`
  cursor: pointer;
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
  autoPlay: true,
  infinite: true,
  animationDuration: 1000,
  disableDotsControls: true,
  disableButtonsControls: true,
  controlsStrategy: "responsive",
  responsive: {
    300: {
      items: 1,
    },
    765: {
      items: 2,
    },
    990: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  },
};

function Promotions() {
  const matches = useMediaQuery('(max-width:960px)');
  const styles = {
    carousalImage: { width: matches ? "150px" : "250px",  height: matches ? "150px" : "250px" }
  };

  return (
    <Wrapper>
      <div style={{ background: "#171a29", padding: matches ? "10px 10px" : "30px 20px"}}>
        <div className="container">
          <AliceCarousel
            {...settings}
            items={[
              <img
                style={styles.carousalImage}
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/jkcbdbr3qdjuzgjepkjx"
                alt="promotion img"
              />,
              <img
              style={styles.carousalImage}
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/xax7qfs6dbmzdmzxq1dh"
                alt="promotion img"
              />,
              <img
              style={styles.carousalImage}
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/c59djn2nskqlf0ork6wc"
                alt="promotion img"
              />,
              <img
              style={styles.carousalImage}
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/qd0mwkv1mk3bxyy3x5fm"
                alt="promotion img"
              />,
              <img
              style={styles.carousalImage}
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/rl8zesrkte88twzgbma5"
                alt="promotion img"
              />,
              <img
              style={styles.carousalImage}
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/lgxbfmjfi9ba7sqbliek"
                alt="promotion img"
              />,
              <img
              style={styles.carousalImage}
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/ztpd5q9awnmmnefczn5x"
                alt="promotion img"
              />,
              // <Img
              //   src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/jcjcvebiczqe5jr2vijo"
              //   alt="promotion img"
              // />,
              // <Img
              //   src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rs4krvosxjt6i5wyefvy"
              //   alt="promotion img"
              // />,
              // <Img
              //   src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/kmewp8efed0ev7yvfyx6"
              //   alt="promotion img"
              // />,
              // <Img
              //   src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/marketing-dashboard/carousel/e8qsywpath9uli7tnikc"
              //   alt="promotion img"
              // />,
              // <Img
              //   src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/marketing-dashboard/carousel/bmp2yqaaqouptllxmkei"
              //   alt="promotion img"
              // />,
            ]}
          />
        </div>
      </div>
    </Wrapper>
  );
}

export default Promotions;


