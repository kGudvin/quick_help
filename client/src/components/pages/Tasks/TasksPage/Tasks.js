import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getUsersTasks} from '../../../../redux/actions/userTasksAC'
import TaskItem from '../TaskItem/TaskItem';

function Tasks(props) {

  const dispatch = useDispatch()
  const allTasks = useSelector(state=>state.usersTasks)
  
  useEffect(()=>{
    dispatch(getUsersTasks())
  },[])
  return (
    <>
    {allTasks.map(el => <TaskItem key={el.id} id={el.id} title={el.title} adress={el.adress} time={el.time} date={el.date} price={el.price}
    description={el.description} image={el.image} categorie={el.categorie}/>)}
    </>
  );
}

export default Tasks;
