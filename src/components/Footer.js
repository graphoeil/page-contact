// Imports
import React from 'react';

// Classe
class Footer extends React.Component{

	// Render
	render(){
		return(
			<footer>
				<div className="insideFooter">
					<div id="socialFooter">
						<a href="https://twitter.com/graphoeil" rel="noopener noreferrer" target="_blank" title="Suivez-moi sur Twitter">
							<i className="fab fa-twitter"></i>
						</a>
						<span>Frédéric Hoyez</span>
						<a href="https://www.linkedin.com/in/fr%C3%A9d%C3%A9ric-hoyez-92230b222/" rel="noopener noreferrer" target="_blank" title="Suivez-moi sur LinkedIn">
							<i className="fab fa-linkedin"></i>
						</a>
					</div>
					<div className="adresseFooter">
						Intégrateur web (Mobile-first)<br/>
						Développeur Front-End (JS, React, jQuery)
					</div>
				</div>
			</footer>
		)
	};

};

// Export
export default Footer;