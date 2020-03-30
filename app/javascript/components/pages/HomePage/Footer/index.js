import React from 'react';
import './style.css';


export default function Footer(){
    return (
        <footer className="footer">
        <div className="content">
        <div className="container-brand">Shortly</div>
            <nav className="container-nav">
                <ul className="nav-group">
                    <h5 className="nav-title">Features</h5>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Links Shortening</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Branded Links</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Analitcs</a>
                    </li>
                </ul>

                <ul className="nav-group">
                    <h5 className="nav-title">Resorces</h5>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Blog</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Developers</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Support</a>
                    </li>
                </ul>

                <ul className="nav-group">
                    <h5 className="nav-title">Company</h5>
                    <li className="nav-item">
                        <a href="#" className="nav-link">About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Our Team</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Careers</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Contatic</a>
                    </li>
                </ul>

                <ul className="nav-group">
                    <a href="#" className="nav-link"><i className="fab fa-facebook-square"></i></a>
                    <a href="#" className="nav-link"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="nav-link"><i className="fab fa-pinterest"></i></a>
                    <a href="#" className="nav-link"><i className="fab fa-instagram"></i></a>
                </ul>
            </nav>
        </div>
    </footer>
    )
}