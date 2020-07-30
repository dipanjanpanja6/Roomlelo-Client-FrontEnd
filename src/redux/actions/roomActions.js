import {SET_ROOMS_DATA, SET_ALL_ROOMS_LOADED_COUNT, SET_ROOMS_PAGINATION_LIST_DATA, SET_SEARCH_DATA_ERROR,
    SET_SEARCH_DATA, SET_NOT_SEARCHED, SET_SEARCHED, SET_SEARCH_DATA_NULL} from '../type'

import {url} from '../../config/config'

export const searchLocation = (text) => (dispatch) =>{
    if(text === ""){
        dispatch({type:SET_NOT_SEARCHED})
        dispatch(getRooms())
    }else{
        dispatch({type:SET_SEARCHED})
    }
    
    fetch(`${url}/search/properties/${text}`, {
        method:'POST',
        headers:{

        }
    })
    .then((response) =>{
        response.json()
        .then((data) =>{
            if(data.success){
                dispatch({type:SET_SEARCH_DATA, payload:data.data})
            }
            if(data.error){
                dispatch({type:SET_SEARCH_DATA_ERROR, payload:data})
            }
        })
    })
    .catch((error) =>{console.log(error)})
}

export const getRooms = () => (dispatch) => {
    fetch(`${url}/room/list`, {
        method:'GET',
        headers:{

        }
    })
        .then((response) =>{
            response.json()
                .then((data) =>{
                    console.log(data)
                    if(data.success){
                        dispatch({type:SET_ROOMS_DATA, payload:data.data})
                        dispatch({type:SET_ALL_ROOMS_LOADED_COUNT, payload: data.data.length})
                    }
                })
                .catch((error) =>{})
        })
}

export const getRoomsWithPagination = (count) => (dispatch) =>{
    fetch(`${url}/room/list/pagination/${count}`, {
        method:'GET',
        headers:{

        }
    })
        .then((response) =>{
            response.json()
                .then((data) =>{
                    if(data.success){
                        dispatch({type:SET_ROOMS_PAGINATION_LIST_DATA, payload:data.data})
                        dispatch({type:SET_ALL_ROOMS_LOADED_COUNT, payload:count + data.data.length})
                    }
                    console.log(data)
                })
        })
        .catch((error) =>{})
}

