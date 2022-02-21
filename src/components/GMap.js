// Imports
import React from 'react';

// Variables
const google = window.google;

// Classe
class GMap extends React.Component{

	// Constructeur
	constructor(props){
		super(props);
		this.mapRef = React.createRef();
	}

	// Render
	render(){
		return <div ref={ this.mapRef } id="laGoogleMap"></div>
	};

	// Google Map init
	componentDidMount(){
		// Conteneur de la map
		const conteneurMap = this.mapRef.current;
		// Centre de la map
		const centreCarte = new google.maps.LatLng(this.props.latitude, this.props.longitude);
		// Options de la map
		const optionsCarte = {
			scrollwheel:false,
			center:centreCarte,
			mapTypeId:google.maps.MapTypeId.ROADMAP,
			zoom:Number(this.props.zoom),
			// Options barre map | satellite
			mapTypeControl:true,
			mapTypeControlOptions:{
				style:google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
				position:google.maps.ControlPosition.LEFT_TOP
			},
			// Zoom options
			zoomControl:true,
			zoomControlOptions:{
				style:google.maps.ZoomControlStyle.SMALL,
				position:google.maps.ControlPosition.LEFT_CENTER
			}
		};
		// Init map
		new google.maps.Map(conteneurMap, optionsCarte);
	};

};

// Export
export default GMap;