import { GET_USER_ACCEPTED_TASKS} from "../types/acceptedTasksForPodrabotkaTypes";

export const acceptedTasksForPodrabotkaReducer = (state = [], action) => {
    const {type, payload} = action;

    switch (type) {
        case GET_USER_ACCEPTED_TASKS:
            return payload;
        default:
            return state;
    }
}
