import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import "firebase/auth";
import firebase from 'firebase';
import { CustomInputField } from '../../../CommonComponents';

const Div = styled.div`
    font-family: sans-serif;
`;

const useStyles = makeStyles({
    list: {
        width: 450,
    },
    fullList: {
        width: 'auto',
    },
});

export default function RegisterDrawer() {
    const classes = useStyles();
    const [phNo, setPhNo] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [state, setState] = React.useState({
        bottom: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            style={{ right: 0 }}
            role='presentation'
        >
            <Div className='container mt-3' style={{ width: '100%' }}>
                <Div className='row'>
                    <Div className='col text-left'>
                        <button
                            type='button'
                            className='btn btn-sm'
                            onClick={toggleDrawer(anchor, false)}
                        >
                            <i className='fas fa-times fa-lg'></i>
                        </button>
                        <div className='container mt-2'>
                            <div className='row'>
                                <div className='col-lg-6 ml-3'>
                                    <h3>Sign up</h3>
                                    <small>
                                        or{' '}
                                        <b style={{ color: '#fc8019' }}>
                                            login to your account
                                        </b>
                                    </small>
                                </div>
                                {/* <div className='col-lg-4 ml-3'>
                                    <img
                                        className='img-fluid'
                                        style={{
                                            width: '105px',
                                            height: '100px',
                                            borderRadius: '50%',
                                            fload: 'right',
                                        }}
                                        src='TODO'
                                        alt='logo of wrap'
                                    />
                                </div> */}
                            </div>
                            <div className='container-fluid mt-3'>
                                <div className='row'>
                                    <CustomInputField label='Phone Number' onChange={(id, value) => setPhNo(value)}/>
                                    <CustomInputField label={'Name'} onChange={(id,value) => setName(value)}/>
                                    <CustomInputField label='Email' onChange={(id,value) => setEmail(value)}/>
                                    <div className='col-lg-12 mt-3'>
                                        <small
                                            style={{
                                                color: '#5d8ed5',
                                                marginLeft: '1%',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            Have a referral code
                                        </small>
                                    </div>

                                    <div className='col-lg-12 text-center'>
                                        <OtpDrawer
                                            phoneNumber={phNo}
                                            name={name}
                                            email={email}
                                            password={password}
                                            setState={setState}
                                            state={state}
                                        />
                                    </div>
                                    <div>
                                        <small
                                            style={{
                                                fontSize: '9px',
                                                fontWeight: 'bold',
                                            }}
                                            className='text-muted mx-3'
                                        >
                                            By creating an account, I accept the{' '}
                                            <small
                                                style={{
                                                    color: '#5d8ed5',
                                                    fontSize: '9px',
                                                    fontWeight: 'bold',
                                                }}
                                            >
                                                Terms & Conditions
                                            </small>
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Div>
                </Div>
            </Div>
        </div>
    );

    return (
        <div>
            <button
                type='button'
                className=' btn btn-lg align-self-center font-weight-bold'
                onClick={toggleDrawer('right', true)}
                style={{
                    borderRadius: '0px',
                    color: 'white',
                    backgroundColor: '#2A3490'
                }}
            >
                {'Sign up'}
            </button>
            <Drawer
                anchor={'right'}
                open={state['right']}
                onClose={toggleDrawer('right', false)}
            >
                {list('right')}
            </Drawer>
        </div>
    );
}

function OtpDrawer({ phoneNumber, name, email, password, setState, state }) {
    const history = useHistory();
    const [otp, setOtp] = useState('');
    const [verificationID, setVerificationID] = useState('');
    const classes = useStyles();
    const [state2, setState2] = React.useState({
        bottom: false,
    });

    const toggleOTPDrawer = (anchor, open) => (event) => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState2({ ...state2, [anchor]: open });
    };

    const handleVerify = () => {

        verificationID.confirm(otp).then((result) => {
            // User signed in successfully.
            setState2({ ...state2, right: false });
            setState({ ...state, right: false });
            // localStorage.setItem('customerData', JSON.stringify(res.data));
            history.push('/Restaurants');
            const user = result.user;
            alert('success');
            // ...
          }).catch((error) => {
            // User couldn't sign in (bad verification code?)
            // ...
            alert('failure');
          });
        
        // firebase.auth.PhoneAuthProvider.credential(verificationID, otp)
        // .then(function(phoneCredential) {
        //     console.log("**********");
        // console.log(phoneCredential);
        //     // return firebase.auth().signInWithCredential(phoneCredential);
        // })
        // .then((res)=>{
        //     alert("verified");
        // })

        /*const SERVER_URL = 'https://boni.co.in';
        axios
            .post(
                `${process.env.REACT_APP_API_URL}/api/customer/register/verify`,
                {
                    otp: otp,
                    name: name,
                    email: email,
                    password: password,
                    phoneNumber: phoneNumber,
                },
            )
            .then((res) => {
                // console.log(res.data);
                // alert('Registeration Successfull');
                setState2({ ...state2, right: false });
                setState({ ...state, right: false });
                localStorage.setItem('customerData', JSON.stringify(res.data));
                history.push('/Restaurants');
            })
            .catch((err) => {
                console.log(err.response.data);
                alert(err.response.data);
            });*/
    };

    const getOtp = () => {

        const phoneNumberInput = '+919623311497';//phoneNumber;
        var appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
        
        firebase.auth().signInWithPhoneNumber(phoneNumberInput, appVerifier)
            .then((confirmationResult) => {
            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
            window.confirmationResult = confirmationResult;
            setVerificationID(confirmationResult);
            setState2({ ...state2, right: true });
            // ...
            }).catch((error) => {
            // Error; SMS not sent
            // ...
            });
                
                
        // 'recaptcha-container' is the ID of an element in the DOM.
        // var applicationVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
        // var provider = new firebase.auth.PhoneAuthProvider();
        // provider.verifyPhoneNumber('+919623311497', applicationVerifier)

        // .then((res) => {
        //     setVerificationID(res);
        //     setState2({ ...state2, right: true });
        // })

            //.then(function(verificationId) {
            //   var verificationCode = window.prompt('Please enter the verification ' +
            //       'code that was sent to your mobile device.');
            //      setState2({ ...state2, right: true });
            //   return firebase.auth.PhoneAuthProvider.credential(verificationId,verificationCode);
           // })
            // .then(function(phoneCredential) {
               
            //   return firebase.auth().signInWithCredential(phoneCredential);
            // });

        /*axios
            .post(`${process.env.REACT_APP_API_URL}/api/customer/register`, {
                phoneNumber: phoneNumber,
                name: name,
                email: email,
                password: password,
            })
            .then((res) => {
                // console.log(res);
                // alert(
                //     `${name} Registered successfull \n OTP has been sent to ${phoneNumber}`,
                // );
                setState2({ ...state2, right: true });
            })
            .catch((err) => {
                console.log(err.response.data);
                alert(err.response.data);
            });*/
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            style={{ right: 0 }}
            role='presentation'
        >
            <Div className='container mt-3' style={{ width: '90%' }}>
                <Div className='row'>
                    <Div className='col text-left'>
                        <button
                            type='button'
                            className='btn btn-sm'
                            onClick={toggleOTPDrawer(anchor, false)}
                        >
                            <i className='fas fa-arrow-left fa-lg'></i>
                        </button>
                        <div className='container mt-2'>
                            <div className='row'>
                                <div className='col-lg-6 ml-3'>
                                    <h3>Enter OTP</h3>
                                    <small>
                                        We've sent an OTP to your phone number.
                                    </small>
                                </div>
                                {/* <div className='col-lg-4 ml-4'>
                                    <img
                                        className='img-fluid'
                                        style={{
                                            width: '105px',
                                            height: '100px',
                                            borderRadius: '50%',
                                            fload: 'right',
                                        }}
                                        src='TODO'
                                        alt='logo of wrap'
                                    />
                                </div> */}
                            </div>
                            <div className='container-fluid mt-15'>
                                <div className='row'>
                                <CustomInputField label='Phone Number' value={phoneNumber} disable={true}/>
                                <CustomInputField label='One time password' onChange={(id, value) => setOtp(value)}/>
                                    <div className='col-lg-12 text-center'>
                                        <button
                                            style={{
                                                background: '#fc8019',
                                                border: '1px solid #fc8019',
                                                color: 'white',
                                                marginTop: '15px',
                                                width: '318px',
                                                borderRadius: '2%',
                                            }}
                                            onClick={handleVerify}
                                        >
                                            <p
                                                style={{
                                                    fontWeight: 'bold',
                                                    marginTop: '9px',
                                                }}
                                            >
                                                VERIFY OTP
                                            </p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Div>
                </Div>
            </Div>
        </div>
    );

    return (
        <div>
            <div id="recaptcha-container" />
            <button
                type='button'
                style={{
                    background: '#fc8019',
                    border: '1px solid #fc8019',
                    color: 'white',
                    marginTop: '15px',
                    width: '318px',
                    borderRadius: '2%',
                }}
                onClick={getOtp}
            >
                <p
                    style={{
                        fontWeight: 'bold',
                        marginTop: '9px',
                    }}
                >
                    {'CONTINUE'}
                </p>
            </button>
            <Drawer
                anchor={'right'}
                open={state2['right']}
                onClose={toggleOTPDrawer('right', false)}
            >
                {list('right')}
            </Drawer>
        </div>
    );
}
