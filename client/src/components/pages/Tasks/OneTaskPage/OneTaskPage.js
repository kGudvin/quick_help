import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getOneUserTask } from '../../../../redux/actions/oneUserTaskAC';

function OneTaskPage(props) {

  //TODO ВСЕ ВРОДЕ ПРАВИЛЬНО, НО ПОЧЕМУ-ТО НЕ ПЕЧАТАЕТ НИ ОДНОГО ЭЛЕМЕНТА ОТ ПОЛУЧЕННОГО ПОСТА
  
  const dispatch = useDispatch()
  const currentUrl = useLocation().pathname
  const id = Number(currentUrl.replace('/tasks/userstasks/', ''))

  const oneTask = useSelector(state=>state.oneUserTask)
  console.log(oneTask.oneTask);
  useEffect(()=>{
    console.log("useefect");
    (async function(){
      console.log("inside");
      await dispatch(getOneUserTask(id))
    }())

  },[])

  return (
  <div>
  <p>{oneTask.oneTask.title}</p>
  <img src={oneTask.oneTask.image} width="200px"/>
  <p>{oneTask.oneTask.categorie}</p>
  <p>{oneTask.oneTask.description}</p>
  <p>{oneTask.oneTask.date}</p>
  <p>{oneTask.oneTask.time}</p>
  <p>{oneTask.oneTask.adress}</p>
  <p>{oneTask.oneTask.price}</p>
  <p>{oneTask.oneTask.id}</p>
  </div>
  );
}

export default OneTaskPage;
