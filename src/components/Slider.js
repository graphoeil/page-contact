// Imports
import React from 'react';
import { inject, observer } from 'mobx-react';

// Variables
const $ = window.jQuery;
const gsap = window.gsap;
const SplitText = window.SplitText;

// Classe
class Slider extends React.Component{

	// Constructeur
	constructor(props){
		super(props);
		this.titreRef = React.createRef();
	}

	// Render
	render(){
		// LoaderOut
		if (!this.props.contactStore.loaderVisible){ this.animeTitre(); }
		// Styles
		const stylesFond = () => {
			let styles = {
				backgroundImage:'url("http://www.graphoeilmultimedia.com/reactDev/pageContact/imagesWWW/pissenlit.jpg")',
				backgroundSize:'cover',
				backgroundRepeat:'no-repeat',
				backgroundPosition:'center center'
			};
			if (!this.props.contactStore.isTouch){ styles.backgroundAttachment = 'fixed'; }
			return styles;
		};
		// Return
		return(
			<div id="slider">
				<div className="innerSlider">
					<div className="fondSlider" style={ stylesFond() }></div>
					<div className="titreSlider" ref={ this.titreRef }>Diffuser</div>
				</div>
			</div>
		)
	};

	// Animation du titre
	animeTitre(){
		const $titreSlider = $(this.titreRef.current);
		const tlTitre = gsap.timeline();
		const titreSplit = new SplitText($titreSlider,{ type:'chars' });
		titreSplit.split({ type:'chars' });
		tlTitre
		.set(titreSplit.chars,{ alpha:0, rotationY:360, x:'-=100px', scale:2 })
		.set($titreSlider,{ opacity:1 })
		.to(titreSplit.chars,{ duration:1, alpha:1, rotationY:0, x:0, scale:1, ease:'power2.inOut', stagger:{ each:0.1 } });
	};

	// Effet de parallaxe
	componentDidMount(){
		if (!this.props.contactStore.isTouch){
			let scrollVal, yScroll;
			const $window = $(window);
			const $titreSlider = $(this.titreRef.current);
			$window.on('scroll', function(){
				scrollVal = $window.scrollTop();
				yScroll = scrollVal / 8;
				$titreSlider.css({ top: 50 + yScroll + '%' });
			}).trigger('scroll');
		}
	};

};

// Export
export default inject('contactStore')(observer(Slider));