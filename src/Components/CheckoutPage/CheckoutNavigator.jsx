import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Login from '../RestautantPage/Customer/Login';
import {LogoLanding} from './../LandingPage/LandingStyledComponents';
import logoV from '../../images/logo_vertical.png';

const Wrapper = styled.div`
    overflow: hidden;
    padding: 10px 0;
    // background: #fff;
    // box-shadow: 2px 0px 5px #e3e3e3;
    margin: 0;
    box-sizzing: border-box;
    font-family: sans-serif;

    .logo-container {
        padding: 10px;
    }

    .nav-item {
        padding: 10px 10px;
        .nav-link {
            text-decoration: none;
            color: #333;
            font-size: 1.1rem;
            font-weight: 500;
            &:hover {
                color: #fc8019;
            }
        }
    }
    box-shadow: 0 15px 40px -20px rgba(40, 44, 63, 0.15);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    background: #fff;
    z-index: 1000;
`;

const SVG = styled.svg`
    stroke: currentColor;
    fill: #fc8019;
    stroke-width: 0;
    &:hover {
        transform: scale(1.05);
    }
`;

const Li = styled.li`
    font-weight: 700;
    color: #3d4152;
    text-transform: uppercase;
    font-size: 14px;
`;

const Name = styled.div`
    // border: 1px solid red;
    font-size: 16px !important;
    font-weight: 500 !important;
    color: red !important;
`;

function CustomerName({ name }) {
    if (name.length < 2) {
        return <Login />;
    } else {
        return (
            <Link
                to='/my-account'
                type='button'
                className='nav-link btn btn-lg align-self-center text-capitalize'
            >
                <i className='fa fa-user mr-1'></i> {name}
            </Link>
        );
    }
}

function CheckoutNavigator() {
    const [name, setName] = useState('');

    useEffect(() => {
        if (localStorage.getItem('customerData') == null) {
            setName('');
        } else {
            setName(JSON.parse(localStorage.getItem('customerData')).name);
        }
    }, []);
    // console.log(name);

    return (
        <Wrapper className='container-fluid shadow'>
            <div className='row'>
                <div className='col-4  mt-0'>
                    <div className='logo-container-fluid'>
                        <ul className='list-inline'>
                            <li className='list-inline-item'>
                                <Link
                                    to='/Restaurants'
                                    type='button'
                                    className='btn btn-lg ml-5'
                                >
                                    <LogoLanding
                                            src={logoV}
                                            alt='logo'
                                        />
                                </Link>
                            </li>
                            <Li className='list-inline-item '>
                                Secure Checkout
                            </Li>
                        </ul>
                    </div>
                </div>
                <div className='col-8'>
                    <div
                        className='container'
                        style={{
                            width: '35%',
                            justifyContent: 'right',
                            float: 'right',
                        }}
                    >
                        <nav className='d-flex '>
                            <Name className='nav-item'>
                                <Link className='nav-link'>
                                    <i className='fa fa-support'></i> Help
                                </Link>
                            </Name>
                            <Name className='nav-item '>
                                <CustomerName name={name} />
                            </Name>
                        </nav>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default CheckoutNavigator;
