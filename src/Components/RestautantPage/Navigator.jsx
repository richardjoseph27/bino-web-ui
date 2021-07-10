import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Login from './Customer/Login';
import Location from './Customer/Location';
import { Nav, NavItem} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {LogoLanding} from './../LandingPage/LandingStyledComponents';
import logoV from '../../images/logo_vertical.png';

const tabs = [{
    route: "/home",
    icon: "fas fa-home",
    label: "Home"
  },{
    route: "/search",
    icon: 'fas fa-search',
    label: "Search"
  },{
    route: "/login",
    icon: 'fas fa-user-circle',
    label: "Login"
  }]

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

    .list-inline {
        display: flex;
        width: 100%;
        // background-color: lightblue;
        margin-left: 10%;
        align-items: center;
        // justify-content: space-between;
        font-size: 16px;
        font-weight: 300;
        line-height: 1.2;
        color: #686b78;
        cursor: pointer;
        border-radius: 0px;
        &:hover {
            border-bottom: 1px solid black;
        }
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

    .navbar {
        border-bottom: solid 1px #EBEBEB;
      }
      .bottom-tab-nav {
        border-top: solid 1px #EBEBEB;
      }
      .bottom-nav-link {
        color: #55575b;
      }
      .bottom-nav-link.active {
        color: #922c88;
      }
      .bottom-tab-label {
        font-size: 12px;
      }

`;

const nav = styled.nav`
.navbar {
    border-bottom: solid 1px #EBEBEB;
  }
  .bottom-tab-nav {
    border-top: solid 1px #EBEBEB;
  }
  .bottom-nav-link {
    color: #55575b;
  }
  .bottom-nav-link.active {
    color: #922c88;
  }
  .bottom-tab-label {
    font-size: 12px;
  }
`;

const Address = styled.button`
    border: 0px;
    margin: auto 0px;
    background: #fff;
    color: #686b78;
    font-size: 14px;
    font-weight: 300;
    line-height: 1.2;
    letter-spacing: 0;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    &:hover {
        cursor: pointer;
        color: #fc8019;
    }
`;

const SVG = styled.svg`
    stroke: currentColor;
    fill: #fc8019;
    stroke-width: 0;
    &:hover {
        transform: scale(1.05);
    }
`;

function CustomerName({ name }) {
    if (name.length < 2) {
        return <Login />;
    } else {
        return (
            <Nav className="ml-auto">
            <NavItem>
            <NavLink
                to='/my-account'
                type='button'
                className='nav-link btn btn-lg align-self-center text-capitalize'
            >
                <i className='fa fa-user mr-1'></i> {name}
            </NavLink>
            </NavItem>
            </Nav>
        );
    }
}

function Navigator() {
    const [name, setName] = useState('');
    const [placeName, setPlaceName] = useState('');

    useEffect(() => {
        if (localStorage.getItem('customerData') == null) {
            setName('');
        } else {
            setName(JSON.parse(localStorage.getItem('customerData')).name);
        }

        if (localStorage.getItem('Coordinates') == null) {
            setPlaceName('Karnatak, India');
        } else {
            setPlaceName(
                JSON.parse(localStorage.getItem('Coordinates')).place_name,
            );
        }
    }, []);
    console.log(name);

    return (
        <Wrapper className='container-fluid shadow'>
            <div className='row'>
                <div className='col-lg-6  mt-0'>
                    <div className='logo-container-fluid'>
                        <ul className='list-inline'>
                            <li className='list-inline-item'>
                            <Nav className="ml-auto">
                                <NavItem>
                                <NavLink
                                    to='/Restaurants'
                                    type='button'
                                >
                                        <LogoLanding
                                            src={logoV}
                                            alt='logo'
                                        /> 
                                </NavLink>
                                </NavItem>
                                </Nav>
                            </li>
                            <li className='list-inline-item '>
                                <Location />
                            </li>
                            <Address
                                className='list-inline-item text-truncate text-capitalize'
                                style={{ maxWidth: '230px' }}
                            >
                                {/* Karnatak, India */}
                                {placeName}
                            </Address>
                            <li className='list-inline-item'>
                                <button type='button' className='btn btn-sm'>
                                    <i
                                        className='fas fa-chevron-down'
                                        style={{ color: '#fc8019' }}
                                    ></i>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div>
                        <nav className='d-flex' style={{alignItems:'center'}}> 
                            <div className='nav-item '>
                            <Nav className="ml-auto">
                                <NavItem>
                                <NavLink 
                                 to='/Restaurants'
                                 type='button'
                                className='nav-link'>
                                    <i className='fa fa-search'></i> Search
                                </NavLink>
                                </NavItem>
                                </Nav>
                            </div>
                            <div className='nav-item'>
                            <Nav className="ml-auto">
                             <NavItem>
                                <NavLink 
                                 to='/Restaurants'
                                 type='button'
                                className='nav-link'>
                                    <img
                                        src='percentage.svg'
                                        alt='percentage'
                                        width='20px'
                                        style={{
                                            marginBottom: '5px',
                                        }}
                                    />{' '}
                                    Offer
                                </NavLink>
                                </NavItem>
                                 </Nav>
                            </div>
                            <div className='nav-item'>
                            <Nav className="ml-auto">
                                    <NavItem>
                                        <NavLink 
                                        to='/Restaurants'
                                        type='button'
                                        
                                        className='nav-link'>
                                        <i className='fa fa-support'></i> Help
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </div>
                            <div className='nav-item text-capitalize'>
                                
                                <CustomerName name={name} />
                            </div>
                            
                            <div className='nav-item'>
                            <Nav className="ml-auto">
                                    <NavItem>
                                    <button
                                    type='button'
                                    className='btn'
                                    data-toggle='modal'
                                    data-target='#CartModal'
                                    className='nav-link'
                                    style={{
                                        border: 'none',
                                        background: 'white',
                                    }}
                                >
                                    <i className='fa fa-shopping-cart'></i> Cart
                                </button>
                                    </NavItem>
                                </Nav>
                            </div>
                        </nav>
                    </div>
                </div>
                <nav className="navbar fixed-bottom navbar-light d-block d-lg-none bottom-tab-nav" role="navigation">
                    <Nav className="w-100">
                    <div className=" d-flex flex-row justify-content-around w-100">
                        {
                        tabs.map((tab, index) =>(
                            <NavItem key={`tab-${index}`}>
                            <NavLink to={tab.route} className="nav-link bottom-nav-link" activeClassName="active">
                                <div className="row d-flex flex-column justify-content-center align-items-center">
                                <i className={tab.icon} ></i>
                                <div className="bottom-tab-label">{tab.label}</div>
                                </div>
                            </NavLink>
                            </NavItem>
                        ))
                        }
                    </div>
                    </Nav>
                </nav>
            </div>
        </Wrapper>
    );
}

export default Navigator;
