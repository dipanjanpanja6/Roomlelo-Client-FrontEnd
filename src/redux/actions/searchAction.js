import { SET_SEARCH_ROOM_TYPE, SET_SEARCH_FURNISHED, SET_SEARCH_PRICE, SET_SEARCH_TEXT, SET_SEARCH_WHOM, SET_SEARCH_TYPE, SET_SEARCH_TEXT_CLEAR, SET_SEARCH_FILTER_CLEAR } from '../type'
import { SET_ROOMS_DATA, SET_ALL_ROOMS_LOADED_COUNT, SET_FILTER_ERROR } from '../type'

import { url } from '../../config/config'



export const setSearchText = (data) => (dispatch) => {
    dispatch({ type: SET_SEARCH_TEXT, payload: data })
}
export const setSearchType = (text) => (dispatch) => {
    dispatch({ type: SET_SEARCH_TYPE, payload: text })
}
export const setSearchWhom = (search) => (dispatch) => {
    dispatch({ type: SET_SEARCH_WHOM, payload: search })
}
export const setSearchPrice = (search) => (dispatch) => {
    dispatch({ type: SET_SEARCH_PRICE, payload: search })
}
export const setSearchRoomType = (search) => (dispatch) => {
    dispatch({ type: SET_SEARCH_ROOM_TYPE, payload: search })
}
export const setSearchFurnished = (search) => (dispatch) => {
    dispatch({ type: SET_SEARCH_FURNISHED, payload: search })
}

// export const setSearchTextClear = () => (dispatch) => {
//     dispatch({ type: SET_SEARCH_TEXT_CLEAR })
// }

export const setSearchFilterClear = () => (dispatch) => {
    dispatch({ type: SET_SEARCH_FILTER_CLEAR })
}

export const searchInit = (filter, i) => (dispatch) => {
    dispatch({ type: SET_FILTER_ERROR, payload: false })

    fetch(`${url}/search/room/0`, {
        method: 'POST',
        body: JSON.stringify(filter),
        headers: {
            'Content-Type': 'application/json',
        }
    }).then((response) => {
        response.json().then((data) => {
            console.log(data)
            if (data.success) {
                dispatch({ type: SET_ROOMS_DATA, payload: data.data })
                dispatch({ type: SET_ALL_ROOMS_LOADED_COUNT, payload: data.data.length })
            }
            if (data.error) {
                dispatch({ type: SET_ROOMS_DATA, payload: "" })
                dispatch({ type: SET_ALL_ROOMS_LOADED_COUNT, payload: 0 })
            }
        })
    }).catch((error) => {
        console.log(error);
    })
}