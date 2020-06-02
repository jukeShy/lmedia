import React from 'react';
import { render } from 'react-dom';
import { App } from './App';

import 'milligram/dist/milligram.min.css';
import './index.scss';

const root = document.getElementById('root');

render(<App />, root);
