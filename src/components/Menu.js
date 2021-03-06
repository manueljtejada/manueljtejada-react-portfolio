import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../images/logo.svg';

const MenuWrapper = styled.nav`
	background: transparent !important;
	border-bottom: 1px solid #f2f2f2;
	margin-bottom: 1.5em;
	min-height: 80px;

	.nav-link {
		color: #888;

		&.active {
		color: #fe6968;
		}
	}
`;

const Menu = () => {
	return (
		<header className="site-header" role="banner">
			<MenuWrapper className="navbar navbar-expand-lg navbar-light bg-light">
				<Link className="navbar-brand" to="/">
					<img src={logo} height="40" alt="Manuel J. Tejada logo" />
				</Link>
				<button
					className="navbar-toggler navbar-toggler-right"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<NavLink
								className="nav-link"
								activeClassName="active"
								exact
								to="/"
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink className="nav-link" activeClassName="active" to="/work">
								Work
							</NavLink>
						</li>
						<li>
							<NavLink
								className="nav-link"
								activeClassName="active"
								to="/about"
							>
								About
							</NavLink>
						</li>
						<li>
							<a
								href="mailto:manute32@gmail.com"
								className="nav-link"
								target="_blank"
								rel="noopener noreferrer"
							>
								Get in touch
							</a>
						</li>
					</ul>
				</div>
			</MenuWrapper>
		</header>
	);
};

export default Menu;
