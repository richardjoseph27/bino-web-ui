import React from 'react';
import Navigator from './Navigator';
import HomeDummy from './HomeDummy';
import AllRestaurants from './AllRestaurants';
import MainFooter from '../LandingPage/MainFooter';
import useMediaQuery from '@material-ui/core/useMediaQuery';

function Home() {
    const matches = useMediaQuery('(max-width:1224px)');
    return (
        <div>
            <Navigator />
            <HomeDummy />
            <AllRestaurants />
            {!matches &&<MainFooter />}
        </div>
    );
}

export default Home;
