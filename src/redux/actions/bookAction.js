import {SET_SCHEDULE_BOOKED_SUCCESS} from '../type'
import {url} from '../../config/config'


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

