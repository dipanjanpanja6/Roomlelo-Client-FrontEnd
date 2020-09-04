import {
    SET_ROOMS_DATA, SET_ALL_ROOMS_LOADED_COUNT, SET_ROOMS_PAGINATION_LIST_DATA, SET_SEARCH_DATA_ERROR, SET_ROOM_DETAILS, SET_ERROR_DATA_FILTER,
    SET_SEARCH_DATA, SET_NOT_SEARCHED, SET_SEARCHED, SET_FILTER_URL_DATA, SET_SEARCH_DATA_NULL, SET_DATA_WITH_TYPES, SET_NO_DATA_WITH_TYPES,
    SET_FILTER_WITH_TYPE_DATA, SET_FILTER_WITH_TYPE_DATA_ERROR, SET_FILTER_FOR_WHOM_DATA_NULL, SET_FILTERED,
    SET_LOCATIONS, SET_SEARCH_PLACE_NAME, SET_PAGINATION_LOCATIONS, SET_FILTER_ERROR_NULL, SET_FILTER_ERROR, SET_ROOM_PAGINATION_ERROR, SET_NOT_FILTERED, SET_SEARCH_TEXT_AUTO
} from '../type'


import { url } from '../../config/config'








export const search = (search, price, type, forWhom) => (dispatch) => {
    dispatch({ type: SET_FILTER_ERROR_NULL })
    if (search === "" && price === "" && type === "" && forWhom === "") {
        dispatch({ type: SET_NOT_SEARCHED })
    } else {
        dispatch({ type: SET_SEARCHED })
    }
    const filter = {
        price: price,
        type: type,
        forWhom: forWhom
    }
    fetch(`${url}/search/find/${search}`, {
        method: 'POST',
        body: JSON.stringify(filter),
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then((response) => {
            response.json()
                .then((data) => {
                    console.log(data)
                    if (data.success) {
                        dispatch({ type: SET_ROOMS_DATA, payload: data.data })
                        dispatch({ type: SET_ALL_ROOMS_LOADED_COUNT, payload: data.data.length })
                    }
                    if (data.error) {
                        dispatch({ type: SET_ROOMS_DATA, payload: "" })
                        dispatch({ type: SET_ALL_ROOMS_LOADED_COUNT, payload: 0 })
                        dispatch({ type: SET_FILTER_ERROR })
                    }
                })
        })
        .catch((error) => {

        })
}


export const clearFilter = () => (dispatch) => {
    dispatch({ type: SET_NO_DATA_WITH_TYPES })
    dispatch({ type: SET_FILTER_FOR_WHOM_DATA_NULL })
    dispatch(getRooms())
}




export const getRoomDetails = (id) => (dispatch) => {
    fetch(`${url}/room/details/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then((response) => {
            response.json().then((data) => {
                dispatch({ type: SET_ROOM_DETAILS, payload: data.data })
            })


        })
        .catch((error) => {
            console.log(error)
        })
}



export const getRoomWithTypePagination = (type, count) => (dispatch) => {

    fetch(`${url}/filter/rooms/type/${type}/pagination/${count}`, {
        method: 'GET',
        headers: {

        }
    })
        .then((response) => {
            response.json()
                .then((data) => {
                    console.log(data)
                    if (data.success) {
                        dispatch({ type: SET_ROOMS_PAGINATION_LIST_DATA, payload: data.data })
                        dispatch({ type: SET_ALL_ROOMS_LOADED_COUNT, payload: count + data.data.length })
                    }
                })
        })
        .catch((error) => {

        })
}




export const getRooms = () => (dispatch) => {
    
    dispatch({ type: SET_ROOM_PAGINATION_ERROR, payload: false })
    fetch(`${url}/room/list`, {
        method: 'GET',
    })
        .then((response) => {
            response.json()
                .then((data) => {
                    console.log(data)
                    if (data.success) {
                        dispatch({ type: SET_ROOMS_DATA, payload: data.data })
                        dispatch({ type: SET_ALL_ROOMS_LOADED_COUNT, payload: data.data.length })
                    } else {
                        dispatch({ type: SET_FILTER_ERROR })
                        dispatch({ type: SET_ROOMS_DATA, payload: "" })
                        dispatch({ type: SET_ALL_ROOMS_LOADED_COUNT, payload: 0 })
                    }
                })
                .catch((error) => { })
        })
}

export const getRoomsWithPagination = (count) => (dispatch) => {
    fetch(`${url}/room/pagination/${count}/list`, {
        method: 'GET',
        headers: {

        }
    })
        .then((response) => {
            response.json()
                .then((data) => {
                    console.log(data);
                    if (data.success) {
                        if (data.data.length !== 0) {
                            dispatch({ type: SET_ROOMS_PAGINATION_LIST_DATA, payload: data.data })
                            dispatch({ type: SET_ALL_ROOMS_LOADED_COUNT, payload: count + data.data.length })
                        }
                    }
                    if (data.error) {
                        dispatch({ type: SET_ROOM_PAGINATION_ERROR,payload: true  })
                    }
                })
        })
        .catch((error) => { 
            console.log(error);
        })
}
export const getRoomsWithFilterPagination = (filter,count) => (dispatch) => {
    fetch(`${url}/search/room/${count}`, {
        method: 'POST',
        body: JSON.stringify(filter),
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then((response) => {
            response.json()
                .then((data) => {
                    console.log(data);
                    if (data.success) {
                        if (data.data.length !== 0) {
                            dispatch({ type: SET_ROOMS_PAGINATION_LIST_DATA, payload: data.data })
                            dispatch({ type: SET_ALL_ROOMS_LOADED_COUNT, payload: count + data.data.length })
                        }
                    }
                    if (data.error) {
                        dispatch({ type: SET_ROOM_PAGINATION_ERROR,payload: true  })
                    }
                })
        })
        .catch((error) => { 
            console.log(error);
        })
}

