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
  const res = await axios('performers/getUserPerformers')
  console.log(res)
  dispatch(setPerformers(res.data))
}

export const deletePerformer = ({performerId, taskId}) => async (dispatch) => {
  console.log("delete current performer")
  const res = await axios.post('/performers/deletePerformer', {performerId, taskId})
  console.log(res)
  dispatch(setPerformers(res.data))
}