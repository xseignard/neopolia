import React from 'react';
import { render } from 'react-dom';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';

import App from './components/App';
import './styles/main.scss';

OfflinePluginRuntime.install();
render(<App />, document.getElementById('root'));
