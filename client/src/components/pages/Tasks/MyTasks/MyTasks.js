import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTasks } from '../../../../redux/actions/currentUserTasksAC';
import TaskItem from '../TaskItem/TaskItem';

function MyTasks(props) {
  
  const dispatch = useDispatch()
  const allTasks = useSelector(state=>state.currentUserTasks)
  useEffect(()=> {
    dispatch(getAllTasks())
  },[])
  return (
    <>
    {allTasks.map(el => <TaskItem key={el.id} id={el.id} title={el.title} address={el.address} time={el.time} date={el.date} price={el.price}
    description={el.description} image={el.image} categorie={el.categorie}/>)}
    </>
  );
}

export default MyTasks;
