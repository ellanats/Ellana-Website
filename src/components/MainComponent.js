import React, { Component } from 'react';
import Navigation from './Navigation';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import BeanArt from './pages/BeanArt';
import BlackWhite from './pages/BlackWhite';
import Jewelry from './pages/Jewelry';
import OilPastels from './pages/OilPastels';
import Pointilism from './pages/Pointilism';
import StainedGlass from './pages/StainedGlass';
import { images } from './images';

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			images: images
		};
	}

	render() {
		const HomePage = () => {
			return <Home images={this.state.images} />;
		};
		const BeanArtPage = () => {
			return <BeanArt images={this.state.images} />;
		};
		const BlackWhitePage = () => {
			return <BlackWhite images={this.state.images} />;
		};
		const JewelryPage = () => {
			return <Jewelry images={this.state.images} />;
		};
		const OilPastelsPage = () => {
			return <OilPastels images={this.state.images} />;
		};
		const PointilismPage = () => {
			return <Pointilism images={this.state.images} />;
		};
		const StainedGlassPage = () => {
			return <StainedGlass images={this.state.images} />;
		};

		return (
			<React.Fragment>
				<Router>
					<Navigation />
					<Routes>
						<Route path="/Ellana-Website" element={<HomePage />} />
						<Route path="/Ellana-Website/bean-art" element={<BeanArtPage />} />
						<Route path="/Ellana-Website/black-white" element={<BlackWhitePage />} />
						<Route path="/Ellana-Website/jewelry" element={<JewelryPage />} />
						<Route path="/Ellana-Website/oil-pastels" element={<OilPastelsPage />} />
						<Route path="/Ellana-Website/pointilism" element={<PointilismPage />} />
						<Route path="/Ellana-Website/stained-glass" element={<StainedGlassPage />} />
						<Route path="/Ellana-Website/about" element={<About />} />
						<Route exact path="/Ellana-Website/contact" element={<Contact />} />
					</Routes>
				</Router>
			</React.Fragment>
		);
	}
}

export default Main;
