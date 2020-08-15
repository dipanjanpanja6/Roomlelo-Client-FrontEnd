import {SET_SCHEDULE_BOOKED_SUCCESS,SET_BOOKED_SUCCESS,SET_SCHEDULE_BOOKED_CLEAR} from '../type'

const initialState = {
    schedule_booked:false,
    booked:false,
};

export default function(state = initialState, actions){
    switch(actions.type){
        case SET_SCHEDULE_BOOKED_SUCCESS:
            return{
                ...state,
                schedule_booked:actions.payload,
                booked:false,
            };
        case SET_BOOKED_SUCCESS:
            return{
                ...state,
                booked:actions.payload,
                schedule_booked:false,
            };
        case SET_SCHEDULE_BOOKED_CLEAR:
            return{
                ...state,
                booked:false,
                schedule_booked:false,
            };
        default:
            return state
    }
}