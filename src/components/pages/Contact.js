import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";


function Contact() {
    return (
        
		<Card className="card mx-auto text-center" style={{ marginTop: '2rem', pointerEvents: 'none' }}>
			<Card.Title>Contact Information:</Card.Title>
			<Card.Body>
				<Card.Text>Ellana Tsvayberg</Card.Text>
				<Card.Text>2092 Mountain Avenue</Card.Text>
				<Card.Text>Scotch Plains, NJ 07076</Card.Text>
				<Card.Text>Tel: 917-494-0687</Card.Text>
				<Card.Text>email: ellanatsv@gmail.com</Card.Text>
                <Card.Link className="facebook social" href='https://www.facebook.com/Ellana-Designs-2297107167231547'><FontAwesomeIcon icon={faFacebook} size="2x" /></Card.Link>
                <Card.Link className="facebook social" href='https://www.instagram.com/ellanadesigns/'><FontAwesomeIcon icon={faInstagram} size="2x" /></Card.Link>
			</Card.Body>
		</Card>
	);
}

export default Contact;
