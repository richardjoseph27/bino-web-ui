import React from 'react';
import LandingUpper from './LandingUpper';
import Footer from './Footer';
import MainFooter from './MainFooter';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const LandingPg = () => {
    const matches = useMediaQuery('(max-width:960px)');
    return (
        <>
            <LandingUpper />
            <Footer />
            {!matches &&<MainFooter />}
        </>
    );
};

export default LandingPg;
