import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { handleCart, handledecrement, handleIncrement } from "./Redux/action";

const Item = styled.div`
  display: flex;
  align-items: center;
  flex: 1.8;
`;

const QtyPrice = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

const Wrapper = styled.div`
  font-family: sans-serif;
  display: flex;
  // flex: 1;
  align-items: center;

  h4 {
    font-size: 25px;
    font-weight: bolder;
    text-align: left;
    padding-top: 20px;
    color: #282c3f;
    margin-bottom: 0px;
  }

  p {
    margin-top: 0px;
    margin-bottom: 4px;
    font-size: 13px;
    font-weight: bold;
    margin-left: 2px;
  }

  .veg1 {
    border-radius: 50%;
    margin-top: 0;
    width: 10px;
    height: 10px;
    background: green;
    margin-left: 0;
  }

  .nonVeg1 {
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background: red;
    margin-top: 0;
    margin-left: 0;
  }

  small {
    font-weight: normal !important;
  }

  .buttoncart1 {
    margin-left: 0;
    margin-right: 0;
    background: white;
    padding: 0;
    color: green;
    border: 1px solid white !important;
    width: calc(1ch + 18px);
  }
  .qty {
    display: flex;
  }
  .price {
    font-weight: normal;
    width: calc(1ch + 52px);
  }

  .vegNonVegWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid red;
  }

  .vegBorder {
    border: 1px solid green;
  }
`;

// const VegNonVegWrapper = styled.div`
//   width: 15px;
//   height: 15px;
//   display: flex;
//   align-items: center;
//   justifycontent: center;
//   // border: 1px solid green;

//   :has(> div) {
//     border: 1px solid green;
//   }

//   :has(> div[className="nonVeg"]) {
//     border: 1px solid red;
//   }
// `;

function Carditems(props) {
  const state = useSelector((state) => state);
  const { data } = props;
  const dispatch = useDispatch();

  const handleInc = () => {
    dispatch(handleIncrement(data._id));
  };

  const handleDec = () => {
    dispatch(handledecrement(data._id));
  };

  return (
    <Wrapper className="mb-3">
      <Item className="">
        {data?.veg ? (
          <div className="vegNonVegWrapper vegBorder">
            <div className="m-1 veg1"></div>
          </div>
        ) : (
          <div className="vegNonVegWrapper">
            <div className="m-1 nonVeg1"></div>
          </div>
        )}

        <div className="mx-2">
          <small className="">{data?.name}</small>
        </div>
      </Item>
      <QtyPrice className="pr-0 pl-0">
        <div className="qty border py-1">
          <button
            type="button"
            className="buttoncart1"
            style={{ border: "1px solid white" }}
            onClick={() => handleDec()}
          >
            -
          </button>
          <button className="buttoncart1">{data?.qty}</button>
          <button className="buttoncart1 " onClick={() => handleInc()}>
            +
          </button>
        </div>
        <small className="price ml-2"> ₹ {data?.qty * data?.price}</small>
      </QtyPrice>
    </Wrapper>
  );
}

export default Carditems;
