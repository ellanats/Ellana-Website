import React, { Component } from 'react';
import './HomeCard.css';

//const HomeCard = (props) => {
//const [state, setState] = useState(props.title)

class HomeCard extends Component {
	render() {
		const { title, url } = this.props.image;
		return (
			<div className="card-container">
				<div className="image-container">
					<img className="img-responsive center-block" alt={title} src={url} />
					<div className="text-thumb">{title}</div>
				</div>
			</div>
		);
	}
}
export default HomeCard;
