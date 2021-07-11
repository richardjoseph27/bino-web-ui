import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  font-family: sans-serif;
  height: 280px;
  width: 280px;

  h6 {
    font-weight: bolder;
    color: #8a838c;
    font-size: 2em;
  }
  p {
    color: #93959f;
    font-size: 1.2em;
    font-weight: 300;
    max-width: 218px;
  }

  @media only screen and (max-width: 850px) {
    height: 200px;
    width: 200px;

    h6 {
      font-size: 1.5em;
    }
    p {
      font-size: 0.9em;
    }
  }
`;

function EmptyCart() {
  return (
    <Wrapper>
      {/* <div className=""> */}
      {/* <div className=""> */}
      {/* <div className=""> */}
      <h6 className="mb-4 mt-4">Cart Empty</h6>
      <img
        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_480/Cart_empty_-_menu_2x_ejjkf2"
        alt="empty cart"
        className="w-100"
      />
      <p className="mt-4 text-left">
        Good food is always cooking! Go ahead, order some yummy items from the
        menu.
      </p>
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}
    </Wrapper>
  );
}

export default EmptyCart;
