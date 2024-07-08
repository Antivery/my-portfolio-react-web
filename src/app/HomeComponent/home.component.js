"use client"
import Image from 'next/image';

import '../HomeComponent/home.component.scss';

import imageOfMe from '/public/assets/img/C071F348-ECE1-4795-A948-B2F9BAD84E89.JPG';
import webDevIcon from '/public/assets/img/web-development.png';
import lowCodeIcon from '/public/assets/img/5d129fa97a65fc7deeb743de_Adalo-Final-Logo-Shadow.png';
import lightBulb from '/public/assets/img/light-bulb(1).png';
import notebook from '/public/assets/img/notebook.png';
import drawing from '/public/assets/img/drawing.png';
import wireFrame from '/public/assets/img/wireframe.png';
import codingLang from '/public/assets/img/coding-language.png';
import callBlack from '/public/assets/img/call(1).png';
import callBlue from '/public/assets/img/call.png';
import email from '/public/assets/img/email.png';
import location from '/public/assets/img/location.png';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import {breakPoints} from '../scss/_breakpoints.scss'

const PDFViewerComponent = dynamic(() => import('../utilities/PDFViewer'), { ssr: false });

export default function HomePage() {
	  
	return (
		<>
			<main>
				<section id="about-me" className="container"> 
					<div className="who-I-am">
						<p>Who I Am</p>
						<span className="who-i-am-bar"></span>
					</div>
					<div className="all-me">
						<div className="about-me-image">
							<Image width={300} height={500} src={imageOfMe} alt="" className="me-img" />
						</div>
						<div className="about-me-text-wrap">
							<span  className="title-container">
								<h3>About Me</h3>
							</span>
						{/* add JS to this section for word animation */}
							
							<div className="bio">
					
								<p> 
									Hey there, I'm Anthony Ivery, a seasoned Software Developer who's all about leveling up my skills and staying on top of the latest tech and frameworks. I thrive in team settings,
								 where I love learning from veterans and helping out newer devs. Seeing others succeed in what they love is my jam, and I'm known for being a great communicator.
								 </p>
								 <p>
									Quick backstory: I'm originally from Dayton, OH—a place where making something out of nothing is a real challenge. I spent four years in the US Army, where I learned tons about life and leadership. After that, 
									I did construction work for a bit, then got into HVAC, fixing things for Sears customers.
									But I wanted more, so I hit the books again and got my BS in Information Technology, focusing on Web Development. Best decision ever—coding is my passion now!
								</p>
								<p>
									Once I was tiered of doing construction I enrolled into school for HVAC. Became a Refrigration Technition for Sears, 
									I enjoyed Going to customers homes, fixing their issues and meeting great people. I just seen more for myself so I took the bull by the horn and erolled back in school for my BS Information Technology with the focuse in Web Development.
									I can say it was probley the best desion I may have made, I love it and it has been my passion since.
									When I am not practicing code, I am gaming with my friends or out exploring things to do where I live!
								</p>
							</div>
					</div>
					<PDFViewerComponent className="about-me-resume" />
				</div>	
			</section>
			{/* My services section */}
			<section id="my-services">
				<div className="my-services-title">
					<p>My Services</p>
					<span className="my-services-bar"></span>
				</div>
				<div className="service-cards">
					<div className="service-card web-development">
						<div id="web-dev-service-img-wrapper" className="service-img-wrapper">
							<Image width={60} height={60} className="service-icon" src={webDevIcon} alt="" />
						</div>
						<h5 className="service-title">Web Development</h5>
						<p className="service-details">
							I use various web technologies to develop attractive websites which converts 
							visitors to customers. 
							I develop creative and responsive websites.
						</p>
					</div>
					<div  className="service-card no-code-development">
						<div id="no-code-service-img-wrapper" className="service-img-wrapper">
							<Image width={60} height={60} className="service-icon" src={lowCodeIcon} alt="" />
						</div>
						<h5 className="service-title">
							No-code | Low-code Development
						</h5>
						<p className="service-details">
							I can develope websites and apps on No-Code/ Low-Code platfmors 
							such as: Webflow, Wix, Wordpress Shopify and Adalo. If you are working with a strick budget.
						</p>
					</div>
				</div>
			</section>

			{/* Workflow section */}
			<section id="work-flow">
				<div className="my-workflow-title">
					<p>My Workflow</p>
					<span className="my-workflow-bar"></span>
				</div>
				<div className="work-flow-cards">
					<div className="work-flow-card discover">
						<div id="workflow-img-wrapper" className="service-img-wrapper">
							<Image width={60} height={60} className="workflow-icon"src={lightBulb} alt="" />
						</div>
						
						<h6 className="workflow-title">Discover</h6>
						<p className="workflow-details">
							I conduct research to indentify the currect most efficent solution to your problems.
						</p>
					</div>
					<div className="work-flow-card define">
						<div id="workflow-img-wrapper" className="service-img-wrapper">
							<Image width={60} height={60} className="workflow-icon"src={notebook} alt="" />
						</div>
						
						<h6 className="workflow-title">Define</h6>
						<p className="workflow-details">
							I brainstorm possible design solutions to the identified problem.
						</p>
					</div>
					<div className="work-flow-card ideate">
						<div id="workflow-img-wrapper" className="service-img-wrapper">
							<Image width={60} height={60} className="workflow-icon"src={drawing} alt=""/>
						</div>
						
						<h6 className="workflow-title">Ideate</h6>
						<p className="workflow-details">
							I create wireframes and sketches of the product I’m about to design.
						</p>
					</div>
					<div className="work-flow-card prototype">
						<div id="workflow-img-wrapper" className="service-img-wrapper">
							<Image width={60} height={60} className="workflow-icon"src={wireFrame} alt="" />
						</div>
						
						<h6 className="workflow-title">Prototype</h6>
						<p className="workflow-details">
							I create high fidelity design and prototype the screens.
						</p>
					</div>
					<div className="work-flow-card implament">
						<div id="workflow-img-wrapper" className="service-img-wrapper">
							<Image width={60} height={60} className="workflow-icon"src={codingLang} alt="" />
						</div>
						
						<h6 className="workflow-title">Implament</h6>
						<p className="workflow-details">
							After designing, I deliver for implementation.
						</p>
					</div>
				</div>
			</section>
			
			{/* contact me */}
			<section id="contact">
				<div className="contact-title">
					<p>Contact Me</p>
					<span className="contact-bar"></span>
				</div>
			
				<div className="contact-wrapper">
					<div className="social-links">
						<div className="contact-info">
							<div className="img-wrapper">
								<Image className='email-image' src={callBlack} alt="" />
							</div>
							<p className="contact-number">
								+1(470) 502-5618
							</p>
						</div>
						<div className="contact-info" id="email"> 
							<div className="img-wrapper">
								<Image className="phone-image" src={email} alt="" />
							</div>
							<p className="contact-email">
								Antivery@gmail.com
							</p>
						</div>
						<div className="contact-info" id="location">
							<div className="img-wrapper">
								<Image className='location-image' src={location} alt="" />
							</div>
							<p className="contact-location">Atlanta, Ga</p>	
						</div>
					</div>
					
					<form action="" id="contact-form" className="contact-form" method="post">
						<input name="UserName" type="text" id="name" placeholder="First Name" />
						<div className="email-phone-wrapper">
							<input name="userEmail" type="email" id="e-mail" className="email" placeholder="Email" />
							<input name="userPhoneNum" type="text" id="phoNo" className="phone-number" placeholder="Phone Number" />
						</div>
							<textarea name="message" id="message" cols="30" rows="10" placeholder="Enter your message"></textarea>
							<button id="send" className="submit-button" type="submit">Submit</button>
					</form>
				</div>
			</section>  
	</main>
	<footer>
		<div className="footer-content-wrapper">
			<div className="socials">
				<a className="LinkedIn" href="https://www.linkedin.com/in/anthony-ivery-7b75a8bb/" ><img className="social-img" src="assets/img/linkedin.png" alt=""/></a>
				<a className="github" href="https://github.com/Antivery"> <img className="social-img" src="/assets/img/github.png" alt=""/>  </a>
				<a className="twitter" href="https://twitter.com/antivery" ><img className="social-img" src="assets/img/twitter.png" alt=""/> </a>
			</div>
		</div>
    </footer>
</>
);}