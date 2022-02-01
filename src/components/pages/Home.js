import React from 'react';
import HomeCardList from '../HomeCardList';
//import './pages.css';

function Home(props) {
	return (
		<React.Fragment>			
				<HomeCardList images={props.images} />			
		</React.Fragment>
	);
}

export default Home;
