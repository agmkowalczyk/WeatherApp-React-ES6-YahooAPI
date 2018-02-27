import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const initialCity = 'Warszawa';

ReactDOM.render(<App initialCity={initialCity}/>, document.getElementById('root'));
