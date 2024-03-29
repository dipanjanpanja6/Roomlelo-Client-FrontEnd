import { SET_SCHEDULE_BOOKED_SUCCESS, SET_BOOKED_SUCCESS, SET_SCHEDULE_BOOKED_CLEAR } from '../type'
import { url } from '../../config/config'
import { toast } from 'react-toastify'

export const visitSchedule = (data) => (dispatch) => {
    console.log("visit call");
    fetch(`${url}/room/schedule/visit`, {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        }
    }).then((response) => {
        response.json().then((data) => {
            console.log(data)
            if (data.success) {
                dispatch({ type: SET_SCHEDULE_BOOKED_SUCCESS, payload: true })
            } else {
                dispatch({ type: SET_SCHEDULE_BOOKED_SUCCESS, payload: false })
                toast.error(data.message)
            }
        })
    }).catch((error) => {
        console.log(error)
    })
}


export const bookClear = (data) => (dispatch) => {
    console.log("book Clear");
    dispatch({ type: SET_SCHEDULE_BOOKED_CLEAR })
}