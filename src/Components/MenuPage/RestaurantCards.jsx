import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { handleCart, handledecrement, handleIncrement } from "./Redux/action";

const Wrapper = styled.div`
  overflow: hidden;
  font-family: ProximaNova, Arial, Helvetica Neue, sans-serif;
  width: 35vw;
  flex: 1;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px solid #d4d5d9;
  padding-top: 2em;
  padding-bottom: 2em;

  .price {
    margin-top: 1em;
  }

  small {
    color: #686b78;
    font-weight: bolder;
  }

  .veg {
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background: green;
  }

  .nonVeg {
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background: red;
  }

  h4 {
    color: #3e4152;
    margin-top: 1em;
    font-weight: bold;
    font-size: 1.22rem;
    word-break: break-word;
  }

  img {
    width: 150px;
    height: 130px;
    border-radius: 15px;
  }

  .addCart {
    font-size: 0.9rem;
    font-weight: 600;
    margin-top: -1.5em;
    background: white;
    border: 1.5px solid #e9eaec;
  }

  .buttoncart {
    margin-left: 0;
    margin-right: 0;
    border: none;
    background: white;
    padding: 5%;
    color: green;
  }

  .menu-text {
    flex: 1;
  }

  .flex-column {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .menu-image {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  span {
    color: #979797;
    font-size: 0.9em;
  }

  @media only screen and (max-width: 1150px) {
    width: 55vw;
  }

  @media only screen and (max-width: 600px) {
    width: 90vw;
  }
`;

function RestaurantCards(props) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { cart } = state;
  const [qty, setqty] = useState(0);
  const { data } = props;
  const productInCart = cart.find((item) => item._id === data._id) || {
    qty: 0,
  };

  const handleAdd = (data) => {
    setqty(qty + 1);
    dispatch(handleCart(data));
  };

  const handleInc = () => {
    setqty(qty + 1);
    dispatch(handleIncrement(data._id));
  };

  const handleDec = () => {
    setqty(qty - 1);
    dispatch(handledecrement(data._id));
  };

  return (
    <Wrapper className={""}>
      <div className="flex-column menu-text">
        {data.veg ? (
          <div
            className="p-1"
            style={{
              border: "1px solid green",
              width: "20px",
            }}
          >
            <div className="veg"></div>
          </div>
        ) : (
          <div
            className="p-1"
            style={{
              border: "1px solid red",
              width: "20px",
            }}
          >
            <div className="nonVeg"></div>
          </div>
        )}

        <div className="">
          <h4>{data.name}</h4>
          <div className="price">
            <small>
              <i className="fas fa-rupee-sign mr-1"></i>
              {data.price}
            </small>
          </div>
          <br />
          <small>{data.description}</small>
          <span>
            {
              "Add some item description so that the contents look better. Some more text goes here."
            }
          </span>
        </div>
      </div>
      <div className="menu-image position-relative">
        <img src={data.img_url} alt="item" className="p-2" />
        <div>
          {productInCart && productInCart.qty === 0 ? (
            <div
              className="addCart mx-4 text-center py-2 text-success"
              onClick={() => handleAdd(data)}
            >
              ADD
            </div>
          ) : (
            <div className="addCart">
              <button className="buttoncart" onClick={() => handleDec()}>
                -
              </button>
              <button className="buttoncart">
                {productInCart && productInCart.qty}
              </button>
              <button className="buttoncart" onClick={() => handleInc()}>
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
}

export default RestaurantCards;
