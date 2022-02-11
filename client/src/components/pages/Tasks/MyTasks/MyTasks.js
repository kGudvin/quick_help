import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAcceptedTasksForPodrabotka } from '../../../../redux/actions/acceptedTasksForPodrabotkaAC';
import { getAllTasks } from '../../../../redux/actions/currentUserTasksAC';
import AccepdedTaskItem from '../TaskItem/AcceptedTaskItem';
import TaskItem from '../TaskItem/TaskItem';
import style from './MyTasks.module.css'
function MyTasks(props) {
  
  const dispatch = useDispatch()
  const allTasks = useSelector(state=>state.currentUserTasks)
  const allAcceptedTasks = useSelector(state=>state.acceptedTasksForPodrabotka)
  useEffect(()=> {
    dispatch(getAllTasks())
    dispatch(getAllAcceptedTasksForPodrabotka())
  },[])
  return (
    <div className={style.container__mytasks}>
  {
      allTasks.length > 0 &&
      <div className={style.accepting__mytasks}>
        <span>Ваш отклик ожидает решения заказчика</span>
    {allTasks.map(el => <TaskItem key={el.id} id={el.id} title={el.title} address={el.address} time={el.time} date={el.date} price={el.price}
    description={el.description} image={el.image} categorie={el.categorie} flajok={1}/>)}
      </div>
  }
  
    
    {
     allAcceptedTasks.length > 0 &&
     <div className={style.accepted__mytasks}>
     <span>Ваши заказчики ожидают Вас, свяжитесь с ними</span>
    {
   allAcceptedTasks.map((el ) => <AccepdedTaskItem key={el.id} newId={el.id} title={el.title} adress={el.adress} time={el.time} date={el.date} price={el.price}
   description={el.description} image={el.image} categorie={el.categorie} flajok={2}/>) 
    }
   </div>
    } 
  
    </div>
  );
}

export default MyTasks;
