import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Rating from "../../UI/Rating/Rating";
import style from "./UserPage.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../../../redux/actions/userAC";


export default function UserPage() {
const currentUser = useSelector(state => state.users)
const dispatch = useDispatch()
const navigate = useNavigate()
const id = useParams()
// const currentUrl = useLocation().pathname;
// const id = Number(currentUrl.replace("/tasks/userstasks/", ""));
 
  const changePathtoQuizz = () =>{
    navigate('/quizz')
  }
useEffect(()=>{

dispatch(getCurrentUser(id))
console.log('id useraaaaaaaaaaaaaaaaaa',id);
},[])
  return (
    <div className={style.container__account}>
      {/* //условие если не заполнены поля в бд у юзера показываем кнопку и сообщение */}
      <div className={style.notification__infoUser}>
        Заполните профиль, чтобы Вас быстрее одобрили при выборе исполнителя?
        <div>
            <button className={style.notification__infoUser_btn} onClick={changePathtoQuizz}>Заполнить информацию</button>
        </div>
      </div>
      <div className={style.wrapper__account}>
        <h3>Привет, {currentUser.name}</h3>

        <div className={style.header_wrapper__account}>
          <div className={style.wrapper_photo__account}>
            <div className={style.photo__account}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/166/166260.png"
                alt="add_photo"
              />
            </div >
            <div className={style.choose_photo__account}>
              <button className={style.notification__infoUser_btn} type="file">
                Загрузить фото
              </button>
            </div>
            <div className={style.rating__account}>
              <div>Мой рейтинг:</div>
              <Rating />
            </div>
          </div >
          <div className={style.wrapper_info__account}>
            <div className={style.header_info__account}>
              <div className={style.main_info__account}>Имя: User</div>
              <div className={style.main_info__account}>
                Очество: Userovitch
              </div>
              <div className={style.main_info__account}>Фамилия: Userov</div>
            </div>
            <div className={style.main_info__account}>Город: Москва</div>
            <div className={style.main_info__account}>
              О себе: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Nesciunt
            </div>
            <div className={style.main_info__account}>
              Телефон для связи:<strong>+7(916)088-91-38</strong>
            </div>
            <div className={style.main_info__account}>
              Почта для связи: <strong>user@user.com</strong>
            </div>
          </div>
        </div>
        <div className={style.btn__account}>
          <button className={style.notification__infoUser_btn} onClick={changePathtoQuizz} 
          >Редактировать</button>
        </div>
      </div>
    </div>
  );
}
