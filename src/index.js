import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';

import registerServiceWorker from './registerServiceWorker';

// redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/';
import { BrowserRouter, Switch, Route} from 'react-router-dom'

import App from './components/App';
import Login from './components/Login'
import LoadingComponent from './components/LoadingComponent';
import Header from './routes/Header';
import NoteDetail from './components/NoteDetail'
import AuthenticatedComponent from './components/AuthenticatedComponent'

// create redux store -> reducers -> 'actions' | applyMiddleware
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));



ReactDOM.render(
  <Provider store={store} >
    <BrowserRouter>
      <LoadingComponent>
        <div>
          <Switch>
            <Route path="/login" component={Login} exact={true} />
            <AuthenticatedComponent>
              <Header />
              <Route path="/:id" component={NoteDetail} exact={true} />
              <Route path="/" component={App} exact={true} />
            </AuthenticatedComponent>
          </Switch>
        </div>
      </LoadingComponent>
    </BrowserRouter>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
