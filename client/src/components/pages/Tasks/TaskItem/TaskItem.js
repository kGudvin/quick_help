import React from 'react';
import {Link} from 'react-router-dom'
import { takeOnTheTask } from '../../../../redux/actions/currentUserTasksAC';
import MainButton from '../../../UI/Buttons/MainButton';
import ProgressBar from '../../../UI/ProgressBar/ProgressBar';
import Rating from '../../../UI/Rating/Rating';
import style from "./TaskItem.module.css"
import {useDispatch, useSelector} from 'react-redux'

function TaskItem({id, title, adress, time, date, price, description, image, categorie}) {

const allTasks = useSelector(state=>state.currentUserTasks)

const flag = allTasks.filter(el => el.id === id)
console.log(flag);
const dispatch = useDispatch()
  return (
    <div className={style.wrapper__vacantie}>
    
      <div className={style.img__vacantie}> 
      <div className={style.img__vacantie_block}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/166/166260.png"
              alt="vacancy img"
            />
          </div>
          <div className={style.rating__vacantie}>
            <Rating />
          </div>
        </div>
        <div className={style.info__vacantie}>
          <Link to={`/tasks/userstasks/${id}`} className={style.header__vacantie}> <p>{title}</p></Link> 
          <div className={style.subheader__vacantie}>Категория:{categorie}</div>
          <div className={style.subheader__vacantie}>Адрес:{adress}</div>
          <div className={style.subheader__vacantie}>Начать: {date}</div>
          <div className={style.subheader__vacantie}>Подработка займет: {time}</div>
          <div className={style.subheader__vacantie}>Оплата задания: {price}</div>
          <div className={style.descr__vacantie}>Описание:
          {description}
          </div>
          <div >
            {/* <a className={style.link__vacantie}href="#"> Подробнее...</a> */}
            <button onClick={()=>dispatch(takeOnTheTask(id))}>Откликнуться на вакансию</button>
            <button>Написать работодателю</button>

          </div>
        </div>
      {/*
      <p></p>
      <p>{categorie}</p>
      <ProgressBar done={50}/>
      
      <hr></hr>
      <hr></hr> */}
    </div>
  );
}

export default TaskItem;
