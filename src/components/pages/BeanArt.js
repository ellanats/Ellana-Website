import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PageCardList from '../PageCardList';

function BeanArt({ images }) {
	const beanUrl = images.filter((images) => {
		return (!images.featured && images.name.includes('grain'));
	});

	return (
		<div>
			<Container className="container-fluid sticky-top">
				<Row>
					<Col className="border-dark border-bottom">
						<div className="text-center">
							<h1>Inspiration</h1>
							<h5 className="text-justify">
								The first time I saw my son's school craft project of an African mask using various
								beans, I was so inspired by it! I immediately wanted to create my own pieces of art by
								utilizing just the grains' natural textures, sizes, and colors. I hope you will enjoy
								looking at them just as much as I enjoyed making them!
							</h5>
						</div>
					</Col>
				</Row>
				<Row>
					<Col className="text-center">
						<PageCardList images={beanUrl} />
					</Col>
					{/* <Col className="text-center">
						<PageCardList images={images} />
					</Col> */}
				</Row>
			</Container>
		</div>
	);
}

export default BeanArt;
