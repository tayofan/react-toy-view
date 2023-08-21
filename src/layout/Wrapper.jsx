import React from 'react';

const Wrapper = ({children, style}) => {
    return (
        <div className="row m-0 p-0" style={style}>
            {children}
        </div>
    );
};

export default Wrapper;