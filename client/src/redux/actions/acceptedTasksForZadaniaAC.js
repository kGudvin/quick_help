import axios from "axios"
import {GET_USER_ACCEPTED_TASKS} from "../types/acceptedTasksForZadaniaTypes";
import { setAcceptedTasksForPodrabotka } from "./acceptedTasksForPodrabotkaAC";

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

export const submitAsComplitedForOwner = ({taskId}) => async(dispatch) => {
  console.log("SUBMIT AS DONE");
  console.log({taskId})
  const res = await axios.post('/performers/submitascomplitedforzadania', {taskId})
  if(res.status===200){
    const res = await axios('/performers/allAcceptedMissions')
  // console.log(res);
  dispatch(setAcceptedTasks(res.data))
  const rrrr = await axios('/performers/allAcceptedTasks')
    // console.log(res);
    dispatch(setAcceptedTasksForPodrabotka(rrrr.data))
  }
}