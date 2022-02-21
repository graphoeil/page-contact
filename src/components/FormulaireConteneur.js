// Imports
import React from 'react';
import { inject, observer } from 'mobx-react';
import FormulaireForm from './FormulaireForm';
import FormulaireMerci from './FormulaireMerci';

// Variables
const $ = window.jQuery;

// Classe
class FormulaireConteneur extends React.Component{

	// Constructeur
	constructor(props){
		super(props);
		this.conteneurFormRef = React.createRef();
	}

	// Render
	render(){
		return(
			<div id="conteneurFormulaire" ref={ this.conteneurFormRef }>
				{
					this.props.contactStore.formulaireVisible ? <FormulaireForm slideConteneur={ this.slideConteneur.bind(this) }/> : <FormulaireMerci/>
				}
			</div>
		)
	};

	// Formulaire envoyé affichage du message de remerciement
	slideConteneur(){
		const $conteneurFormulaire = $(this.conteneurFormRef.current);
		$conteneurFormulaire.slideUp('slow', () => {
			this.props.contactStore.hideFormulaire();
			$conteneurFormulaire.slideDown('slow');
		});
	};

};

// Export
export default inject('contactStore')(observer(FormulaireConteneur));