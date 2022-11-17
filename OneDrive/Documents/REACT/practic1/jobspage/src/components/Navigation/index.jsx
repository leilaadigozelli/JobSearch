
import React from 'react';
import { FooterBottom } from '../FooterBottom';
import { FooterText } from '../FooterText';
import {  NavFooter } from '../NavFooter';
import { NavMenu } from '../NavMenu';
import { NavTop } from '../NavTop';
import './style.css';
import { Profile } from '../Profile';


export const Navigation = () => {
	return (
		<div className='navigation'>
			<header>
				<NavTop />
				<NavMenu />
				<Profile/>
				<div className='theme-changer'></div>
			</header>
             
			<footer>
				<NavFooter/>
			    <FooterText/>
				<FooterBottom/>
			</footer>
		</div>
	);
};