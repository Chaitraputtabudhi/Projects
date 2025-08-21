import React from "react";

function Header(){
    return (
        <div className="header">
            <div className="header-logo">
                <a href="#"><h3 className="header-name">Portfolio CP</h3></a>
            </div>
            <div className="header-container">
                <div className="nav-item"><a href="#about">About</a></div>
                <div className="nav-item"><a href="#projects">Projects</a></div>
                <div className="nav-item"><a href="#skills">Skills</a></div>
            </div>
        </div>
    )
}

export default Header;