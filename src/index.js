import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import "./normalize.css";
import "./skeleton.css";
import App from './component';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
