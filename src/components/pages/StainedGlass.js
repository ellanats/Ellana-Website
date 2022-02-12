import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PageCardList from '../PageCardList';

function StainedGlass({ images }) {
	const glassUrl = images.filter((images) => {
		return !images.featured && images.path.includes('glass');
	});

	return (
		<div>
			<Container fluid style={{ width: '69%' }}>
				<Row>
					<Col className="text-center p-0">
						<PageCardList images={glassUrl} />
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default StainedGlass;
