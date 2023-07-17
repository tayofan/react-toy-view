import React from "react";
import { Link } from 'react-router-dom';
import sideBar from '../css/sideBar.module.css';

export default function SideBar() {
    return (
        // <div className="cell-aide">
        <div className={sideBar.snb}>
            <ul>
                <li><Link to="/board/list">게시판</Link></li>
                {/* <li><Link to="/user">사용자</Link></li> */}
            </ul>
        </div>
    );
}