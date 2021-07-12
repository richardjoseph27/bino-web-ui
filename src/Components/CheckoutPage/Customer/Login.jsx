import React from 'react';
import styled from 'styled-components';
import avatar from '../../../images/avatar.svg';
import checkmark from '../../../images/checkmark.svg';
import line from '../../../images/line.svg';

const Wrapper = styled.div`
    font-family: system-ui !important;
    letter-spacing: -0.3px;
    line-height: 1.2;
    background: #fff;
    margin-bottom: 20px;
    margin-top: 30px;
    padding-top: 35px;
    // padding-right: 40px;
    padding-bottom: 39px;
    // padding-left: 40px;
`;

const Title = styled.p`
    font-size: 32px;
    font-weight: 620;
    color: #282c3f;
    margin-bottom: 0px;
`;

const Logo = styled.div`
    left: -5%;
    width: 0px;
    height: 0px;
    background-color: #282c3f;
    box-shadow: 0 3px 5px 0 rgba(40, 44, 63, 0.4);
    top: -10px;
    padding: 0px !important;
`;

const Tick = styled.img`
    margin-left: 15px;
    height: 20px;
    width: 20px;
    vertical-align: inherit;
`;

const Avatar = styled.img`
    height: 50px;
    width: 50px;
    vertical-align: inherit;
    margin-radius: 0px;
    box-shadow: 0 3px 5px 0 rgba(40, 44, 63, 0.4);
`;

const Info = styled.p`
    margin-top: 35px;
    margin-bottom: 0px;
    font-weight: 500;
    line-height: 1.12;
    font-size: 18px;
    color: #282c3f;
    text-transform: capitalize;
`;

const Login = () => {
    const data = JSON.parse(localStorage.getItem('customerData'));
    return (
        <>
            <Wrapper className='container'>
                <div className='row'>
                    <Logo className='col-1 mr-50'>
                        <Avatar src={avatar} alt='avatar' />
                    </Logo>
                    <div className='col-11'>
                        <div className='row row-cols-1'>
                            <div className='col'>
                                <Title>
                                    Logged in checkout
                                    <Tick
                                        src={checkmark}
                                        alt='Check'
                                    />
                                </Title>
                            </div>
                            <div className='col'>
                                <Info>
                                    {' '}
                                    {'Richard'}
                                    {/* {data.name} */}
                                    {' '}
                                    <img
                                        src={line}
                                        alt='line'
                                        height='13px'
                                        style={{ verticalAlign: 'inherit' }}
                                    />{' '}
                                    {'9623311498'}
                                    {/* {data.phoneNumber} */}
                                </Info>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </>
    );
};

export default Login;
