import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import image from '../images/jumbotron.jpg';

import TypeAnimation from './TypeAnimation';

const Wrapper = styled.header`
	background: url(${image}) no-repeat left top;
	background-size: cover;
	color: #fff;
	height: 450px;
	margin: -24px -15px 0;
	padding-top: 120px;
	text-align: center;
	z-index: -9;
	h1 {
		font-weight: 700;
	}
`;

const Button = styled.span`
	border: 0;
	letter-spacing: 1.5px;
	padding: 12px 18px;
	text-transform: uppercase;

	border-radius: ${props => props.rounded && '50px'};

	&:hover,
	&:active,
	&:focus {
		background: darken(#fe6968, 5%);
	}
`;

const Jumbotron = () => {
	return (
		<Wrapper>
			<div className="container">
				<h1>Hello, I'm Manuel.</h1>
				<p className="lead">
					I’m a &nbsp;
					<TypeAnimation strings={['Web Designer', 'Frontend Developer']} />
					&nbsp; from the Dominican Republic.
				</p>
				<Link className="btn btn-secondary btn-rounded mt-2" to="/">
					View my work &raquo;
				</Link>
			</div>
			<a className="arrow-down">
				<i className="fa fa-long-arrow-down fa-2x" />
			</a>
		</Wrapper>
	);
};

export default Jumbotron;
