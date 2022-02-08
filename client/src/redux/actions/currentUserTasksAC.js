import axios from "axios";
import { SET_CURRENT_USER_TASK } from "../types/currentUserTasksTypes";

export const setOneUserTask = (value) => {
    return {
        type: SET_CURRENT_USER_TASK,
        payload: value
    }
}

export const takeOnTheTask = (taskId) => async (dispatch) => {
  console.log("getOneTaskAC");
  console.log(taskId);
  const res = await axios.post('/userstasks/setonetasktouser', {taskId})
  .then(res => {
    console.log(res.data);
    dispatch(setOneUserTask(res.data))} )
};
