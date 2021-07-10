import React, { Component } from "react";
import Navigator from "../RestautantPage/Navigator";
import styled from "styled-components";
import RestaurantCards from "./RestaurantCards";
import Options from "./Options";
import Cart from "./Cart";

const MenuWrapper = styled.div`
  .flex-center {
    flex: 1;
    display: flex;
    justify-content: center;
  }

  @media only screen and (max-width: 600px) {
    .cart {
      display: none;
    }
  }
`;
const Wrapper = styled.div`
  font-family: sans-serif;
  margin-top: 6em;
  font-size: 14px;
  line-height: 1.2;
  color: #babbbf;

  .thin {
    background: #fafafb;
  }

  .flex-center {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .middlePart {
    background: #171a29;
    pointer-events: none;
    padding-top: 1em;
    padding-bottom: 1em;
  }

  p {
    margin-bottom: 1px;
    font-weight: bolder;
  }

  img {
    height: 165px;
    margin: 1em 0 1em 2em;
  }

  h1 {
    color: white;
    font-size: 32px;
    font-weight: 300;
  }

  h2 {
    font-size: 32px;
    letter-spacing: -0.3px;
    font-weight: bolder;
    color: #282c3f;
    line-height: 1.2;
    margin-bottom: 0px;
  }

  small {
    color: #686b78;
    margin-top: 0px;
    font-weight: bolder;
  }

  .offers {
    padding: 31px 40px 25px 25px;
  }

  .newOffer {
    font-size: 20px;
    font-weight: 500;
    color: #ffffff;
    background: #171a29;
    z-index: 8;
    display: inline-block;
    padding-right: 10px;
    padding-bottom: 10px;
    position: absolute;
    top: 34px;
    left: 19px;
  }

  .vendorInfo {
    margin-left: 3em;
    margin-right: 2em;
  }

  .extraInfo {
    padding-right: 2em;
    margin-right: 1em;
    // background: green;
  }

  @media only screen and (min-width: 550px) {
    .extraInfo:last-child {
      padding-right: 0;
      margin-right: 0;
      //   background: green;
    }
  }

  @media only screen and (max-width: 550px) {
    img {
      display: none;
    }
    .vendorInfo {
      margin: 0 1em 0 1em;
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .vendor-extra-info {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
    }

    .extraInfo {
      padding-right: 2em;
      margin-right: 2em;
      text-align: center;
      //   background: green;
    }

    .extraInfo:last-child {
      padding-right: 0;
      margin-right: 0;
    }
  }
`;

function Menupages() {
  const data = JSON.parse(localStorage.getItem("hotel"));
  console.log(data);
  return (
    <div>
      <Navigator />
      <Wrapper>
        <div className="thin">
          <div className="">
            <div className="col-12 my-1 text-left">
              <small
                className="text-muted"
                style={{
                  marginLeft: "15%",
                  position: "sticky",
                }}
              >
                Home / Bangalore / Kormangala / {data.name}
              </small>
            </div>
          </div>
        </div>
        <div className="middlePart flex-center">
          <img src={data.img_url} alt="restaurantImage" />
          <div className="vendorInfo text-left">
            <h1>{data.name}</h1>
            <div>{data.cuisines.join(", ")}</div>
            <div className="my-2">Koramangala,Bangalore</div>
            <div className="flex-center vendor-extra-info text-left mt-3">
              <div
                className="extraInfo"
                style={{
                  borderRight: "1px solid #babbbf",
                }}
              >
                <p>
                  <i className="fas fa-star mr-1"></i>
                  {data.rating}
                </p>
                <small>1000+ Ratings</small>
              </div>
              <div
                className="extraInfo"
                style={{
                  borderRight: "1px solid #babbbf",
                }}
              >
                <p>{data.average_time} mins</p>
                <small>Delivery Time</small>
              </div>
              <div
                className="extraInfo"
                // style={{
                //   borderRight: "1px solid #babbbf",
                // }}
              >
                <p>
                  <i className="fas fa-rupee-sign mr-1"></i>
                  {data.average_cost}
                </p>
                <small>Cost for Two</small>
              </div>
            </div>
          </div>
          {/* <div className='col-4 mt-4'>
                            <div className='row'>
                                <div className='newOffer'>OFFER</div>
                                <div
                                    className='col-lg-7 ml-4 mt-5 offers'
                                    style={{
                                        border: '1px solid white',
                                        height: '150px',
                                    }}
                                >
                                    <div className='row'>
                                        <div className='col-lg-12'>
                                            <p
                                                className='text-left ml-2 mt-2'
                                                style={{
                                                    fontSize: '13px',
                                                    opacity: 0.9,
                                                    lineHeight: 1.2,
                                                    fontWeight: 550,
                                                    color: '#ffffff',
                                                }}
                                            >
                                                50% off up to ₹100 on select
                                                items | Use code SPECIALS
                                            </p>
                                        </div>
                                        <div className='col-lg-12'>
                                            <p
                                                className='text-left ml-2 mt-2'
                                                style={{
                                                    fontSize: '13px',
                                                    opacity: 0.9,
                                                    lineHeight: 1.2,
                                                    fontWeight: 550,
                                                    color: '#ffffff',
                                                }}
                                            >
                                                40% off up to ₹80 + ₹30 PhonePe
                                                cashback | Use code SWIGGYIT
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>*/}
          {/* </div> */}
        </div>
      </Wrapper>
      <MenuWrapper>
        <div
          className="flex-center"
          style={{
            overflowX: "hidden",
          }}
        >
          {/* <div className="row"> */}
          {/* <div className="col-3 ml-5 mt-4">
            <Options />
          </div>{" "} */}
          <div
            // className="col-5"
            style={{
              maxHeight: "88.9vh",
              overflowY: "scroll",
              scrollbarWidth: "none",
              // backgroundColor: "yellow",
              marginLeft: "0 !important",
              // color: '#282c3f',
              // fontWeight: 'bolder',
            }}
          >
            {/* {data.categories.map((elem) => (
                            <React.Fragment>
                                <h2
                                    className='text-left ml-3 mt-4'
                                    style={{
                                        marginLeft: '1.4rem !important',
                                        color: '#282c3f',
                                        fontWeight: 'bolder',
                                    }}
                                >
                                    {elem}
                                </h2>
                                <small
                                    className='text-left'
                                    style={{ marginLeft: '-79.5%' }}
                                >
                                    23 ITEMS
                                </small>

                                {data.items
                                    //.filter((item) => item.category === elem)
                                    .map((item) => (
                                        <div className='col pt-1 text-left'>
                                            <RestaurantCards data={item} />
                                        </div>
                                    ))}
                            </React.Fragment>
                       ))} */}
            {data.items
              //.filter((item) => item.category === elem)
              .map((item) => (
                <div className="pt-1 text-left">
                  <RestaurantCards data={item} />
                </div>
              ))}
          </div>
          <div className="cart">
            <Cart />
          </div>
          {/* </div> */}
        </div>
      </MenuWrapper>
    </div>
  );
}

export default Menupages;
