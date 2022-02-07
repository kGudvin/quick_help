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
  console.log(oneTask);

  useEffect(()=>{
    console.log("useefect");
    (async function(){
      console.log("inside");
      await dispatch(getOneUserTask(id))
    }())

  },[])

  return (
  <div className='hello'>
  {oneTask.id}
  {oneTask.adress }
  {oneTask.id}
  {oneTask.id}
  {oneTask.id}

  </div>
  );
}

export default OneTaskPage;
