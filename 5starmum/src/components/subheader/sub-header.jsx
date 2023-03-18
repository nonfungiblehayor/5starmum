import React from 'react';
import Navbar from './nav-bar/nav-bar';
import AboutUser from './about-user/about-user';
import style from './sub-header.module.scss';

function Subheader() {
    return <section className={style.subHeaderSection}>
        <Navbar />
        {/* <AboutUser /> */}
    </section>
}

export default Subheader