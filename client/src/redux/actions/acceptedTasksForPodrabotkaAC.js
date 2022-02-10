import axios from "axios"
import {GET_USER_ACCEPTED_TASKS} from "../types/acceptedTasksForPodrabotkaTypes";

export const setAcceptedTasksForPodrabotka = (value) => {
  return {
      type: GET_USER_ACCEPTED_TASKS,
      payload: value
  }
}

export const getAllAcceptedTasksForPodrabotka = () => async (dispatch) => {
  console.log("getAllMissions");
  const res = await axios('/performers/allAcceptedTasks')
  // console.log(res);
  dispatch(setAcceptedTasksForPodrabotka(res.data))
}


export const submitAsComplitedForPerformer = ({taskId}) => async(dispatch) => {
  console.log("SUBMIT AS DONE");
  console.log({taskId})
  const res = await axios.post('/performers/submitascomplitedforpodrabotka', {taskId})
}