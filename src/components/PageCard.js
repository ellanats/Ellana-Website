import React from 'react';
import { Card } from 'react-bootstrap';
import './pageCard.css';

const PageCard = ({ url, path, title, name, material, description }) => {
	return (
		<Card>
			<Card.Img variant="top" path={path} src={url} alt={name} />
			<Card.Body className="align-bottom">
				<Card.Title className="align-text-bottom">
					<h4>{title}</h4>
				</Card.Title>
				{material && <Card.Text>{`Materials: ${material}`}</Card.Text>}
				{description && <Card.Text>{description}</Card.Text>}
			</Card.Body>
		</Card>
	);
};

export default PageCard;
