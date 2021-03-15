import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env;

const SideBar = () => (
    <section id="sidebar">
        <section id="intro">
            <Link to="/" className="logo">
                <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
            </Link>
            <header>
                <h2>Patrick Johnson</h2>
                <p><a href="mailto:taqace@gmail.com">taqace@gmail.com</a></p>
            </header>
        </section>

        <section className="blurb">
            <h2>About me</h2>
            <p>
                Hi, I&apos;m Patrick. CCNY computer science grad. I like building things.
                It used to be Boeing airplanes, and now it's software. 
                Feel free to contact me! 
            </p>
        </section>

        <section id="footer">
            <ContactIcons/>
            <p className="copyright">&copy; Patrick Johnson</p>
        </section>
    </section>
);
export default SideBar;