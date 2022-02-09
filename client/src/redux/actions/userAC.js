import axios from "axios"
import { SET_USER, TakenTasks, SET_IMAGE, SET_ALLUSERS } from "../types/usersTypes"

export const setUser = (value) => {
  return {
      type: SET_USER,
      payload: value
  }
}

export const setAllUsers = (value) => {
  return {
      type: SET_ALLUSERS,
      payload: value
  }
}

export const getCurrentUser = ()=> async (dispatch)=>{
  const res = await axios(`/user/userpage/`)
    dispatch(setUser(res.data.currentUser))
}
export const getAlltUsers = ()=> async (dispatch)=>{
  const res = await axios(`/user/allusers`)

    dispatch(setAllUsers(res.data.allUsers))
}

export const postImage = (newIncident)=> async (dispatch)=>{
  const formData = new FormData()
  formData.append('image', newIncident.sampleFile)
  const res = await axios.post(`/user/upload/`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
dispatch({type: SET_IMAGE,payload: res.data})
}


export const getUser = (input) => async (dispatch) => {
    const res = await axios.post('/user/signup', input)
    dispatch(setUser(res.data.user))
}

export const signInUser = ( input ) => async ( dispatch ) => {
  const res = await axios.post('/user/signin', input)
  dispatch(setUser(res.data.user))
}

export const userLogout = () => async (dispatch) => {
  await axios.post('/user/logout')
  dispatch(setUser(null))
}
export const checkUser = () => async (dispatch) => {

  try {
    const res = await axios.post('/user/check')
  
    dispatch(setUser(res.data.user))
    
  } catch (error) {

    dispatch(setUser(null))
    
  }
}
export const updateUser = (input) => async(dispatch) => {
  console.log("updateUserAC");
  const res = await axios.patch('/user/updateuserinfo', input)
  dispatch(setUser(res.data.user))
}
export const getOneTask = (taskId) => async(dispatch) =>{
  console.log("getOneTaskAC");
  const res = await axios.post('/userstasks/setonetasktouser')
  // .then(res =>  )
}
