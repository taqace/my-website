import React from 'react';
import PropTypes from 'prop-types';

import Navigation from '../components/Template/Navigation';
import SideBar from '../components/Template/SideBar';

const Main = (props) => (
    <div id="wrapper">
        <Navigation/>
        <div id="main">
            {props.children}
        </div>
        {props.fullPage ? null : <SideBar/>}
    </div>

);

Main.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
    fullPage: PropTypes.bool,
    title: PropTypes.string,
    description: PropTypes.string,
  };
  
  Main.defaultProps = {
    children: null,
    fullPage: false,
    title: null,
    description: "Patrick Johnson's personal website.",
  };

export default Main;

