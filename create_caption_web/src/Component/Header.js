import React from 'react'
import logo from "../Assets/Images/logo.png";
const Header = () => {
    return (
        <header>
            <div className="container-fluid">
                <div className="header-outer">
                    <a href="/" className="logo">
                        <img src={logo} alt="logo" />
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header;