import React from 'react';
import style from './navbar.module.scss';

function Navdetail(props) {
    return <div className={style.detailsPoint}>
        <ul>
          <li> {props.txt} </li>
        </ul>
        <img src={props.pic} alt='arrow right'></img>
    </div>
}
export default Navdetail