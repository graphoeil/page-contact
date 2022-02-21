// Imports
import React from 'react';
import { inject, observer } from 'mobx-react';
import './css/displayMain.css';
import Loader from './components/Loader';
import Slider from './components/Slider';
import FormulaireSection from './components/FormulaireSection';
import PhotoLarge from './components/PhotoLarge';
import GMap from './components/GMap';
import Footer from './components/Footer';

// Variables
const Modernizr = window.Modernizr;

// Classe
class App extends React.Component{

	// Render
	render(){
		return(
			<React.Fragment>

				{/* Loader */}
				{
					this.props.contactStore.loaderVisible && <Loader/>
				}
				{/* Loader */}

				{/* Slider */}
				<Slider/>
				{/* Slider */}

				{/* Section > Formulaire */}
				<FormulaireSection/>
				{/* Section */}

				{/* PhotoLarge */}
				<PhotoLarge photo="http://www.graphoeilmultimedia.com/reactDev/pageContact/imagesWWW/rue.jpg" legende="Une rue dans Paris" />
				{/* PhotoLarge */}

				{/* Section */}
				<section>
					<h2>Zone d'activité</h2>
					<p className="contactP">Je travaille en hybride ou en full-remote.</p>
				</section>
				{/* Section */}

				{/* GMap */}
				<GMap latitude="48.858016" longitude="2.343278" zoom="7"/>
				{/* GMap */}

				{/* Footer */}
				<Footer/>
				{/* Footer */}

			</React.Fragment>
		)
	};

	// Modernizr
	componentDidMount(){
		if (Modernizr.touchevents){ this.props.contactStore.toggleTouch(); }
	};

};

// Export
export default inject('contactStore')(observer(App));