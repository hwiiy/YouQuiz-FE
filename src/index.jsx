import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore , applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer, {rootSaga} from './modules';
import createSagaMiddleware from 'redux-saga';
import {tempSetUser, check} from './modules/user';

const sagaMiddleware = createSagaMiddleware();
const store =createStore(rootReducer,composeWithDevTools(applyMiddleware(sagaMiddleware)));

function loadUser() {
    try {
        const user = localStorage.getItem('user');
        if (!user) return;
        store.dispatch(tempSetUser(JSON.parse(user)));
        store.dispatch(check());
    } catch (e) {
        console.log('localStorage is not working');
    }
}
sagaMiddleware.run(rootSaga);
loadUser();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)
