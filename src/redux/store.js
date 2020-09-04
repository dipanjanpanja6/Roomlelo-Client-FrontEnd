import { createStore, combineReducers, applyMiddleware,  } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import room from'./reduser/roomReduser'
import book from './reduser/bookReduser'
import user from './reduser/userReduser'
import search from './reduser/searchReduser'

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
 
    room:room,
    book:book,
    user:user,
    search:search,
})

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
