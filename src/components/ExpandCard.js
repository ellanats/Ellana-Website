import React from 'react';
import './pageCard.css';

function ExpandCard({ url, title, material, description }) {
	return (
		<div className="my-expanded-card">
			<div className="row no-gutters">
				<div className="col-auto">
					<img src={url} className="img-fluid" alt="" />
				</div>
				<div className="col">
					<div className="card-block px-2">
						<br />
						<h3 className="text-center">{title}</h3>
						<p className="card-text">{material}</p>
						<p className="card-text">{description}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ExpandCard;
