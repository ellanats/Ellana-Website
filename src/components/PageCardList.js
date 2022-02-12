import React from 'react';
import PageCard from './PageCard';
import './pageCard.css';

const PageCardList = ({ images }) => {
	return (
		<div className="my-card-list">
			{images.map((img) => {
				return (
					<PageCard
						key={img.url}
						id={img.id}
						url={img.url}
						path={img.path}
						title={img.title}
						material={img.material}
						description={img.description}
					/>
				);
			})}
		</div>
	);
};
export default PageCardList;
