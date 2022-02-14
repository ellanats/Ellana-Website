import React from 'react';
import { Card } from 'react-bootstrap';
import './contactCard.css';

const Contact = () => {
	return (
		<Card className="mx-auto text-center">
			<Card.Title>
				<h1>Contact Information:</h1>
			</Card.Title>
			<Card.Body>
				<Card.Text style={{ fontSize: '1.4rem' }}>Ellana Tsvayberg</Card.Text>
				<a href="mailto:ellanadesigns1@gmail.com">ellanadesigns1@gmail.com</a>
			</Card.Body>

			<Card.Body className="links">
				<a
					className="btn btn-primary "
					style={{ backgroundColor: '#3b5998' }}
					href="https://www.facebook.com/Ellana-Designs-2297107167231547"
					role="button"
				>
					<i className="fab fa-facebook-f" />
				</a>

				<a
					className="btn btn-primary"
					style={{ backgroundColor: '#ac2bac' }}
					href="https://www.instagram.com/ellanadesigns/"
					role="button"
				>
					<i className="fab fa-instagram" />
				</a>

				<a
					className="btn btn-primary"
					style={{ backgroundColor: '#0082ca' }}
					href="https://www.linkedin.com/in/ellana-tsvayberg-3b175a9/"
					role="button"
				>
					<i className="fab fa-linkedin-in" />
				</a>
			</Card.Body>
		</Card>
	);
};

export default Contact;
