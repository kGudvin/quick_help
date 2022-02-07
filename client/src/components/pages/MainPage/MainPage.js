import React from "react";
import MainButton from "../../UI/Buttons/MainButton";
import style from "./MainPage.module.css";
import imgMan from "../../img/imgMan.png";
import Vacancie from "../../Vacancie/Vacancie";

function MainPage() {


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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <div className={style.subheader__main}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
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
          <div className={style.text__block_small}>Текст о картинке</div>
        </div>
        <hr />
        <div className={style.container__block_small}>
          <div className={style.img__block__small_round}>
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <div className={style.text__block_small}>Tекст о картинке</div>
        </div>
        <hr />
        <div className={style.container__block_small}>
          <div className={style.img__block__small_round}>
            <i className="fas fa-funnel-dollar"></i>
          </div>
          <div className={style.text__block_small}>Tекст о картинке</div>
        </div>
      </div>

      <div className={style.container__taskBlock}>
     
      <h3 className={style.header__main}>Вакансии и услуги</h3>
     {/* тут мапаемcя по всем вакансиям и отражаем 5 */}
     <div className={style.vacatcies__taskBlock}>
     <Vacancie/>
     <Vacancie/>
     <Vacancie/>
     <Vacancie/>
     <Vacancie/>
     </div>
     <button className={style.btns__main}>Показать еще</button>
      </div>
    
    </>
  );
}

export default MainPage;
