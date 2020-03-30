import React from 'react';
import './style.css';

export default function Header() {
	function toggleMenu(){
		if(document.querySelector('.navbar-nav').style.display === 'none'){
				document.querySelector('.navbar-nav').style.display = 'block';
		}else{
				document.querySelector('.navbar-nav').style.display = 'none'
		}    }
	return (
		<header className="shortly-header">
			<div className="content">
				<nav className="navbar">
					<div className="container-brand">URL Shortener</div>
					<ul className="navbar-nav">
						<div className="nav-menu">
							<li className="nav-item">
								<a href="#" className="nav-link">Features</a>
							</li>
							<li className="nav-item">
								<a href="#" className="nav-link">Pricing</a>
							</li>
							<li className="nav-item">
								<a href="#" className="nav-link">Resources</a>
							</li>
						</div>

						<div className="container-group-button">
								<button className="btn">Login</button>
								<button className="btn btn-ative">Sign Up</button>
						</div>
					</ul>                    
				</nav>

				<div className="container-button-menu">
					<button className="btn-hamburguer">
						<span className="inner-hamburguer" onClick={toggleMenu}></span>
					</button>
				</div>
			</div>
		</header>
	)
}