import { SET_ONE_USER_TASK } from "../types/oneUserTaskTypes";

export const oneUserTaskReducer = (state = {}, action) => {
    const {type, payload} = action;

    switch (type) {
        case SET_ONE_USER_TASK:
            return payload;
    
        default:
            return state;
    }
}