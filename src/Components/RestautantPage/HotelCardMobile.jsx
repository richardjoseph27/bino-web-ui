import React from "react";
import styled from "styled-components";
// import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import useMediaQuery from '@material-ui/core/useMediaQuery';

const Div = styled.div`
  font-family: sans-serif !important;
  overflow: hidden;
  // border: 0;
  width: 100%;
  // height: 90%;
  // border: 1px solid white;
  border-radius: 0px;
  div > span {
    margin-right: 12px;
  }
  &:hover {
    cursor: pointer;
    border: 1px solid #d3d5df;
    box-shadow: 0 4px 7px 0 rgba(218, 220, 230, 0.6);
  }
`;

const Tag = styled.p`
  font-weight: 300 !important;
  color: #686b78;
  font-size: 13px !important;
  margin-top: 3px !important;
`;

const Badge = styled.span`
  fontsize: 14px;
  padding: 5px;
  border-radius: 0px;
  background-color: ${(props) => {
    if (props.rating < 4) {
      return "#db7c38";
    } else {
      return "none";
    }
  }};
`;

const QuickView = styled.div`
  opacity: 0;
  &:hover {
    opacity: 1;
  }
`;

const Discount = styled.p`
  font-size: 14px !important;
  line-height: 1.2 !important;
  font-weight: 400 !important;
  color: #8a584b;
  margin-top: 15px;
`;

const HotelCardMobile = (props) => {
  const matches = useMediaQuery('(max-width:960px)');
  const history = useHistory();

  const { data } = props;

  const goTo = () => {
    localStorage.setItem("hotel", JSON.stringify(data));
    history.push("/MenuPage");
  };
  // console.log(data);
  return (
    <>
      {/* <div className="" style={{backgroundColor:'red',height:'20%'}}> */}
        <Div className="card mb-2 btn" onClick={goTo} style={{display:'flex' ,flexDirection:'row', justifyContent:'space-between', alignItems:'center', border: '0px solid #d3d5df',
    boxShadow: '0 4px 7px 0 rgba(218, 220, 230, 0.6)'}}>
          <div style={{height:'100%',width:'40%',display:'flex' ,flexDirection:'col'}}>
          <img
            src={data.img_url}
            alt="Restaurant Img"
            style={{
               width: "125px",
               height:'100px',
              borderRadius: "0px",
              alignSelf:'start'
            }}
          />
          </div>
          <div className="text-left" style={{display:'flex',flexDirection:'column',width:'55%',alignItems:'flex-start'}}>
            <h5 className="card-title" style={{ color: "#171a29" }}>
              {data.name}
              <br />
              <Tag>{data.cuisines.join(", ")}</Tag>
            </h5>
            <div
              className="card-text font-weight-normal"
              style={{ fontSize: "12px", width:'100%'}}
            >
              <Badge rating={data.rating} className="badge badge-success">
                <i className="fas fa-star mr-1"></i>
                {data.rating}
              </Badge>
              <span>&bull;</span>
              <span>{data.average_time} MINS</span>
              <span></span>
              <div>
              <span
                style={{
                  marginRight: "0px",
                }}
              >
                ₹{data.average_cost} FOR TWO
              </span></div>
              {/* <div className="dropdown-divider"></div>
              <Discount className="font-weight-normal">
                <img
                  src="discountBadge.svg"
                  alt="discountBadge"
                  width="15px"
                  style={{
                    marginRight: "10px",
                    marginBottom: "5px",
                  }}
                />
                10% off | Use BINOIT
              </Discount>
              <QuickView
                className="text-center font-weight-bold mb-0"
                style={{ color: "#5d8ed5" }}
              >
                <div className="dropdown-divider"></div>
                QUICK VIEW
              </QuickView> */}
            </div> 
          </div>
        </Div>
      {/* </div> */}
    </>
  );
};

export default HotelCardMobile;
