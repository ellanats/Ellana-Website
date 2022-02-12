import React from 'react';
import ellana from './ellana.jpg';

function About() {
	return (
		<div className="container mx-auto p-0 mt-4">
			<div className="row bg-white">
				<div className="col-md-6 p-0">
					<img src={ellana} className="img-fluid" alt="Ellana's portrait" />
				</div>
				<div className="col-md-6 m-auto text-center">
					<h3>Hello!</h3>
					<p>
						My name is Ellana, and I live with my family in NJ, USA. I hope you will enjoy looking at my art
						work!{<br />}
						{<br />} I built this website by using React.js and really loved the experience. I hope the
						Front-End Web Development will be the next chapter of my life.
					</p>
				</div>
			</div>
		</div>
	);
}
export default About;
