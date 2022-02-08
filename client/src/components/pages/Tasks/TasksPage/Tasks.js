import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getUsersTasks} from '../../../../redux/actions/userTasksAC'
import TaskItem from '../TaskItem/TaskItem';

function Tasks({input}) {

  const dispatch = useDispatch()
  const allTasks = useSelector(state=>state.usersTasks)
  let regexp = new RegExp(input, 'i')
  let result = allTasks.filter(el=>regexp.test(el.title))
  useEffect(()=>{
    dispatch(getUsersTasks())
  },[])
  return (
    <>
    {result.map(el => <TaskItem key={el.id} id={el.id} title={el.title} adress={el.adress} time={el.time} date={el.date} price={el.price}
    description={el.description} image={el.image} categorie={el.categorie}/>)}
    </>
  );
}

export default Tasks;
