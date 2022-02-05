import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './Navigation.css';
import { DropdownItems } from './DropdownItems';

function Navigation() {
	// docReady(function() {
	// 	let dropdownMenu = DropdownItems.children('.my-dropdown-item');
	// 	if (dropdownMenu.is(':visible')) {
	// 		dropdownMenu.parent().toggleClass('open');
	// 	}
	// });

	return (
		<React.Fragment>
			<Navbar className="my-navbar" expand="lg">
				<Container className="my-container">
					<Navbar.Brand href="/" className="my-brand text-white">
						Ellana Designs
					</Navbar.Brand>
					<Navbar.Toggle className="my-toggler-icon" aria-controls="basic-navbar-nav "/>
					<Navbar.Collapse className="justify-content-end " id="basic-navbar-nav">
						<Nav className="my-nav-menu text-white">
							<Nav.Link as={Link} to="/" className="my-link text-white" data-bs-toggle="collapse" data-bs-target="my-link.text-white">
								Home
							</Nav.Link>
							<NavDropdown className="my-dropdown-menu" title="Portfolio" id="portfolio-nav-dropdown">
								{DropdownItems.map((item) => (
									<NavDropdown.Item
										data-hover="dropdown"
										data-animations="fadeInDown"
										className="my-dropdown-item"
										key={item.id}
									>
										<Nav.Link className="text-white" as={Link} name={item.name} to={item.path}>
											{item.title}
										</Nav.Link>
									</NavDropdown.Item>
								))}
							</NavDropdown>
							<Nav.Link className="my-link text-white" as={Link} to="/about">
								About
							</Nav.Link>
							<Nav.Link className="my-link text-white hvr-underline-from-center" as={Link} to="/contact">
								Contact
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</React.Fragment>
	);
}

export default Navigation;
