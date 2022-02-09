import {GET_ALL_PERFORMERS} from "../types/performersTypes";

export const performersReducer = (state = [], action) => {
    const {type, payload} = action;

    switch (type) {
        case GET_ALL_PERFORMERS:
            return payload;
        default:
            return state;
    }
}
