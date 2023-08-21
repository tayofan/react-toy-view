import React from 'react';
import { Link } from 'react-router-dom';
import header from '../css/header.module.css';
import { getToken } from '../utils/token';
import Wrapper from './Wrapper';

function Header() {
    const onClick = () => {
        localStorage.setItem('login-token','eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0amR0a2QzODY5IiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTY4NTU3MTI4Mn0.75yGopoblBSXHwV3wzFBwIKt4NSffNtyeBd4Rb_5814zBhx5f4Psso8RuHgD_-M8hgz0oqEGK29XEbwOBTu7DQ');
    }

    const disRefresh = () => {
        localStorage.setItem('refresh-token','eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE0OTAwMDAwMDAsInN1YiI6InRqZHRrZDM4NjkifQ.ZosSkyz7sMCL2FXHavzJiNIx5qxbX5ACltzHYOkGEl5rwpdOYhuBIk4HbXW2ZUKnv_1G7pyICGQ7xO_wvYNfOg');
    }
    return (
        <Wrapper style={{height: '8%'}}>
            <div className='d-flex bg-secondary justify-content-between align-items-center'>
                <div className="logo">
                    <div className=''>
                        <Link to='/'>
                            <img className='w-25 mt-10' src='./logo192.png' />
                        </Link>
                    </div>
                </div>
                <button className="logo" onClick={onClick}><span>accessToken만료!!!!!</span></button>
                {/* <button className="logo" onClick={disRefresh}><span>refreshToken만료!!!!!</span></button> */}

                <div className={header.header_right}>
                    <div className="date">2023.03.17 Fri</div>
                    <div className="time">13:20 PM</div>
                    { !localStorage.getItem('login-token') && <Link to="/loginPage"><button className="login">로그인</button></Link>}   
                    { localStorage.getItem('login-token') &&
                    <>
                    <div className="id">{localStorage.getItem('id')}</div>
                    <Link to="/loginout"><button className="login">로그아웃</button></Link>
                    </>
                    }
                </div>           
            </div>
        </Wrapper>
    );
}

export default Header;