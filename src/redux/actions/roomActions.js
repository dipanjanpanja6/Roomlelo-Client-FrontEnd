import {
    SET_ALL_ROOMS_LOADED_COUNT, SET_ROOMS_PAGINATION_LIST_DATA, SET_ROOM_PAGINATION_ERROR,
} from '../type'
import { url } from '../../config/config'


export const getRoomsWithFilterPagination = (filter, count) => (dispatch) => {
    fetch(`${url}/search/room/${count}`, {
        method: 'POST',
        body: JSON.stringify(filter),
        headers: {
            'Content-Type': 'application/json',
        }
    }).then((response) => {
        response.json().then((data) => {
            console.log(data);
            if (data.success) {
                if (data.data.length !== 0) {
                    dispatch({ type: SET_ROOMS_PAGINATION_LIST_DATA, payload: data.data })
                    dispatch({ type: SET_ALL_ROOMS_LOADED_COUNT, payload: count + data.data.length })
                }
            }
            if (data.error) {
                dispatch({ type: SET_ROOM_PAGINATION_ERROR, payload: true })
            }
        })
    }).catch((error) => {
        console.log(error);
    })
}

