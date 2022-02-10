import {GET_ALL_PERFORMERS,DELETE_CURRENT_PERFORMER} from "../types/performersTypes";

export const performersReducer = (state = [], action) => {
    const {type, payload} = action;

    switch (type) {
        case GET_ALL_PERFORMERS:
            console.log("i am here")
            return payload;

        case DELETE_CURRENT_PERFORMER:
            console.log("delete one performer")
            return payload;
        default:
            return state;
    }
}
