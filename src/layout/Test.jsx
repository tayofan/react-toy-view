import React from 'react';
import Header from './Header';
import SideBar from './SideBar';
import Wrapper from './Wrapper';

const Test = () => {
    return (
        <Wrapper style={{height: '100%'}}>
                <Header/>
                <Wrapper style={{height: '92%'}}>
                    <SideBar/>
                    <div className='col-sm-11 m-0 p-0 h-100' >


                    </div>
                </Wrapper>
        </Wrapper>
    );
};

export default Test;