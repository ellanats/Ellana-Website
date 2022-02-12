import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PageCardList from '../PageCardList';
import '../pageCard.css';

function OilPastels({ images }) {
	const oilUrl = images.filter((images) => {
		return !images.featured && images.path.includes('oil');
	});

	return (
		<div>
			<Container fluid style={{ width: '69%' }}>
				<Row>
					<Col className="text-center p-0">
						<PageCardList images={oilUrl} />
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default OilPastels;
