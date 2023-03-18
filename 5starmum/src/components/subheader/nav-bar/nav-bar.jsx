import React from 'react'; 
import Navdetail from './nav-detail';
import arrow from '../../../images/arrow-right.svg';
import style from './navbar.module.scss';

function Navbar() {
    return <nav className={style.navLink}>
        <div className={style.link}>
            <Navdetail txt='1. About you' pic={arrow} />
            <div className={style.progress}></div>
        </div>
        <div className={style.link}>
            <Navdetail txt=' 2. Family' pic={arrow} />
            <div className={style.progress}></div>
        </div>
        <div className={style.link}>
            <Navdetail txt='3. Preferences' pic={arrow} />
            <div className={style.progress}></div>
        </div>
        <div className={style.link}>
            <Navdetail txt='4. Community Profile' pic={arrow} />
            <div className={style.progress}></div>
        </div>
    </nav>
}
export default Navbar