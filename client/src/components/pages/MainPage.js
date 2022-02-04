import React from "react";
import ButtonCircle from "../UI/Buttons/ButtonCircle";
import MainButton from "../UI/Buttons/MainButton";
import style from "./MainPage.module.css";

function MainPage() {
  // className = {style.subheader__main}
  return (
    <div className={style.container__main}>
      <div className={style.wrapper__img_main}>
        <div className={style.wrapper__main_header}>
          <div className = {style.header__main}>
            Найти подработку или исполнителя - <span>это легко</span>
          </div>
          <div className = {style.subheader__main}>
            Сделайте это уже сегодня в нашем приложении
          </div>
        </div>
        <div className={style.wrapper__btns_main}>
          <MainButton className = {style.btns__main}>Найти подработку</MainButton>
          <MainButton className = {style.btns__main}>Найти сотрудника</MainButton>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
