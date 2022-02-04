import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PageCardList from '../PageCardList';

function Pointilism({ images }) {
	const pointUrl = images.filter((images) => {
		return !images.featured && images.path.includes('pointilism');
	});

	return (
		<div>
			<Container className="container-fluid w-75">
				<Row>
					<Col className="text-center p-0">
						<PageCardList images={pointUrl} />
					</Col>
				</Row>
			</Container>
		</div>
	);
}
export default Pointilism;