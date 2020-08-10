import {SET_MOBILE_NUMBER, SET_MOBILE_AUTH_ERROR_DATA, MOBILE_AUTH_CODE_SENDED} from '../type';
import {url} from '../../config/config'

import {visitSchedule} from '../actions/bookAction'

export const verifyMobileCode = (mobile, code, book) => (dispatch) =>{
    const verify = {
        code:code,
        mobile:mobile
    }
    console.log(verify)
    fetch(`${url}/account/mobile/auth/verification`, {
        method:'POST',
        body:JSON.stringify(verify),
        headers:{
            'Content-Type': 'application/json',
        }
    })
    .then((response) =>{
        response.json()
        .then((data) =>{
            console.log(data)
            if(data.error){
                dispatch({type:SET_MOBILE_AUTH_ERROR_DATA, payload:data})
            }
            if(data.success){
                book.uid = data.user_id
                dispatch(visitSchedule(book))
            }
        })
    })
}

export const signInWithMobile = (mobile) => (dispatch) =>{
    
    const auth = {
        mobile:mobile
     }
   
    dispatch({type:SET_MOBILE_NUMBER, payload:auth.mobile});
    fetch(`${url}/account/mobile/auth`, {
        method:'POST',
        body:JSON.stringify(auth),
        headers:{
            'Content-Type': 'application/json',
        }
    })
    .then((response) =>{
        response.json()
        .then((data) =>{
            console.log(data)
            if(data.error){
                dispatch({type:SET_MOBILE_AUTH_ERROR_DATA, payload:data})
            }
            if(data.success){
                console.log(auth)
                dispatch({type:SET_MOBILE_NUMBER, payload:auth.mobile});
                dispatch({type:MOBILE_AUTH_CODE_SENDED})
            }
        })
    })
    .catch((error) =>{

    })

}