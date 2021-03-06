import React, { useState, useEffect } from 'react';
import CheckoutNavigator from './CheckoutNavigator';
import styled from 'styled-components';
import Login from './Customer/Login';
import Address from './Customer/Address';
import Payment from './Customer/Payment';
import Orders from './Customer/Orders';
import MainFooter from '../LandingPage/MainFooter';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const Wrapper = styled.div`
    overflow: hidden;
    font-family: sans-serif;
    min-height: 100%;
    background: #e9ecee;
    margin-top: 5.2%;
    padding-bottom: 10%;
    font-size: 14px;
    line-height: 1.2;
    min-height: 100%;
    div {
        // border: 1px solid red;
    }
`;

const dLine=styled.div`
    // position: absolute;
    border-left: 1px dashed #282c3f;
    // top: 35px;
    // left: -10px;
    // bottom: -57px;
    //style={{borderLeft: '1px dashed #282c3f'}}
`;

const CheckoutPage = (props) => {
    // console.log(props.location.isAddrSelected);
    const [isAddrSelected, setIsAddrSelected] = useState(false);
    const matches = useMediaQuery('(max-width:960px)');

    useEffect(() => {
        setIsAddrSelected(props.location.isAddrSelected || false);
    }, [props.location.isAddrSelected]);

    return (
        <>
            <CheckoutNavigator />
            <Wrapper className='container-fluid'>
                <div className='container'>
                    <div className='row' >
                        <div className='col-8'>
                            <div className='row row-cols-1 text-left' >
                                <div className='col'>
                                    <Login />
                                </div>
                                <div className='col'>
                                    <Address flag={isAddrSelected} />
                                </div>
                                {isAddrSelected ? (
                                    <div className='col'>
                                        <Payment />
                                    </div>
                                ) : (
                                    <div></div>
                                )}
                            </div>
                        </div>
                        <div className='col-4'>
                            <Orders />
                        </div>
                    </div>
                </div>
            </Wrapper>
            {!matches &&<MainFooter />}
        </>
    );
};
export default CheckoutPage;
