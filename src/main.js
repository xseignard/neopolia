import React from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './components/App';
import './styles/main.scss';

render(<App />, document.getElementById('root'));
registerServiceWorker();
