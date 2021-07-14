import React, { useState } from "react";
import {
  Div,
  InnerDiv,
  MainImg,
  Logo,
  Search,
  City,
  CardContainer,
  Card,
  CardImg,
  Header,
  SignIn,
} from "./LandingStyledComponents";
import LoginDrawer from "./Customer/LoginDrawer";
import RegisterDrawer from "./Customer/RegisterDrawer";
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import axios from "axios";
import { withRouter } from "react-router-dom";
import mainLogo from "../../images/veg_logo.png";
// import logo from '../../images/logo.png';
// import logoTxt from '../../images/logo-text.png';
// import {LogoLanding} from './../LandingPage/LandingStyledComponents';
// import mainLogo from '../../images/temp.jpeg';
import logoV from "../../images/logo_vertical.png";
import tracking from '../../images/tracking.png';
import delivery from '../../images/delivery.png';
import bikeDelivery from '../../images/bikeDelivery.png';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const LandingUpper= (props) =>  {
  // constructor(props) {
    // super(props);
  //   // this.state = {
  //   //   data: [],
  //   //   visible: false,
  //   // };
  //   const [data, setData] = useState('');
  //   // const [visible, setVisible] = useState(false);
  // }

  const [data, setData] = useState([]);

  const handleInputChange = (e) => {
    // const history = useHistory();
    axios({
      method: "get",
      url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${e.target.value}.json`,
      params: {
        access_token:
          "pk.eyJ1IjoiZmFoZHNoYWlraCIsImEiOiJja2gzYzB3a3YwaXlsMnJvaWJ3ZDdiYzBpIn0.EC5-vAFFL-32D0ZCkCkQFg",
      },
    })
      .then((res) => {
        // this.setState({
        //   data: res.data.features,
        // });
        setData(res.data.features);
        // console.log(res);
        getLocation(res.data.features);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getLocation = (data) => {
    data.map((item, i) => {
      if (i === 0) {
        var long = item.center[0];
        var lat = item.center[1];
        var temp = item.place_name.split(", ");
        var area = temp[0];
        temp.shift();
        var place_name = temp.join(", ");

        const Coordinates = {
          lat,
          long,
          area,
          place_name,
        };
        // console.log(Coordinates);
        localStorage.setItem("Coordinates", JSON.stringify(Coordinates));
      }
    });
  };

  const goTo = () => {
    props.history.push("/Restaurants");
  };

    const matches = useMediaQuery('(max-width:960px)');

    return (
      <Div style={matches ? {display:'flex',width:'100%',alignItems:'center'}: null}>
        <Header className="" style={matches ? { margin:0, marginBottom:'2.5%' }: null}>
          <div className={matches ? null: "mx-10"} style={matches ? {marginLeft:'3%',marginRight:'3%'}:null}>
            {/* LOGO */}
            <SignIn style={matches ? {display:'flex', flexDirection:'row', alignItems:'center', paddingTop:10, paddingBottom:0}: {paddingTop:4, paddingBottom:8}}>
              <img src={logoV} alt="logo" style={matches ? {alignSelf:'start',height:'80px', width:'auto'}: {height: '110px', width: 'auto', paddingRight: '20px'}}/>
              <div style={matches ?{width:'50%',display:'flex', flexDirection:'column', alignItems:'flex-end', paddingBottom:'5%'}:null}>
                <div
                 className= {!matches ? "btn btn-lg font-weight-bold": null}
                 style={matches ? null: {textAlign: "left"}}>
                  <LoginDrawer />
                </div>
                <div
                  className= {!matches ? "btn btn-lg font-weight-bold": null}
                  style={matches ? null: {textAlign: "left"}}>
                  <RegisterDrawer />
                </div>
              </div>
            </SignIn>
            <div>
              {/* SOME TEXT & TAG LINE */}
              <div>
                <p className={matches? "text-left h5 text-muted font-weight-normal": "text-left h2 font-weight-bold"}>
                  {" "}
                  Looking for nearby sellers ?{" "}
                </p>

                <p className={matches? "text-left h6": "text-left h4 text-muted"}>
                  Find local businesses, items and prices (Early Access)
                </p>
              </div>

              {/* SEARCH BAR */}

              <Search style={matches ?{ height:'40%'}:null}>
                <div
                  style={matches ?{
                  display: "flex", padding: "5px", width:'80%'
                  }: { flex: 1, display: "flex", padding: "5px"}}
                >
                  <Autocomplete
                    style={{
                      flex: 10,
                      display: "flex",
                      padding: 0,
                      alignItems: "center",
                    }}
                    className="text-left form-control-plaintext ml-2  text-muted font-weight-bold"
                    freeSolo
                    id="free-solo-2-demo"
                    disableClearable
                    options={data.map((place) => place.place_name)}
                    renderInput={(params) => (
                      <TextField
                        className="text-left form-control-plaintext text-muted font-weight-bold"
                        id="outlined-helperText"
                        placeholder={matches ? "your location...":"Enter Your delivery location"}
                        onChange={handleInputChange}
                        {...params}
                        InputProps={{
                          ...params.InputProps,
                          type: "search",
                          disableUnderline: true,
                        }}
                        style={{
                          fontSize: "20px",
                        }}
                      />
                    )}
                  />
                  <button
                    type="button"
                    className={matches ? "btn btn-sm":"btn"}
                    style={{
                      flex: 1,
                    }}
                  >
                    Locate Me
                  </button>
                </div>
                <button
                  type="button"
                  className={matches ? "btn btn-sm":"btn btn-lg"}
                  onClick={goTo}
                  style={{
                    color: "white",
                    backgroundColor: "#fc8019",
                    borderRadius: "0px",
                  }}
                >{matches ?  <h8 className="font-weight-normal">FIND SELLER</h8> :  <h6 className="font-weight-bold">FIND SELLER</h6>}
                 
                </button>
              </Search>
            </div>
          </div>
          {/* MAIN IMAGE */}
          <MainImg src={mainLogo} alt="bino main" />
        </Header>

        {/* MIDDLE PART */}
        <CardContainer
          className={matches ? "row pb-2":"row justify-content-around pb-2"}
          style={{ backgroundColor: "white" }}
        >
          <div
            className={matches ? "row text-left h6":"row justify-content-around"}
            style={{ backgroundColor: "#2A3490" }}
          >
            <div className={matches ? "col-4 mt-3" : "col-3 ml-2 mt-3 pb-2"}>
              <Card className="card">
                <CardImg
                  src={delivery}
                  className="card-img-top align-self-center"
                  alt="No Minimum Order"
                />
                <div className="card-body" style={{ color: "white" }}>
                  <p className="card-title h4 font-weight-bold mt-2">
                    No Minimum Order
                  </p>
                  <p className="card-text">
                    Order in for yourself or for the group, with no restrictions
                    on order value
                  </p>
                </div>
              </Card>
            </div>
            <div className={matches ? "col-4 mt-3" : "col-3 mt-3"}>
              <Card className="card">
                <CardImg
                  src={bikeDelivery}
                  className="card-img-top align-self-center"
                  alt="Live Order Tracking"
                />
                <div className="card-body" style={{ color: "white" }}>
                  <h10 className="card-title h4 font-weight-bold mt-2">
                    Live Order Tracking
                  </h10>
                  <p className="card-text">
                    Know where your order is at all times, from the shops to
                    your doorstep
                  </p>
                </div>
              </Card>
            </div>
            <div className={matches ? "col-4 mt-3" : "col-2 mr-2 mt-3"}>
              <Card className="card" >
                <CardImg
                  src={tracking}
                  className="card-img-top align-self-center"
                  alt="Lightning-Fast Delivery"
                />
                <div className="card-body" style={{ color: "white" }}>
                  <h5 className="card-title h4 font-weight-bold mt-2">
                    Lightning-Fast Delivery
                  </h5>
                  <p className="card-text">
                    Experience Bino's superfast delivery for items delivered
                    fresh & on time
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </CardContainer>
      </Div>
    );
  }
export default withRouter(LandingUpper);
