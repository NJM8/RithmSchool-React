import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Children from './Children';
import Types from './PropTypes'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App name="Nate" />, document.getElementById('basic-prop'));
ReactDOM.render(<Children />, document.getElementById("children"));
ReactDOM.render(<Types name="Nate" />, document.getElementById("prop-types"));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
