// Imports
import React from 'react';
import SVG from './SVG';
import { inject } from 'mobx-react';

// Variables
const $ = window.jQuery;
const gsap = window.gsap;

// Classe
class Loader extends React.Component{

	// Constructeur
	constructor(props){
		super(props);
		this.loaderRef = React.createRef();
	};

	// Render
	render(){
		return(
			<div id="loader" ref={ this.loaderRef }>
				<div id="logoPreloader">
					<SVG/>
				</div>
			</div>
		)
	};

	// Animation et chargement de l'image de fond
	componentDidMount(){

		// Variables
		const $loader = $(this.loaderRef.current);
		const $logoPreloader = $loader.children('#logoPreloader');
		const $svg = $logoPreloader.find('svg');
		const $lettresLoader = $svg.find('.lettreLoader');
		const tlLoader = gsap.timeline({ repeat:-1 });

		// Animation
		tlLoader
		.set($lettresLoader,{ y:-30 })
		.set($logoPreloader,{ display:'block' })
		// Animation depuis le début le G de GRAPHOEIL
		.to($lettresLoader,{ y:0, ease:'none', duration:0.4, stagger:{ each:0.05 } })
		.add('lettresVisible')
		// Ici stagger each:-0.05 pour démarrer depuis la fin, le L de GRAPHOEIL
		.to($lettresLoader,{ y:30, ease:'none', duration:0.4, stagger:{ each:-0.05 } },'lettresVisible+=0.7');

		// Chargement de l'image de fond
		const image = new Image();
		image.src = 'http://www.graphoeilmultimedia.com/reactDev/pageContact/imagesWWW/pissenlit.jpg';
		image.onload = () => {
			setTimeout(() => {
				$loader.fadeOut('slow', () => {
					tlLoader.kill();
					this.props.contactStore.hideLoader();
				});
			}, 1600);
		};

	};

};

// Export
export default inject('contactStore')(Loader);