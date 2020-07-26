import {LOGIN, ACTIVATE, AUTH,USER,} from '../type'

const initialState = {
    login: {}, 
    activate:'',
    auth:null, 
    user:'',


}

export default function (state = initialState, actions) {
    switch (actions.type) {

      
        case USER:
            return {
                ...state,
                user: actions.payload
            }
        case AUTH:
            return {
                ...state,
                auth: actions.payload
            }
      
        case LOGIN:
            return {
                ...state,
                login: actions.payload
            }
        case ACTIVATE:
            return {
                ...state,
                activate: actions.payload
            }


        default:
            return state

    }
}