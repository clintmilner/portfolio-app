import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

console.log('app.js has loaded and is running and loading via webpack-dev-server');

ReactDOM.render(<p>Render the Boilerplate</p>, document.getElementById('app'));