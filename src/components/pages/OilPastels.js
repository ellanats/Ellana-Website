import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import PageCardList from '../PageCardList';
import '../pageCard.css';


function OilPastels({ images }) {
	const oilUrl = images.filter((images) => {
		return !images.featured && images.path.includes('oil-pastels');
	});

	

	// const OilCardList = ({ images }) => {
	// 	const oilImages = images.map((images) => {
	// 		return images.path.includes('oil-pastels');
	// 	});

	// 	if (oilImages.length === 4) {			
	// 		return <Card style={{ width: '45%' }}/>
	// 	}
		
	// };

	return (
		<div >
			<Container className="container-fluid w-75">
				<Row >
					<Col className="text-center p-0">
						<PageCardList style={{flexBasis: '45%'}} images={oilUrl} />
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default OilPastels;
