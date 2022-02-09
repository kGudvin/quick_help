import { SET_IMAGE, SET_USER} from "../types/usersTypes";

export const oneUserReducer = (state = null, action) => {
    const {type, payload} = action;

    switch (type) {
        case SET_USER:
            return payload;
        case SET_IMAGE:
            return {...state, payload}

        default:
            return state;
    }
}
