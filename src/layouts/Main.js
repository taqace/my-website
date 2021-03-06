import React from 'react';

import Navigation from '../components/Template/Navigation';
import SideBar from '../components/Template/SideBar';

const Main = (props) => (
    <div id="wrapper">
        <Navigation/>
        <div id="main">
            <SideBar/>
        </div> 
    </div>

);

export default Main;