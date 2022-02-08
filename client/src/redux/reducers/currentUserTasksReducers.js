import { SET_CURRENT_USER_TASK } from "../types/currentUserTasksTypes";

export const currentUserTaskReducer = (state = {}, action) => {
    const {type, payload} = action;

    switch (type) {
        case SET_CURRENT_USER_TASK:
            console.log("here i am");
            return [...state, payload];
    
        default:
            return state;
    }
}

