import axios from "axios"
import { SET_USER, SET_IMAGE } from "../types/usersTypes"

export const setUser = (value) => {
  return {
      type: SET_USER,
      payload: value
  }
}
export const getCurrentUser = ()=> async (dispatch)=>{
  const res = await axios(`/user/userpage/`)
    dispatch(setUser(res.data.currentUser))
}
export const postImage = (newIncident)=> async (dispatch)=>{
  console.log(123)
  console.log('newIncident',newIncident);
  const res = await axios.post(`/user/upload/`, newIncident)
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
