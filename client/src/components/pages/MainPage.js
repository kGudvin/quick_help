import React from "react";
import ButtonCircle from "../UI/Buttons/ButtonCircle";
import MainButton from "../UI/Buttons/MainButton";
import style from "./MainPage.module.css";
import imgMan from '../img/imgMan.png'
function MainPage() {
  // className = {style.subheader__main}
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
              <MainButton className={style.btns__main}>
                Найти подработку
              </MainButton>
              <MainButton className={style.btns__main}>
                Найти сотрудника
              </MainButton>
            </div>
          </div>
        </div>
      </div>
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
        <i className='fas fa-user'> </i>
        </div>
        <div className={style.text__block_small}>
        текст о картинке сверху
        </div> 
        <hr/> 
      </div>
      <div className={style.container__block_small}>
       <div className={style.img__block__small_round}>
        <i class="fas fa-map-marker-alt"></i>
        </div>
        <div className={style.text__block_small}>
        текст о картинке сверху
        </div>  
        <hr/> 
      </div>
      <div className={style.container__block_small}>
       <div className={style.img__block__small_round}>
       <i class="fas fa-funnel-dollar"></i>
        </div>
        <div className={style.text__block_small}>
        текст о картинке 
        </div>  
      </div>
     
     
      </div>
    </>
  );
}

export default MainPage;
