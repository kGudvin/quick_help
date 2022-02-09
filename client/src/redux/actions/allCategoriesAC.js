import axios from "axios"
import {SET_ALL_CATEGORIES} from "../types/allCategoreisTypes";

export const setCategories = (value) => {
  return {
      type: SET_ALL_CATEGORIES,
      payload: value
  }
}

export const getAllCategories = () => async (dispatch) => {
  // console.log("getAlCtAc");
  const res = await axios('/categories')
  // console.log(res);
  dispatch(setCategories(res.data.categories))
}
