import React from 'react';
import ReactDOM from 'react-dom';

import './styles/main.scss';

import Routes from './routes';

const App = () => <Routes />;

ReactDOM.render(<App />, document.getElementById('root'));
