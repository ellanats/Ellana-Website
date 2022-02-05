import React from 'react';
import { Card } from 'react-bootstrap';
//import ExpandCard from './ExpandCard';
import './pageCard.css';

const PageCard = ({ url, path, title, name, material, description }) => {
	return (
		<Card>
			<Card.Img variant="top" path={path} src={url} alt={name} />
			<Card.Body className="d-flex flex-column" >
				<Card.Title className="mt-auto">
					<h5>{title}</h5>
				</Card.Title>
				{material && <Card.Text className='mt-auto'>{`Materials: ${material}`}</Card.Text>}
				{description && <Card.Text className='mt-auto'>{description}</Card.Text>}
			</Card.Body>
		</Card>
	);
};

export default PageCard;
