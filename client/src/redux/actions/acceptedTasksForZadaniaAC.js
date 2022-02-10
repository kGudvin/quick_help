import axios from "axios"
import {GET_USER_ACCEPTED_TASKS} from "../types/acceptedTasksForZadaniaTypes";

export const setAcceptedTasks = (value) => {
  return {
      type: GET_USER_ACCEPTED_TASKS,
      payload: value
  }
}

export const getAllAcceptedTasksForZadania = () => async (dispatch) => {
  console.log("getAllMissions");
  const res = await axios('/performers/allAcceptedMissions')
  // console.log(res);
  dispatch(setAcceptedTasks(res.data))
}
