import {SET_ROOMS_DATA,MOBILE_AUTH_CODE_SENDED_NULL, SET_MOBILE_AUTH_ERROR_DATA,  MOBILE_AUTH_CODE_SENDED,
     SET_MOBILE_NUMBER} from '../type'

const initialState = {
    number:"",
    sended:false,
    error:{},
    auth:true
}

export default function (state = initialState, actions) {
    switch (actions.type) {
        case SET_MOBILE_NUMBER:
            return{
                ...state,
                number:actions.payload
            }
        case SET_MOBILE_AUTH_ERROR_DATA:
            return{
                ...state,
                error:actions.payload
            }
        case MOBILE_AUTH_CODE_SENDED:
            return{
                ...state,
                sended:true
            }
        case MOBILE_AUTH_CODE_SENDED_NULL:
            return{
                ...state,
                sended:false
            }

        default:
            return state

    }
}
