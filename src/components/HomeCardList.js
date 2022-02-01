import React from 'react';
import HomeCard from './HomeCard';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const HomeCardList = (props) => {
	const images = props.images.map((image) => {
		return (			
			<Col key={image.url} className="d-flex justify-content-center my-3" >
                <Link to={image.path} style={{color: 'inherit', textDecoration: 'none'}} >
               {image.featured && <HomeCard image={image} />}
                </Link>
				</Col>				
		);
	});

	return (
	  
    <Container className="image-list" style={{padding: '1rem 2rem'}}>
			<Row className="mx-auto">{images}</Row>
		</Container>
	);
};
export default HomeCardList;
