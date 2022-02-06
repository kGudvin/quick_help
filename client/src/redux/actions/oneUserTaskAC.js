import axios from "axios";
import { SET_ONE_USER_TASK } from "../types/oneUserTaskTypes";

export const setOneUserTask = (value) => {
    return {
        type: SET_ONE_USER_TASK,
        payload: value
    }
}

export const getOneUserTask = (id) => async (dispatch) => {
    axios.post(`/userstasks/getonetask/${id}`)
    .then(res => dispatch(setOneUserTask(res.data)))
    .catch(err=> console.log(err))
};
