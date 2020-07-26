import { createStore, combineReducers, applyMiddleware,  } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import admin from './reduser/admin'

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
    admin:admin
})

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;