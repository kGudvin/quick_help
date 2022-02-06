import {SET_ALL_CATEGORIES} from "../types/allCategoreisTypes";

export const allCategoriesReducer = (state = [], action) => {
    const {type, payload} = action;

    switch (type) {
        case SET_ALL_CATEGORIES:
            return payload;
    
        default:
            return state;
    }
}
