import React, { useState, useEffect } from 'react';
import PageCard from './PageCard';
import './pageCard.css';
import ExpandCard from './ExpandCard';

const PageCardList = ({ images }) => {
	const [Zoom, setZoom] = useState(false);
	
	useEffect(() => Zoom ? <ExpandCard /> : null)

	return (
		<div className="my-card-list"
			 onClick={() => {
			setZoom((prevZoom) => !prevZoom);
			}}
		>
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
