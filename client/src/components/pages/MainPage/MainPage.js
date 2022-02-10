import React, { useEffect, useState } from "react";
import MainButton from "../../UI/Buttons/MainButton";
import style from "./MainPage.module.css";
import imgMan from "../../img/imgMan.png";
import Vacancie from "../../Vacancie/Vacancie";
import Tasks from "../Tasks/TasksPage/Tasks";
import { useDispatch } from "react-redux";
import { getUsersTasks } from "../../../redux/actions/userTasksAC";
import { Link } from "react-router-dom";

function MainPage() {
const [lim, setLim] = useState(100)
const [price, setPrice] = useState(0)
const dispatch = useDispatch()
useEffect(()=>{
  dispatch(getUsersTasks(lim))
  
}, [lim])
useEffect(() => {
  // dispatch(getUsersTasks(100))
  setTimeout(()=>{setPrice(1)}, 500)
  
}, []);


  return (
    <>
      <div className={style.container__main}>
        <div className={style.overlay__main_img}>
          <div className={style.wrapper__main_img}>
            <div className={style.wrapper__main_header}>
              <div className={style.header__main}>
                Найти подработку или исполнителя - <span>это легко</span>
              </div>
              <div className={style.subheader__main}>
                Сделайте это уже сегодня в нашем приложении
              </div>
            </div>
            <div className={style.wrapper__btns_main}>
              <button className={style.btns__main}>
                Найти подработку
              </button>
              <button className={style.btns__main}>
                Найти сотрудника
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* информация с мужиком на заставке */}
      <div className={style.container__block}>
        <div className={style.text__block}>
          <div className={style.header__main}>
            Найдите человека, способного починить компьютер в вашем районе
          </div>
          <div className={style.subheader__main}>
            Все просто! Заполните форму и ждите откликов.
          </div>
        </div>
        <div className={style.img__block}>
          <img src={imgMan} alt="imgMan" />
        </div>
      </div>
      {/* small info */}
      <div className={style.container__small}>
        <div className={style.container__block_small}>
          <div className={style.img__block__small_round}>
            <i className="fas fa-user"> </i>
          </div>
          <div className={style.text__block_small}>Все пользователи прошли регистрацию, мы даем гарантию на их работу</div>
        </div>
        <hr />
        <div className={style.container__block_small}>
          <div className={style.img__block__small_round}>
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <div className={style.text__block_small}>Найдите исполнителя рядом с домом</div>
        </div>
        <hr />
        <div className={style.container__block_small}>
          <div className={style.img__block__small_round}>
            <i className="fas fa-funnel-dollar"></i>
          </div>
          <div className={style.text__block_small}>Управляйте откликами в личном кабинете</div>
        </div>
      </div>

      <div className={style.container__taskBlock}>
     
      <h3 className={style.header__main}>Вакансии и услуги</h3>
     
     <Tasks lim={lim} price={price}/>
     <Link to="/findtask">
     <button className={style.btns__main} >Показать еще</button></Link>
      </div>
    
    </>
  );
}

export default MainPage;
