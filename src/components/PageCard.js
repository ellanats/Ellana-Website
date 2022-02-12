import React, { useState } from 'react';
import { Card, CardImg, Modal } from 'react-bootstrap';
import './pageCard.css';

const PageCard = (props) => {
	const [ lgShow, setLgShow ] = useState(false);
	const handleClose = () => setLgShow(false);
	const handleShow = () => setLgShow(true);

	return (
		<Card className="my-card">
			<CardImg
				type="image"
				className="image-responsive"
				variant="top"
				path={props.path}
				src={props.url}
				alt={props.title}
				onClick={handleShow}
			/>

			<Modal
				show={lgShow}
				onHide={handleClose}
				id="myModal"
				// {...props}
				// aria-labelledby="contained-modal-title-vcenter"
				centered="true"
				size="xl"				
			>
				<Modal.Header closeButton>
					<div className="text-center">{props.title}</div>
				</Modal.Header>
				<Modal.Body>
					<div className="container-fluid">
						<img className="image-responsive" centered="true" src={props.url} alt={props.title} />
					</div>
				</Modal.Body>
			</Modal>

			<Card.Body className="d-flex flex-column">
				<Card.Title className="mt-auto">
					<h5>{props.title}</h5>
				</Card.Title>
				{props.material && <Card.Text className="mt-auto">{`Materials: ${props.material}`}</Card.Text>}
				{props.description && <Card.Text className="mt-auto">{props.description}</Card.Text>}
			</Card.Body>
		</Card>
	);
};

export default PageCard;
