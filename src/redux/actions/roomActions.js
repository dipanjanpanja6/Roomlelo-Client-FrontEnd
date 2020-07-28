import {SET_ROOMS_DATA, SET_ALL_ROOMS_LOADED_COUNT, SET_ROOMS_DATA_NULL} from '../type'

import {url} from '../../config/config'
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
    fetch(`${url}/list/pagination/${count}`, {
        method:'GET',
        headers:{

        }
    })
        .then((response) =>{
            response.json()
                .then((data) =>{
                    console.log(data)
                })
        })
        .catch((error) =>{})
}

