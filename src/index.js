// Imports
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Stores MobX
import ContactStore from './stores/ContactStore';
import { Provider } from 'mobx-react';
const contactStore = new ContactStore();
const stores = { contactStore };

// ReactDOM
ReactDOM.render(<Provider { ...stores }><App/></Provider>, document.getElementById('root'));