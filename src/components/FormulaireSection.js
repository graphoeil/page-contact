// Imports
import React from 'react';
import FormulaireConteneur from './FormulaireConteneur';

// Classe
class FormulaireSection extends React.Component{

	// Render
	render(){
		return(
			<section>
				<div className="titreSection">contact</div>
				<p className="contactP">Un partenariat, une offre d'emploi, autre chose...</p>
				<p className="contactP">
					<a href="mailto:graphoeil@gmail.com">graphoeil@gmail.com</a>
				</p>
				<p className="contactP">
					<strong style={ { paddingRight:'5px' } }>Formulaire de contact</strong>
					<span style={ { fontSize:'10px', fontStyle:'italic', color:'firebrick' } }>(* champs obligatoires)</span>
				</p>
				{/* Conteneur Formulaire */}
				<FormulaireConteneur/>
				{/* Conteneur Formulaire */}
			</section>
		)
	};

};

// Export
export default FormulaireSection;