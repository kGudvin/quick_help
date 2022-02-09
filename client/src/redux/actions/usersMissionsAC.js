import axios from "axios"
import {GET_ALL_USER_MISSIONS} from "../types/usersMissionsTypes";

export const setMissions = (value) => {
  return {
      type: GET_ALL_USER_MISSIONS,
      payload: value
  }
}

export const getAllUserMission = () => async (dispatch) => {
  console.log("getAllMissions");
  const res = await axios('/userstasks/usermissions')
  // console.log(res);
  dispatch(setMissions(res.data.userMissions))
}
