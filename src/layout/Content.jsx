import axios from 'axios';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import SideBar from './SideBar';
import Wrapper from './Wrapper';

function Content() {

    console.log('Content');
    const citation = async () => {
        console.log('Content');
        try {
            const res = await axios.post(
                `http://localhost:8080/api/login2/checkAccess`,
                {
                    accessToken: localStorage.getItem('login-token'),
                    refreshToken: localStorage.getItem('refresh-token')
                }
            )
            if (res.status === 200 && res.data === 'success') {


            }
        } catch (error) {

        }
    }



    return (
        <Wrapper style={{ height: '100%' }}>
            <Header />
            <Wrapper style={{ height: '92%' }}>
                <SideBar />
                <div className='col-sm-11 m-0 p-0' >
                    {/* <div className="cell-content"> */}
                    <Outlet />
                    {/* </div> */}
                </div>
            </Wrapper>
        </Wrapper>
    );
}

export default Content;