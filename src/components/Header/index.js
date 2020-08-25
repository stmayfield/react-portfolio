import React from 'react';
// import { useLocation } from 'react-router-dom';
// import './style.css';

function Header(props) {

    return (
        <div className="row mt-4 mt-md-4">
            <div className="col">
                <h1 className="text-center">{props.header}</h1>
            </div>
        </div>
    )
};

export default Header;