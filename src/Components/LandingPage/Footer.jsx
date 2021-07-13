import React from "react";
import ssOne from '../../images/appSSMain.png';
import ssTwo from '../../images/appSSDetails.png';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import playStore from '../../images/playStore.png';
import appStore from '../../images/appStore.png';

function Footer() {
  const matches = useMediaQuery('(max-width:960px)');

  return (
    <div
      style={!matches ?{ fontFamily: "sans-serif", position: "relative" }:null}
      className={!matches ?"container-fluid":null}
    >
      <div className="row" style={matches ?{ display:'flex', flexDirection:'row'}:null}>
        <div className="col-lg-5 mt-0" style={matches ?{display:'flex', flexDirection:'column',width:'43%', marginLeft: "3%", marginRight:'0%' }:{marginLeft: "8%"}}>
          <div
            style={matches ?{
              fontSize: "30px",
              fontWeight: "600",
               width: "100%",
              lineHeight: "1",
              // letterSpacing: "-.45px",
              // padding: "5%",
              marginTop: "5%",
              fontFamily: "sans-serif",
              textAlign: "left",
            }:{
              fontSize: "40px",
              fontWeight: "600",
              width: "350px",
              lineHeight: "1",
              letterSpacing: "-.45px",
              padding: "5%",
              marginTop: "10%",
              fontFamily: "sans-serif",
              textAlign: "left",
            }}
          >
            Shops in your pocket
          </div>
          <div
            className="text-muted"
            style={matches?{
              fontSize: "20px",
              width: "100px",
              fontWeight: "300",
              marginLeft: "5%",
              marginTop: "5%",
              textAlign: "left",
            }: {
            fontSize: "20px",
            width: "400px",
            fontWeight: "300",
            marginLeft: "25px",
            paddingBottom: "60px",
            textAlign: "left",}}
          >
            Order from your favorite shops & sellers with the
            all-new Bino app.
          </div>
         <div className={matches? null:"row"} style={matches ?{marginTop:'2%', marginLeft: "0%", display:'flex',flexDirection:'column' ,height:'30%',justifyContent:'space-around' }: { marginLeft: "2%"}}>
            <div className={matches? null:"col-4"} style={matches? {display:'flex',padding:'1%',marginBottom:'2.5%'}:null}>
              <img
                src={playStore}
                style={matches ?{height:'40px'}:null}
                alt="googleplay"
                className={matches? null:"img-fluid"}
              />
            </div>
            <div className={matches? null:"col-4"} style={matches? {display:'flex',padding:'1%',}:null}>
              <img
                src={appStore}
                alt="apple"
                className={matches? null:"img-fluid mb-5"}
                style={matches ?{height:'40px'}:null}
              />
            </div>
          </div>
        </div>
        {matches &&<div className="row" style={matches? {display:'flex', width:'60%'}:null}>
        <div style={{display:'flex', flexDirection:'column',width:'100%'}}>
          <div style={{display:'flex', flexDirection:'column', marginLeft:'-20%', width:'100%'}}>
              <img
                src={ssOne}
                alt="image1"
                // style={{}}
                // className="img-fluid"
              /></div>
              <div style={{display:'flex', flexDirection:'column', marginRight:'-5%',}}>
              <img
                src={ssTwo}
                alt="image2"
                // style={{ bottom: 0, right: 0 }}
                // className="img-fluid"
              /></div>
            </div>
          </div>}
        {!matches &&<div className="col-lg-6">
          <div className="row">
            <div className="col-lg-6">
              <img
                src={ssOne}
                alt="image1"
                className="img-fluid"
              />
            </div>
            <div
              className="col-lg-6"
              style={{ position: "absolute", bottom: 0, right: 0 }}
            >
              <img
                src={ssTwo}
                alt="image2"
                className="img-fluid"
              />
            </div>
          </div>
        </div>}
       {matches &&  <div className="text-left text-white" style={{backgroundColor:'black'}}><h10>&#169;2021 Bino</h10></div>}
      </div>
    </div>
  );
}

export default Footer;
