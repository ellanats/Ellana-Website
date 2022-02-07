import React from 'react';

function About() {
	return (
		<div className="card mx-auto" style={{ width: '80vw', marginTop: '2rem', transformation: 'none' }}>
			<div className="row no-gutters">
				<div className="col-auto">
					<img src="/Ellana.jpg" className="img-fluid" alt="Ellana's portrait" />
				</div>
				<div className="col mb-auto mt-auto text-center">
					<div className="card-block mx-1">
						<h3>Hello!</h3>
						<div>
							My name is Ellana, and I live with my family in NJ, USA. I hope you will enjoy looking at my
							art work!{<br />}
							{<br />} I built this website by using React.js and really loved the experience. I hope the
							Front-End Web Development will be the next chapter of my life.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
