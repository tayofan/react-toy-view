import React from "react";
import { Link } from 'react-router-dom';
import sideBar from '../css/sideBar.module.css';

export default function SideBar() {
    return (
        // <div className="cell-aide">
        <div className='col-sm-1 bg-dark p-0 h-100'>
            <ul>
                <li><Link to="/board/list">게시판</Link></li>
                <li><Link to="/user/list">사용자</Link></li>
                <li><Link to="/map">지도</Link></li>
                <li><Link to="/kafka">kafka</Link></li>
            </ul>
        </div>
    );
}