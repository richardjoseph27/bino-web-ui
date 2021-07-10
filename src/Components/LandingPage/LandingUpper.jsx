import React, { Component } from 'react';
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
} from './LandingStyledComponents';
import LoginDrawer from './Customer/LoginDrawer';
import RegisterDrawer from './Customer/RegisterDrawer';
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import mainLogo from '../../images/veg_logo.png';
// import logo from '../../images/logo.png';
// import logoTxt from '../../images/logo-text.png';
// import {LogoLanding} from './../LandingPage/LandingStyledComponents';
// import mainLogo from '../../images/temp.jpeg';
import logoV from '../../images/logo_vertical.png';

export class LandingUpper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            visible: false,
        };
    }

    handleInputChange = (e) => {
        // const history = useHistory();
        axios({
            method: 'get',
            url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${e.target.value}.json`,
            params: {
                access_token:
                    'pk.eyJ1IjoiZmFoZHNoYWlraCIsImEiOiJja2gzYzB3a3YwaXlsMnJvaWJ3ZDdiYzBpIn0.EC5-vAFFL-32D0ZCkCkQFg',
            },
        })
            .then((res) => {
                this.setState({
                    data: res.data.features,
                });
                // console.log(res);
                this.getLocation(res.data.features);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    getLocation = (data) => {
        data.map((item, i) => {
            if (i === 0) {
                var long = item.center[0];
                var lat = item.center[1];
                var temp = item.place_name.split(', ');
                var area = temp[0];
                temp.shift();
                var place_name = temp.join(', ');

                const Coordinates = {
                    lat,
                    long,
                    area,
                    place_name,
                };
                // console.log(Coordinates);
                localStorage.setItem(
                    'Coordinates',
                    JSON.stringify(Coordinates),
                );
            }
        });
    };

    goTo = () => {
        this.props.history.push('/Restaurants');
    };

    render() {
        return (
            <>
                <Div className='container-fluid'>
                    <div className='row'>
                        <div className='col-6  ml-auto'>
                            {/* LOGO */}
                            <InnerDiv className='container'>
                                <div className='row '>
                                    <div className='col-1 mr-auto align-self-start'>
                                        <Logo
                                            src={logoV}
                                            alt='logo'
                                        />
                                    </div>
                                    <div
                                        className='col-lg-2 btn btn-lg align-self-center font-weight-bold '
                                        style={{ textAlign: 'right' }}
                                    >
                                        <LoginDrawer />
                                        {/* Login */}
                                    </div>
                                    <div
                                        className='col-lg-3 btn btn-lg align-self-center font-weight-bold'
                                        style={{
                                            // border: '1px solid red',
                                            textAlign: 'left',
                                        }}
                                    >
                                        <RegisterDrawer />
                                    </div>
                                </div>
                            </InnerDiv>

                            
                            {/* SOME TEXT & TAG LINE */}
                            <InnerDiv className='container'>
                                <div className='row align-self-start row-cols-1'>
                                    <div className='col text-left text-wrap  mb-1'>
                                        <p className='h2 font-weight-bold'>
                                            {' '}
                                            Looking for nearby sellers ?{' '}
                                        </p>
                                    </div>
                                    <div className='col text-left text-wrap'>
                                        <p className='h4 text-muted'>
                                        Find local businesses, items and prices (Early Access)
                                        </p>
                                    </div>
                                </div>
                            </InnerDiv>

                            {/* SEARCH BAR */}
                            <div className='container'>
                                <Search
                                    className='row '
                                    style={{ border: '1px solid #fc8019' }}
                                >
                                    <div className='col-10 text-left align-self-center'>
                                        <div className='row' style={{width:'80%', flexWrap:'nowrap'}}>
                                            <Autocomplete
                                                className='col-lg-9 col-md-8 col-sm-8 mr-0  text-left form-control-plaintext form-control-lg ml-2  text-muted font-weight-bold'
                                                
                                                freeSolo
                                                id='free-solo-2-demo'
                                                disableClearable
                                                options={this.state.data.map(
                                                    (place) => place.place_name,
                                                )}
                                                renderInput={(params) => (
                                                    
                                                    <TextField
                                                        className='text-left form-control-plaintext form-control-lg text-muted font-weight-bold'
                                                        id='outlined-helperText'
                                                        placeholder='Enter Your delivery location'
                                                        onChange={
                                                            this
                                                                .handleInputChange
                                                        }
                                                        {...params}
                                                        InputProps={{
                                                            ...params.InputProps,
                                                            type: 'search',
                                                            disableUnderline: true
                                                        }}
                                                        // variant='outlined'
                                                        fullWidth
                                                        style={{
                                                            // border:'1px solid red',
                                                            fontSize: '20px',
                                                        }}
                                                    />
                                                )}
                                            />
                                            <button
                                                type='button'
                                                className='btn btn-sm align-self-center'
                                                style={{width: '30%'}}
                                            >
                                                Locate Me
                                            </button>
                                           
                                        </div>
                                    </div>
                                    <button
                                        type='button'
                                        className='col-2 btn btn-lg'
                                        onClick={this.goTo}
                                        style={{
                                            height: '100%',
                                            color: 'white',
                                            backgroundColor: '#fc8019',
                                            borderRadius: '0px',
                                        }}
                                    >
                                        <h6 className='font-weight-bold'>
                                            FIND SELLER
                                        </h6>
                                    </button>
                                   
                                </Search>
                            </div>
                        </div>
                        {/* MAIN IMAGE */}
                        <div className='col-5'>
                            <MainImg
                                src={mainLogo}
                                alt='bino main'
                            />
                        </div>
                    </div>

                    {/* MIDDLE PART */}
                    <CardContainer className='row justify-content-around pb-2' style={{backgroundColor:'white'}}>
                        <div className='row justify-content-around' style={{backgroundColor:'#2A3490'}}>
                        <div className='col-3 ml-2 mt-3 pb-2' >
                            <Card className='card'>
                                <CardImg
                                    src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf'
                                    className='card-img-top align-self-center'
                                    alt='No Minimum Order'
                                />
                                <div
                                    className='card-body'
                                    style={{ color: 'white' }}
                                >
                                    <p className='card-title h4 font-weight-bold mt-2'>
                                        No Minimum Order
                                    </p>
                                    <p className='card-text'>
                                        Order in for yourself or for the group,
                                        with no restrictions on order value
                                    </p>
                                </div>
                            </Card>
                        </div>
                        <div className='col-3 mt-3'>
                            <Card className='card'>
                                <CardImg
                                    src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy'
                                    className='card-img-top align-self-center'
                                    alt='Live Order Tracking'
                                />
                                <div
                                    className='card-body'
                                    style={{ color: 'white' }}
                                >
                                    <h5 className='card-title h4 font-weight-bold mt-2'>
                                        Live Order Tracking
                                    </h5>
                                    <p className='card-text'>
                                        Know where your order is at all times,
                                        from the shops to your doorstep
                                    </p>
                                </div>
                            </Card>
                        </div>
                        <div className='col-3 mr-2 mt-3'>
                            <Card className='card'>
                                <CardImg
                                    src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn'
                                    className='card-img-top align-self-center'
                                    alt='Lightning-Fast Delivery'
                                />
                                <div
                                    className='card-body'
                                    style={{ color: 'white' }}
                                >
                                    <h5 className='card-title h4 font-weight-bold mt-2'>
                                        Lightning-Fast Delivery
                                    </h5>
                                    <p className='card-text'>
                                        Experience Bino's superfast delivery
                                        for items delivered fresh & on time
                                    </p>
                                </div>
                            </Card>
                        </div>
                        </div>
                    </CardContainer>
                </Div>
            </>
        );
    }
}

export default withRouter(LandingUpper);
