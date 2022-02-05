import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
<<<<<<< HEAD
import {getUsersTasks} from '../../../redux/actions/userTasksAC'

function Tasks(props) {

  const dispatch = useDispatch()
  const allTasks = useSelector(state=>state.usersTasks)
  console.log(allTasks);
  useEffect(()=>{
    dispatch(getUsersTasks())
  },[])
  return (
    <>
    {/* {allTasks.map(el => )} */}
=======
// import {getUsersTasks} from '../../redux/actions/userTasksAC'

function Tasks(props) {

  // const dispatch = useDispatch()
  // const allTasks = useSelector(state=>state.usersTasks)
  // console.log(allTasks);
  // useEffect(()=>{
  //   dispatch(getUsersTasks())
  // },[])
  return (
    <>
    {/* {allTasks.map(el => )} */}
    <div>fff</div>
>>>>>>> dev
    </>
  );
}

export default Tasks;
