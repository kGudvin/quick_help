import React,{useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { getAllAcceptedTasksForZadania } from '../../../redux/actions/acceptedTasksForZadaniaAC';
import { getAllUserMission } from '../../../redux/actions/usersMissionsAC';
import TaskItem from '../Tasks/TaskItem/TaskItem';

function Missions(props) {
  
  const missions = useSelector(state=>state.currentUserMissions)
  const allAcceptedTasks = useSelector(state=>state.acceptedTasksForZadania)
  console.log(missions);
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(getAllUserMission())
    dispatch(getAllAcceptedTasksForZadania())
  },[])
  return (
    <>
      {missions.map(el => <TaskItem key={el.id} id={el.id} title={el.title} adress={el.adress} time={el.time} date={el.date} price={el.price}
    description={el.description} image={el.image} categorie={el.categorie}></TaskItem>)}
    <hr></hr>
    {allAcceptedTasks.map(el => <TaskItem key={el.id} id={el.id} title={el.title} adress={el.adress} time={el.time} date={el.date} price={el.price}
    description={el.description} image={el.image} categorie={el.categorie}></TaskItem>)}
    </>
  );
}

export default Missions;
