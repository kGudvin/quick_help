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

export const getAllTasks = () => async(dispatch) =>{
  console.log("получаем все юзерские подработки");
  const res = await axios('/userstasks/getallUserPodrabotka')
  .then(res => {
    console.log("delayu cheto vnutri res");
    console.log(res);
    res.data.forEach(el => {
      dispatch(setOneUserTask(el))
    });
  })
}
