import axios from "axios"
import {GET_ALL_TASKS } from "../types/usersTasksTypes"

export const setTask = (value) => {
  return {
      type: GET_ALL_TASKS,
      payload: value
  }
}

export const getUsersTasks = () =>  async(dispatch) => {
    axios('/userstasks')
    .then(res => dispatch(setTask(res.data.allUsersTasks)))
    .catch(err => console.log(err))
}

