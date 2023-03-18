import React from 'react';
import style from './header.module.scss';
import logo from '../../images/Logo.svg';
import profile from '../../images/profile.svg'

function Header() {
    return <header className={style.headerSection}>
        <div className={style.logoDiv}>
            <img src={logo} alt='5starmum logo'></img>
        </div>
        <div className={style.profileDiv}>
        <img src={profile} alt='profile frame'></img>
        </div>
    </header>
}
export default Header