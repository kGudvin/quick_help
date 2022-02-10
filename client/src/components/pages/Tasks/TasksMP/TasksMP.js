import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOneUserTask } from '../../../../redux/actions/currentUserTasksAC';
import {getUsersTasks} from '../../../../redux/actions/userTasksAC'
import TaskItem from '../TaskItem/TaskItem';

function TasksMP({input, price, cat,}) {

  const dispatch = useDispatch()
  const allTasks = useSelector(state=>state.usersTasks)
  const arr = allTasks.slice(-4)
  useEffect(()=>{
    dispatch(getUsersTasks(4))
  },[])
  
  return (
    <>
    {arr && arr.map(el => <TaskItem key={el.id} id={el.id} title={el.title} adress={el.adress} time={el.time} date={el.date} price={el.price}
    description={el.description} image={el.image} categorie={el.categorie}/>)}
    </>
  );
}

export default TasksMP
