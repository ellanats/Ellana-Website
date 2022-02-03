import React from 'react';
//import { Card } from 'react-bootstrap';

function About() {
	return (
		<div className="card mx-auto" style={{ width: '65%', marginTop: '2rem', pointerEvents: 'none' }}>
			<div className="row no-gutters">
				<div className="col-auto">
					<img src="/Ellana.jpg" className="img-fluid" alt="" />
				</div>
				<div className="col">
					<div className="card-block px-2">
					<br/>
						<h3 className="text-center">Hello!</h3>
						<p className="card-text">
							My name is Ellana, and I live with my family in NJ, USA.  I hope you will enjoy
							looking at my art work!{<br/>}{<br/>} I built this website by using React.js and really loved the experience. I hope the Front-End Web Development will be the next chapter of my life.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
