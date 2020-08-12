import {SET_SCHEDULE_BOOKED_SUCCESS} from '../type'
import {url} from '../../config/config'

export const bookRoom = (uid, id) => (dispatch) =>{
    fetch(`${url}/room/book/${id}`, {
        method:'POST',
        body:JSON.stringify(uid),
        headers:{
            'Content-Type': 'application/json',
        }
    })
    .then((response) =>{
        response.json()
        .then((data) =>{
            console.log(data)
        })
    })
    .catch((error) =>{
        
    })
}

export const visitSchedule = (data) => (dispatch) =>{
    fetch(`${url}/room/schedule/visit`, {
        method:'POST',
        body:JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json',
        }
    })
    .then((response) =>{
        response.json()
        .then((data) =>{
            console.log(data)
            if(data.success){
                dispatch({type:SET_SCHEDULE_BOOKED_SUCCESS})
            }
        })
    })
    .catch((error) =>{
        console.log(error)
    })
}

