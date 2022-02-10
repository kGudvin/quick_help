import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAcceptedTasksForPodrabotka } from '../../../../redux/actions/acceptedTasksForPodrabotkaAC';
import { getAllTasks } from '../../../../redux/actions/currentUserTasksAC';
import TaskItem from '../TaskItem/TaskItem';

function MyTasks(props) {
  
  const dispatch = useDispatch()
  const allTasks = useSelector(state=>state.currentUserTasks)
  const allAcceptedTasks = useSelector(state=>state.acceptedTasksForPodrabotka)
  useEffect(()=> {
    dispatch(getAllTasks())
    dispatch(getAllAcceptedTasksForPodrabotka())
  },[])
  return (
    <>
    {allTasks.map(el => <TaskItem key={el.id} id={el.id} title={el.title} adress={el.adress} time={el.time} date={el.date} price={el.price}
    description={el.description} image={el.image} categorie={el.categorie}/>)}
    <hr></hr>
    {allAcceptedTasks.length>0?
    (allAcceptedTasks.map(el => <TaskItem key={el.id} id={el.id} title={el.title} adress={el.adress} time={el.time} date={el.date} price={el.price}
    description={el.description} image={el.image} categorie={el.categorie}/>)):''}
    </>
  );
}

export default MyTasks;
