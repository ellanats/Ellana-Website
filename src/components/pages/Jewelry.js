import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PageCardList from '../PageCardList';

function Jewelry({ images }) {
	const jewelryUrl = images.filter((images) => {
		return !images.featured && images.path.includes('jewelry');
	});

	return (
		<div>
			<Container className="container-fluid sticky-top p-0">
				<Row>
					<Col className="text-center p-0">
						<PageCardList images={jewelryUrl} />
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Jewelry;
