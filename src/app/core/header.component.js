/* eslint-disable react/no-unescaped-entities */
"use client"
import Image from 'next/image';
import { createRef, useEffect, useRef, useState } from 'react';
import { IconContext } from 'react-icons';
import { IoMdClose } from 'react-icons/io';
import { GiHamburgerMenu } from "react-icons/gi";

import meEmogi from '/public/assets/img/IMG_BE9C1F1543F3-1.png';
import wavingEmogi from '/public/assets/img/Waving Hand Emoji [Free Download IOS Emojis].png'

import '../core/header.component.scss'

export default function Header() {
	const mobileMenuRef = useRef(null);
	const menuLinksRef = useRef(null);
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
								<a className="nav-link" id="home-section" href="#">Home</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" id="bio-section" href="#about-me">Bio</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" id="services-section" href="#my-services">Services</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" id="portfolio-section" href="#portfolio">Projects</a>
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
		
			<div className="header-content">
				<div className="header-content-hero">
					<div className="header-content-text-wrapper">
						<p className="hi">
							Hi there <Image className="waving" width={50} height={50} src={wavingEmogi} alt="" /> I{"'"}m
						</p>
						<h1 className='my-name'>Anthony Ivery</h1>
						<h3>
							Front-end Web Developer
						</h3>
						<p className="intro">
							I am a veteran and Professional Web developer<br/>
						</p>
						<Image src={meEmogi} alt="" className="me"/>
					</div>
				</div>
			</div>
		</header>
	</>
	)
}