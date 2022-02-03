import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import PageCardList from '../PageCardList';
import '../pageCard.css';

function OilPastels({ images }) {
	const oilUrl = images.filter((images) => {
		return !images.featured && images.path.includes('oil-pastels');
	});

	// const oilImages = images.map((images) => {
	// 	return images.path.includes('oil-pastels');
	// });

	// const OilCardList = () => {
	// 	if (oilImages.length === 4) {
	// 		return (
	// 			<PageCard>
	// 				<Card style={{ width: '500px' }} />
	// 			</PageCard>
	// 		);
	// 	}
	// };

	return (
		<div className="w-100 d-sm-block d-md-block d-lg-block">
			<Container className="container-fluid">
				<Row>
					<Col className="text-center p-0">
						<PageCardList  images={oilUrl} />
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default OilPastels;
