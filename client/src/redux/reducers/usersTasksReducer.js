import {GET_ALL_TASKS, ADD_NEW_TASK, DEL_TASK, GET_ONE_TASK} from '../types/usersTasksTypes'


export const usersTasksReducer = (state = [], action)=>{
    const {type, payload} = action;
    switch (type) {
        case GET_ALL_TASKS:
            return [...payload];
        case ADD_NEW_TASK:
            return [...state, payload]
        case DEL_TASK:
            return state.filter(el => el.id !== payload) 
        default:
            return state;
    }
}
