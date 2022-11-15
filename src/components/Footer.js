import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="item1">
                </div>
                <div className="item2">
                    <span style={{ paddingRight: 5 }}>Copyright </span>
                    <span style={{ paddingLeft: 5 }}>
                        {new Date().getFullYear()} Quick CV - All Rights
                        Reserved .
                    </span>
                    <span style={{ paddingLeft: 5 }}>
                       Developed By Pratik , Shariq & Sagar .
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
