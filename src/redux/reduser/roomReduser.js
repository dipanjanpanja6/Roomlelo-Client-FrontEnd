import {SET_ROOMS_DATA, SET_ALL_ROOMS_LOADED_COUNT, SET_ROOMS_PAGINATION_LIST_DATA, SET_FILTER_WITH_TYPE_DATA,SET_FILTER_ERROR, SET_ROOM_PAGINATION_ERROR} from '../type'

const initialState = {
    rooms:null,
    roomsCount:0,
    error:false, 
}

export default function (state = initialState, actions) {
    switch (actions.type) {
      
        case SET_FILTER_ERROR:
            return {
                ...state,
                error:actions.payload
            }
 
        case SET_ROOM_PAGINATION_ERROR:
            return{
                ...state,
                error:actions.payload
            }
 
        case SET_FILTER_WITH_TYPE_DATA:
            return{
                ...state,
                rooms:actions.payload
            }
       
        case SET_ALL_ROOMS_LOADED_COUNT:
            return {
                ...state,
                roomsCount: actions.payload
            };
        case SET_ROOMS_PAGINATION_LIST_DATA:
            return {
                ...state,
                rooms:[...state.rooms, ...actions.payload]
            }
        case SET_ROOMS_DATA:
            return {
                ...state,
                rooms: actions.payload,
                // search_error:null
            };
        default:
            return state

    }
}
