import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
	border-top: 1px solid #f2f2f2;
	color: #929292;
	font-size: .8em;
	margin-top: 3em;
	padding: 2em 0;
	text-align: center;
`;

const Footer = () => {
	let date = new Date();
	let year = date.getFullYear();

	return (
		<FooterWrapper>
			&copy; {year} Manuel J. Tejada. Built with ❤️ from the DR 🌴
		</FooterWrapper>
	);
};

export default Footer;
