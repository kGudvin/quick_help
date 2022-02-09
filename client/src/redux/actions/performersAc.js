import axios from "axios"
import {GET_ALL_PERFORMERS} from "../types/performersTypes";

export const setPerformers = (value) => {
  return {
      type: GET_ALL_PERFORMERS,
      payload: value
  }
}

export const getAllPerformers = () => async (dispatch) => {
  console.log("getAllPerformers");
  const res = await axios('/performers')
  // console.log(res);
  dispatch(setPerformers(res.data.currentUserPerformers))
}
