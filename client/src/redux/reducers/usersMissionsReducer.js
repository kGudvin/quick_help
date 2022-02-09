import {GET_ALL_USER_MISSIONS} from "../types/usersMissionsTypes";

export const userMissionReducer = (state = [], action) => {
    const {type, payload} = action;

    switch (type) {
        case GET_ALL_USER_MISSIONS:
            return payload;
        default:
            return state;
    }
}
