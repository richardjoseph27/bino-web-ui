import React from "react";
import styled from "styled-components";
import SortRestaurants from "./SortRestaurants";
import useMediaQuery from '@material-ui/core/useMediaQuery';

const Wrapper = styled.div`
  font-family: ProximaNova, Arial, Helvetica Neue, sans-serif;
  letter-spacing: 0;
  // background: #ec6f5b;
  min-height: calc(100vh - 368px);
  // overflow-x: hidden;
  // overflow-y: auto;
  position: relative;
  z-index: 2;
  padding-bottom: 60px;
`;

const Title = styled.div`
  height: 190px;
  background: inherit;
  color: #fff;
  font-size: 32px;
  font-weight: 600;
  margin: auto;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  text-transform: uppercase;
  cursor: pointer;
  contain: strict;
`;

const AllRestaurants = () => {
  const matches = useMediaQuery('(max-width:960px)');
  return (
    <Wrapper>
      <div className="container-fluid" style={{ width: matches ? "100%": '90%'}}>
        <div
          // className='col'
          style={{
            backgroundColor: "white",
          }}
        >
          {" "}
          <SortRestaurants filter={"all"} />
        </div>
        {/* </div> */}
      </div>
    </Wrapper>
  );
};

export default AllRestaurants;
