import { createStore, combineReducers, applyMiddleware,  } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import admin from './reduser/admin'
import room from'./reduser/roomReduser'
import book from './reduser/bookReduser'
import user from './reduser/userReduser'

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
    admin:admin,
    room:room,
    book:book,
    user:user
})

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
