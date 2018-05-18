import React from 'react';
import { withRouter } from 'react-router-dom';

import CloseIcon from './assets/close.svg';
import './style.scss';

const Close = props => <CloseIcon className="close" onClick={() => props.history.goBack()} />;

export default withRouter(Close);
