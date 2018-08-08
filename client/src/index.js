import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'rendition';

import './css/index.css';

const container = document.querySelector('.app');

ReactDOM.render(
	<Provider>
		<App />
	</Provider>, 
	container
);
