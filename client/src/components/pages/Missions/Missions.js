import React,{useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { getAllAcceptedTasksForZadania } from '../../../redux/actions/acceptedTasksForZadaniaAC';
import { getAllUserMission } from '../../../redux/actions/usersMissionsAC';
import AccepdedTaskItem from '../Tasks/TaskItem/AcceptedTaskItem';
import ExampleTaskItem from '../Tasks/TaskItem/MyTaskItem';
import MyTaskItem from '../Tasks/TaskItem/MyTaskItem';
import TaskItem from '../Tasks/TaskItem/TaskItem';
import style  from './Mission.module.css'
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
    <div className={style.container__missions}>
      {missions.map(el => <ExampleTaskItem key={el.id} id={el.id} title={el.title} adress={el.adress} time={el.time} date={el.date} price={el.price}
    description={el.description} image={el.image} categorie={el.categorie}></ExampleTaskItem>)}
    <hr></hr>
    {allAcceptedTasks.map(el => <MyTaskItem key={el.id} id={el.id} title={el.title} adress={el.adress} time={el.time} date={el.date} price={el.price}
    description={el.description} image={el.image} categorie={el.categorie} status={el.status} newId={el.id} ></MyTaskItem>)}
    </div>
  );
}

export default Missions;
