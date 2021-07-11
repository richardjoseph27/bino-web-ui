import styled from "styled-components";

export const Div = styled.div`
  overflow: hidden;
  flex: 1;
  display: flex;
  flex-direction: column;
  justifu-content: center;
`;

export const Header = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin: 4em 2em 4em 2em;

  > div {
    flex: 3;
    display: flex;
    // justify-content: space-between;
    flex-direction: column;
  }
`;

export const CardContainer = styled.div`
  background-color: #2a3490;
`;

export const Card = styled.div`
  border: none;
  background-color: #2a3490;
`;

export const CardImg = styled.img`
  width: 128px;
  height: 206px;
`;

export const SignIn = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  //   align-items: center;
`;

export const InnerDiv = styled.div``;

export const Search = styled.div`
  //   border: 1px solid grey;
  overflow: visible;
  margin-top: 4%;
  //   height: 20px;
  flex: 1;
  display: flex;
  border: 1px solid #fc8019;
`;

export const City = styled.div`
  overflow: visible;
  margin-top: 4%;
  li {
    cursor: pointer;
  }
`;

export const MainImg = styled.img`
  height: 400px;
  width: 400px;
  flex: 1;
  @media only screen and (max-width: 1150px) {
    display: none;
  }
`;

export const Logo = styled.img`
  height: 110px;
  width: 150px;
  //   width: auto;
`;

export const LogoLanding = styled.img`
  height: 55px;
  width: auto;
  padding-right: 20px;
`;
