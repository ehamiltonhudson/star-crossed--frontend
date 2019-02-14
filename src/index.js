import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './styling/index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
// import ActionCableConsumer from 'actioncable';
// import { ActionCableProvider } from 'react-actioncable-provider';
// import registerServiceWorker from './registerServiceWorker';
import Chat from './components/Chat'
import ChatsBase from './components/ChatsBase'
import rootReducer from './reducers/rootReducer';
import { API_WS_ROOT } from './constants/ActionTypes';
import Cable from 'actioncable'
// import * as serviceWorker from './serviceWorker';
import routes from './routes.js';

const store = createStore(rootReducer,
  compose(applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__())
);

// const cable = ActionCableConsumer.createConsumer('ws://localhost:3000/api/v1/cable');

ReactDOM.render(
  <Provider store={store}>
    <Router>
      {/* <App>
        <ActionCableProvider url={API_WS_ROOT}>
          <Chats />
        </ActionCableProvider>
      </App> */}
      {/* <ActionCableProvider cable={cable}> */}
      <App/>
      {/* </ActionCableProvider> */}
    </Router>
  </Provider>,
  document.getElementById('root')
);




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
// import * as serviceWorker from './serviceWorker';
// registerServiceWorker();
