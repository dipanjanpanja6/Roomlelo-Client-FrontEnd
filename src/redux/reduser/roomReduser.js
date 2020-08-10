import {SET_ROOMS_DATA, SET_ROOMS_DATA_NULL, SET_ALL_ROOMS_LOADED_COUNT, SET_ROOMS_PAGINATION_LIST_DATA,
    SET_SEARCHED, SET_NOT_SEARCHED, SET_DATA_WITH_TYPES,SET_FILTER_WITH_TYPE_DATA_ERROR,
    SET_SEARCH_DATA, SET_SEARCH_DATA_ERROR, SET_FILTER_WITH_TYPE_DATA, SET_FILTERED, SET_NOT_FILTERED,
    SET_ROOM_DETAILS, SET_LOCATIONS, SET_PAGINATION_LOCATIONS, SET_ROOM_PAGINATION_ERROR, SET_MOBILE_NUMBER} from '../type'

const initialState = {
    rooms:null,
    roomsCount:0,
    search:null,
    search_error:null,
    searched:false,
    filtered:false,
    roomDetails:null,
    locations:null,
    error:false,
    number:""
}

export default function (state = initialState, actions) {
    switch (actions.type) {
        
        case SET_NOT_FILTERED:
            return{
                ...state,
                filtered:false
            }
        case SET_ROOM_PAGINATION_ERROR:
            return{
                ...state,
                error:true
            }
        case SET_PAGINATION_LOCATIONS:
            return{
                ...state,
                locations:[...state.locations, ...actions.payload]
            }
        case SET_LOCATIONS:
            return{
                ...state,
                locations:actions.payload
            }
        case SET_ROOM_DETAILS:
            return{
                ...state,
                roomDetails:actions.payload
            }
        case SET_FILTERED:
            return{
                ...state,
                filtered:true
            }
        case SET_FILTER_WITH_TYPE_DATA_ERROR:
            return{
                ...state,
                filterError:actions.payload
            }
        case SET_FILTER_WITH_TYPE_DATA:
            return{
                ...state,
                rooms:actions.payload
            }
        case SET_NOT_SEARCHED:
            return{
                ...state,
                search:null,
                searched:false
            }
        case SET_SEARCHED:
            return{
                ...state,
                searched:true
            }
        case SET_SEARCH_DATA_ERROR:
            return {
                ...state,
                rooms:null,
                search_error:actions.payload
            }
        case SET_SEARCH_DATA:
            return{
                ...state,
                rooms:actions.payload,
                search_error:null
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
                search_error:null
            };
        default:
            return state

    }
}
