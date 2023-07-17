import React from 'react';
import { Link } from 'react-router-dom';
import header from '../css/header.module.css';

function Header() {
    return (
        <div className="cell-header">
            <div className="logo"><Link to="/"><span>React</span></Link></div>

            <div className={header.header_right}>
                <div className="date">2023.03.17 Fri</div>
                <div className="time">13:20 PM</div>
                <div className="id">abcdef 님</div>
                <button className="logout">로그아웃</button>
            </div>           
        </div>
    );
}

export default Header;