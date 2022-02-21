// Imports
import React from 'react';
import * as classNames from 'classnames';

// Variables
const $ = window.jQuery;

// Classe
class FormulaireForm extends React.Component{

	// Constructeur
	constructor(props){
		super(props);
		this.state = {
			codeSecurite:Math.round(Math.random()*1000),
			nom:'', nomValide:false,
			societe:'',
			email:'', emailValide:false,
			telephone:'',
			message:'', messageValide:false,
			numeroDeControle:'', numeroDeControleValide:false,
			formulaireValide:false
		};
		this.formRef = React.createRef();
	}

	// Render
	render(){

		// Classes dynamiques
		// Champ nom
		const champNom = classNames({
			'obligatoire':true,
			'champInvalide':!this.state.nomValide
		});
		const champEmail = classNames({
			'obligatoire':true,
			'champInvalide':!this.state.emailValide
		});
		const champMessage = classNames({
			'obligatoire':true,
			'champInvalide':!this.state.messageValide
		});
		const champControle = classNames({
			'obligatoire':true,
			'champInvalide':!this.state.numeroDeControleValide
		});

		// Style supplémentaire pour les champs de contrôle
		const securiteStyles = () => {
			var styles;
			if (this.state.numeroDeControleValide){
				styles = { backgroundColor:'#4c9abf' };
			} else {
				styles = { backgroundColor:'firebrick' };
			}
			return styles;
		};

		// Return
		return(
			<form id="formulaire" ref={ this.formRef } onSubmit={ this.handleSubmit.bind(this) }>
				<input type="hidden" name="numeroVerif" id="numeroVerif" value={ this.state.codeSecurite }/>
				<div className="formulaireGauche">
					<label htmlFor="nom">Civilité, nom, prénom*</label>
					<input type="text" id="nom" name="nom" value={ this.state.nom } className={ champNom } onChange={ this.handleChange.bind(this) } required/>
					<label htmlFor="societe">Société</label>
					<input type="text" id="societe" name="societe" value={ this.state.societe } onChange={ this.handleChange.bind(this) } />
				</div>
				<div className="formulaireDroit">
					<label htmlFor="email">Email*</label>
					<input type="email" id="email" name="email" value={ this.state.email } className={ champEmail } onChange={ this.handleChange.bind(this) } required/>
					<label htmlFor="telephone">Téléphone</label>
					<input type="text" id="telephone" name="telephone" value={ this.state.telephone } onChange={ this.handleChange.bind(this) }/>
				</div>
				<div className="formulaireFull">
					<label htmlFor="message">Message*</label>
					<textarea name="message" id="message" value={ this.state.message } className={ champMessage } onChange={ this.handleChange.bind(this) }></textarea>
				</div>
				<div className="formulaireFull">
					<label id="labelSecurite">Recopiez ce code* <span id="numeroSecurite" style={ securiteStyles() }>{ this.state.codeSecurite }</span></label>
					<input type="text" id="numeroDeControle" name="numeroDeControle" value={ this.state.numeroDeControle } className={ champControle } onChange={ this.handleChange.bind(this) } required/>
				</div>
				<div className="conteneurBtnSubmit">
					<input type="submit" name="btnSubmit" id="btnSubmit" disabled={ !this.state.formulaireValide } value="Envoyer le message"/>
				</div>
			</form>
		)
	};

	// MAJ du state et vérification des champs
	handleChange(e){
		e.persist();
		this.setState({ [e.target.name]:e.target.value }, function(){
			this.valideChamps(e.target.name, e.target.value);
		});
	};

	// Vérification des champs et formulaire valide ?
	valideChamps(champ, valeur){
		let { nomValide, emailValide, messageValide, numeroDeControleValide, codeSecurite } = this.state;
		// Quel champ est en cours de modification
		switch (champ){
			case 'nom':
				nomValide = valeur.length >= 5;
				break;
			case 'email':
				emailValide = valeur.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
				break;
			case 'message':
				messageValide = valeur.length >= 20;
				break;
			case 'numeroDeControle':
				numeroDeControleValide = Number(valeur) === Number(codeSecurite);
				break;
			default: break; 
		}
		// MAJ du state
		this.setState({ nomValide, emailValide, messageValide, numeroDeControleValide }, function(){
			// Formulaire valide ?
			if (nomValide && emailValide && messageValide && numeroDeControleValide){
				this.setState({ formulaireValide:true });
			} else {
				this.setState({ formulaireValide:false });
			}
		});
	};

	// Envoi du formulaire
	handleSubmit(e){
		e.preventDefault();
		let donnees = $(this.formRef.current).serialize();
		$.post('http://www.graphoeilmultimedia.com/reactDev/pageContact/utilsWWW/envoiMail.php', donnees).promise().done(() => {
			this.props.slideConteneur();
		}).fail(() => {
			console.log('Erreur d\'envoi du formulaire');
		});
	};

};

// Export
export default FormulaireForm;