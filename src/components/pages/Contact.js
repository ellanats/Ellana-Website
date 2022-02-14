import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './contactCard.css';

const Contact = () => {
	return (
		<Card className="mx-auto text-center">
			<Card.Title>
				<h1>Contact Information:</h1>
			</Card.Title>
			<Card.Body>
				<Card.Text style={{ fontSize: '1.4rem' }}>Ellana Tsvayberg</Card.Text>
				<Card.Link as={Link} to="mailto:ellanadesigns1@gmail.com">ellanadesigns1@gmail.com</Card.Link>
			</Card.Body>

			<Card.Body className="my-links">
				<Card.Link
					as={Link}
					className="btn btn-primary "
					target="blank"
					style={{ backgroundColor: '#3b5998' }}
					to="https://www.facebook.com/Ellana-Designs-2297107167231547"
					role="button"
				>
					<i className="fab fa-facebook-f" />
				</Card.Link>

				<Card.Link
					as={Link}
					className="btn btn-primary"
					target="blank"
					style={{ backgroundColor: '#ac2bac' }}
					to="https://www.instagram.com/ellanadesigns/"
					role="button"
				>
					<i className="fab fa-instagram" />
				</Card.Link>

				<Card.Link
					as={Link}
					className="btn btn-primary"
					target="blank"
					style={{ backgroundColor: '#0082ca' }}
					to="https://www.linkedin.com/in/ellana-tsvayberg-3b175a9/"
					role="button"
				>
					<i className="fab fa-linkedin-in" />
				</Card.Link>
			</Card.Body>
		</Card>
	);
};

export default Contact;
