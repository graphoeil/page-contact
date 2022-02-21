// Imports
import { observable, makeObservable, action } from 'mobx';

// Classe
class ContactStore{

	// Constructeur
	constructor(){
		// Variables observables
		makeObservable(this, {
			loaderVisible:observable,
			isTouch:observable,
			formulaireVisible:observable
		});
	};

	// Variables
	//
	// Loader
	loaderVisible = true;
	// Touch
	isTouch = false;
	// Formulaire
	formulaireVisible = true;

	// Méthodes
	//
	// Loader
	hideLoader = action(() => {
		this.loaderVisible = false;
	});
	// Touch
	toggleTouch = action(() => {
		this.isTouch = true;
	});
	// Formulaire
	hideFormulaire = action(() => {
		this.formulaireVisible = false;
	});

};

// Export
export default ContactStore;