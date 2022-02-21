// Imports
import React from 'react';

// Classe
class PhotoLarge extends React.Component{

	// Render
	render(){
		return(
			<div className="photoLarge">
				<img src={ this.props.photo } alt={ this.props.legende } />
			</div>
		)
	};

};

// Export
export default PhotoLarge;