import React, { useEffect } from 'react';

import {useSelector, useDispatch} from 'react-redux'
import { getAllPerformers } from '../../../redux/actions/performersAc';

function Performers(props) {


  const performers = useSelector(state=>state.performers)
  console.log(performers);
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(getAllPerformers())
  },[])
  return (
    <div>
      НА ВАШ ЗАКАЗ ..... ПРЕТЕНДУЮТ СЛЕДУЮЩИЕ ПОЛЬЗОВАТЕЛИ...
    </div>
  );
}

export default Performers;
