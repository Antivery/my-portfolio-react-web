/* eslint-disable react/no-unescaped-entities */
"use client"
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { IconContext } from 'react-icons';
import { IoMdClose } from 'react-icons/io';
import { GiHamburgerMenu } from "react-icons/gi";

import '../header/header.scss'
import Link from 'next/link';

export default function Header() {
	const mobileMenuRef = useRef(null);
	var [mobileMenuActive, setMobileMenuActive] = useState(false);

	const mobileMenuToggle = () => {
		
		setMobileMenuActive(!mobileMenuActive);
	};

	useEffect(() => {
		const menu = mobileMenuRef.current;
		if (menu) {
			menu.addEventListener('click', mobileMenuToggle);
		}

		return () => {
			if (menu) {
				menu.removeEventListener('click', mobileMenuToggle);
			}
		};
	}, []);

	const ActivateMobileMenu = () => {
		return (
			<IconContext.Provider value={{ color: 'white', size: '2em'}}>
				{mobileMenuActive ? (
					<IoMdClose className="navbar__toggle" id="mobile-menu" ref={mobileMenuRef} onClick={mobileMenuToggle} />
				) : (
					<GiHamburgerMenu  className="navbar__toggle" id="mobile-menu" onClick={mobileMenuToggle} />
				)}
			</IconContext.Provider>
		);
	};

	return(
		
	<>
		<header id="home">
			<nav className="nav-bar">
				<div className="nav-container">
					<ActivateMobileMenu/>
					<div id="navbar-content" >
						<ul className={"navbar-nav" + (mobileMenuActive ? ' active' : '')}>
							<li className="nav-item">
								<Link className="nav-link" id="home-section" href="/home">Home</Link>
							</li>
							<li className="nav-item">
								<a className="nav-link" id="bio-section" href="#about-me">Bio</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" id="services-section" href="#my-services">Services</a>
							</li>
							<li className="nav-item">
								<Link className="nav-link" id="portfolio-section" href="/projects">Projects</Link>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#contact" id="contact-section">Contact</a>
							</li>
							<li className="nav-item" id="lastnav-item">
								<a className="nav-link" href="https://www.bluecheckstudio.com/" id="lets-work">Let's Work!</a>
							</li>
						</ul>
					</div>
				</div>
				</nav>
		</header>
	</>
	)
}