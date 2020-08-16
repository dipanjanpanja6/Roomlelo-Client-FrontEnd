import { SET_MOBILE_NUMBER, SET_MOBILE_AUTH_ERROR_DATA, MOBILE_AUTH_CODE_SENDED_NULL, MOBILE_AUTH_CODE_SENDED, SET_SCHEDULE_BOOKED_SUCCESS, SET_BOOKED_SUCCESS, SET_SCHEDULE_BOOKED_CLEAR } from '../type';
import { url } from '../../config/config'

import { visitSchedule, bookRoom } from '../actions/bookAction'
import { toast } from 'react-toastify';


export const verifyMobileCode = (mobile, code, email, book, type) => (dispatch) => {
    const verify = {
        code: code,
        mobile: mobile,
        email: email,
        name: book.name
    }
    console.log(verify)
    console.log(book)
    dispatch({ type: SET_BOOKED_SUCCESS, payload: "" })
    dispatch({ type: SET_SCHEDULE_BOOKED_SUCCESS, payload: "" })



    fetch(`${url}/account/mobile/auth/verification`, {
        method: 'POST',
        body: JSON.stringify(verify),
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then((response) => {
            dispatch({ type: MOBILE_AUTH_CODE_SENDED_NULL })
            response.json()
                .then((data) => {
                    console.log(data)

                    if (data.error) {
                        dispatch({ type: SET_MOBILE_AUTH_ERROR_DATA, payload: data })
                    }
                    if (data.success) {
                        // if (type === "schedule") {
                        book.uid = data.user_id
                        book.type = type
                        dispatch(visitSchedule(book))
                        // } else {
                        //     dispatch(bookRoom(data.user_id, book))
                        // }

                    } else {
                        dispatch({ type: SET_SCHEDULE_BOOKED_CLEAR })
                        toast.error(data.message)
                    }
                }).catch(r => console.log(r))
        })
}

export const signInWithMobile = (mobile) => (dispatch) => {
    dispatch({ type: SET_BOOKED_SUCCESS, payload: "" })
    dispatch({ type: SET_SCHEDULE_BOOKED_SUCCESS, payload: "" })
    const auth = {
        mobile: mobile
    }
    console.log({ auth })
    dispatch({ type: SET_MOBILE_NUMBER, payload: auth.mobile });
    fetch(`${url}/account/mobile/auth`, {
        method: 'POST',
        body: JSON.stringify(auth),
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then((response) => {
            response.json()
                .then((data) => {
                    console.log(data)
                    if (data.error) {
                        toast.error(data.message)
                        dispatch({ type: SET_MOBILE_AUTH_ERROR_DATA, payload: data })
                        dispatch({ type: SET_SCHEDULE_BOOKED_CLEAR })

                    }
                    if (data.success) {
                        console.log(auth)
                        dispatch({ type: SET_MOBILE_NUMBER, payload: auth.mobile });
                        dispatch({ type: MOBILE_AUTH_CODE_SENDED })
                        dispatch({ type: SET_SCHEDULE_BOOKED_CLEAR })
                    }
                })
        })
        .catch((error) => {
            dispatch({ type: SET_SCHEDULE_BOOKED_CLEAR })
            console.log(error);
        })

}