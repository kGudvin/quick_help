import { SET_ALLUSERS} from "../types/usersTypes";

export const usersReducer = (state = null, action) => {
    const {type, payload} = action;

    switch (type) {
        case SET_ALLUSERS:
            return payload;
      
        default:
            return state;
    }
}
