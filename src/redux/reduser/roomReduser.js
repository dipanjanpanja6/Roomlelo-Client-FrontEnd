import {SET_ROOMS_DATA, SET_ROOMS_DATA_NULL, SET_ALL_ROOMS_LOADED_COUNT, SET_ROOMS_PAGINATION_LIST_DATA} from '../type'

const initialState = {
    rooms:null,
    roomsCount:0
}

export default function (state = initialState, actions) {
    switch (actions.type) {
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
                rooms: actions.payload
            };
        default:
            return state

    }
}
