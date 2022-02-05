import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getUsersTasks} from '../../../../redux/actions/userTasksAC'
import { useLocation } from 'react-router-dom';

function OneTaskPage(props) {
  const dispatch = useDispatch()
  const currentUrl = useLocation().pathname
  const id = Number(currentUrl.replace('/tasks/userstasks/', ''))
  const allTasks = useSelector(state=> state.usersTasks)

  const currentTask = allTasks.filter(el => el.id === id)[0]
  console.log(currentTask);

  useEffect(()=>{
    (async function(){
      await dispatch(getUsersTasks())
    }())
  },[])
  return (
  <>
  {/* <p>{currentTask.id}</p> */}
  </>
  );
}

export default OneTaskPage;
