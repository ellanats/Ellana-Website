import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav, NavDropdown, NavLink } from 'react-bootstrap';
import './Navigation.css';
import { DropdownItems } from './DropdownItems';

function Navigation() {
	return (
		<React.Fragment>
			<Navbar className="my-navbar navbar-dark" expand="lg">
				<Container className="my-container">
					<Navbar.Brand as={Link} to="/Ellana-Website" className="my-brand text-white">
						Ellana Designs
					</Navbar.Brand>
					<Navbar.Toggle className="my-toggler-icon" aria-expanded="false" aria-label="Toggle navigation" />
					<Navbar.Collapse
						className="justify-content-end "
						id="navbarSupportedContent"
						data-bs-toggle="collapse"
					>
						<Nav className="my-nav-menu text-white">
							<NavLink
								as={Link}
								to="/Ellana-Website/"
								className="my-link text-white"
								// onClick={() => '.navbar'.collapse('hide')}
							>
								Home
							</NavLink>
							<NavDropdown className="my-dropdown-menu" title="Portfolio" id="portfolio-nav-dropdown">
								{DropdownItems.map((item) => (
									<div
										data-hover="dropdown"
										data-animations="fadeInDown"
										className="my-dropdown-item"
										key={item.id}
									>
										<NavLink
											as={Link}
											className="text-white"
											name={item.name}
											to={`/Ellana-Website${item.path}`}
											// onClick={() => '.navbar'.collapse('hide')}
										>
											{item.title}
										</NavLink>
									</div>
								))}
							</NavDropdown>
							<NavLink
								as={Link}
								className="my-link text-white"
								to="/Ellana-Website/about"
								data-bs-toggle="collapse"
								// onClick={() => '.navbar'.collapse('hide')}
							>
								About
							</NavLink>
							<NavLink
								as={Link}
								className="my-link text-white hvr-underline-from-center"
								to="/Ellana-Website/contact"
								data-bs-toggle="collapse"
								// onClick={() => '.navbar'.collapse('hide')}
							>
								Contact
							</NavLink>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</React.Fragment>
	);
}

export default Navigation;
