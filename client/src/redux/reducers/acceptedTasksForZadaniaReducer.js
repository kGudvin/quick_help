import { GET_USER_ACCEPTED_TASKS} from "../types/acceptedTasksForZadaniaTypes";

export const acceptedTasksForZadaniaReducer = (state = [], action) => {
    const {type, payload} = action;

    switch (type) {
        case GET_USER_ACCEPTED_TASKS:
            return payload;
        default:
            return state;
    }
}
