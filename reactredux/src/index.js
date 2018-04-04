import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import students from './reducers/index.js'
import {createStore} from 'redux'

const store = createStore(students,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(<App store = {store}/>, document.getElementById('root'));
registerServiceWorker();
