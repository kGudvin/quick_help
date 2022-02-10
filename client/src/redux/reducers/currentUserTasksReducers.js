import { SET_CURRENT_USER_TASK,SET_ALL_USER_TASKS } from "../types/currentUserTasksTypes";

export const currentUserTaskReducer = (state = {}, action) => {
    const {type, payload} = action;

    switch (type) {
        case SET_CURRENT_USER_TASK:
            console.log("here i am");
            return [...state, payload];
        case SET_ALL_USER_TASKS:
            return payload
        default:
            return state;
    }
}

