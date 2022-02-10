import React, { useEffect } from 'react';

import {useSelector, useDispatch} from 'react-redux'
import { getAllPerformers } from '../../../redux/actions/performersAc';
import SmallUserCard from '../UserPage/SmallUserCard/SmallUserCard';
import style from "./Performers.module.css";

function Performers(props) {


  const performers = useSelector(state=>state.performers)
  console.log(performers);
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(getAllPerformers())
  },[])
  
  return (
  <div className={style.container_allusers__card}>
    {performers.length>0 &&
      performers.map((obj,index) => (<>
      <div className={style.user__title}>
        На задание {obj.currentTask.title} откликнулся(лась):
        </div>
          {obj.performers.map((user, index) => (
            <SmallUserCard taskId={obj.currentTask.id} index={index + 1} id={user.id} key={user.id} image={user.image} secondname={user.secondname} patronymic={user.patronymic} name={user.name}  email={user.email} phone={user.phone} about={user.about}></SmallUserCard>
          ))}
          </>
    ))}
</div>
  )
}

export default Performers;
