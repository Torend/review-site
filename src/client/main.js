import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {BrowserRouter, Route, Router, Link, Switch} from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import createSagaMiddleware from 'redux-saga';
import Sagas from './sagas';
//import theme - change nova-light to other theme as needed
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {history} from './components/history-helper'
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import HomePage from "./components/HomePage/HomePage";


//create saga middleware
const sagaMiddleware = createSagaMiddleware();

//create store, add reducers, attach saga
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
);

//run saga(s)
sagaMiddleware.run(Sagas);

// Render the main component into the dom

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('app'));


ReactDOM.render(
        <Provider store={store}>
            <Router history={history}>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/SignIn">Login</Link></li>
                    </ul>
                    {/*<Route exact path="/" component={App} />*/}
                    {/*<Route path="/login" component={LoginPage} />*/}
                </div>
                <App />
                <Switch>
                    <Route exact path="/SignIn" component={SignIn}/>
                    <Route exact path="/SignUp" component={SignUp}/>
                    <Route exact path="/Home" component={HomePage}/>
                </Switch>
            </Router>

        </Provider>,
    document.getElementById('app')
);


