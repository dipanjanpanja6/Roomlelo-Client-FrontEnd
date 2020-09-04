import { SET_SEARCH_ROOM_TYPE,SET_SEARCH_FURNISHED,SET_SEARCH_PRICE, SET_SEARCH_TEXT, SET_SEARCH_WHOM, SET_SEARCH_TYPE, SET_SEARCH_FILTER_CLEAR } from '../type'

const initialState = {

    //search
    searchWhom: '',
    searchType: '',
    searchText: '',
    searchPrice: '',
    searchRoomType: '',
    searchFurnished: '',
}

export default function (state = initialState, actions) {
    switch (actions.type) {
        case SET_SEARCH_TEXT:
            return {
                ...state,
                searchText: actions.payload
            }
        case SET_SEARCH_WHOM:
            return {
                ...state,
                searchWhom: actions.payload
            }
        case SET_SEARCH_TYPE:
            return {
                ...state,
                searchType: actions.payload
            }
        case SET_SEARCH_PRICE:
            return {
                ...state,
                searchPrice: actions.payload
            }
        case SET_SEARCH_ROOM_TYPE:
            return {
                ...state,
                searchRoomType: actions.payload
            }
        case SET_SEARCH_FURNISHED:
            return {
                ...state,
                searchFurnished: actions.payload
            }
        // case SET_SEARCH_TEXT_CLEAR:
        //     return {
        //         ...state,
        //         searchText: ""
        //     }
        case SET_SEARCH_FILTER_CLEAR:
            return {
                ...state,
                searchPrice: "",
                searchType: "",
                searchWhom: "",
                searchRoomType: '',
                searchFurnished: '',
            }
        default:
            return state

    }
}