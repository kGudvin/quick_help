import axios from "axios"
import {GET_ALL_TASKS, ADD_NEW_TASK } from "../types/usersTasksTypes"

export const setTask = (value) => {
  return {
      type: GET_ALL_TASKS,
      payload: value
  }
}
export const addTask = (value) => {
  return {
      type: ADD_NEW_TASK,
      payload: value
  }
}

export const getUsersTasks = () =>  async(dispatch) => {
    axios('/userstasks')
    .then(res => dispatch(setTask(res.data.allUsersTasks)))
    .catch(err => console.log(err))
}

export const addUserTask = (input) => async(dispatch) => {
  console.log("addUserTaskAC");
  axios.post('/userstasks/addnewuserstask', input)
  .then(res => dispatch(addTask(res.data.newUserTask)))
}
