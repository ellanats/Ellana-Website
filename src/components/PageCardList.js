import React from 'react';
//import { Container, Row, Col } from 'react-bootstrap';
import PageCard from './PageCard';
import './pageCard.css';

const PageCardList = ({ images }) => {
	return (
		<div className="my-card-list">
			{images.map((card) => {
				return (
					<PageCard
						key={card.url}
						id={card.id}
						url={card.url}
						path={card.path}
						title={card.title}
						material={card.material}
						description={card.description}
					/>
				);
			})}
		</div>
	);
};
export default PageCardList;
