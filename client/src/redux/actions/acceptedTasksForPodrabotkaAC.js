import axios from "axios"
import {GET_USER_ACCEPTED_TASKS} from "../types/acceptedTasksForPodrabotkaTypes";

export const setAcceptedTasks = (value) => {
  return {
      type: GET_USER_ACCEPTED_TASKS,
      payload: value
  }
}

export const getAllAcceptedTasksForPodrabotka = () => async (dispatch) => {
  console.log("getAllMissions");
  const res = await axios('/performers/allAcceptedTasks')
  // console.log(res);
  dispatch(setAcceptedTasks(res.data))
}
