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
					<Navbar.Toggle
						className="navbar-toggler"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-expanded="false"
						aria-controls="navbarSupportedContent"
						aria-label="Toggle navigation"
					/>
					<Navbar.Collapse
						id="navbarSupportedContent"
						className="collapse navbar-collapse"
						style={{ justifyContent: 'end' }}
					>
						<Nav id="nav-links" className="my-nav-menu text-white">
							<NavLink as={Link} to="/Ellana-Website/" className="my-link text-white">
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
										<NavDropdown.Item
											as={Link}
											className="text-white"
											name={item.name}
											to={`/Ellana-Website${item.path}`}
										>
											{item.title}
										</NavDropdown.Item>
									</div>
								))}
							</NavDropdown>
							<NavLink as={Link} className="my-link text-white" to="/Ellana-Website/about">
								About
							</NavLink>
							<NavLink
								as={Link}
								className="my-link text-white hvr-underline-from-center"
								to="/Ellana-Website/contact"
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
