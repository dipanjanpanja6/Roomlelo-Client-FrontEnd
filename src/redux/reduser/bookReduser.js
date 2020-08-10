import {SET_SCHEDULE_BOOKED_SUCCESS} from '../type'

const initialState = {
    schedule_booked:false
};

export default function(state = initialState, actions){
    switch(actions){
        case SET_SCHEDULE_BOOKED_SUCCESS:
            return{
                ...state,
                schedule_booked:true
            };
        default:
            return state
    }
}