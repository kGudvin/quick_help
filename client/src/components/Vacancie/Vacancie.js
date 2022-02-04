import React from "react";
import Rating from "../UI/Rating/Rating";
import style from "./Vacancie.module.css";
function Vacancie() {
  return (
    <>
      <div className={style.wrapper__vacantie}>
        <div className={style.img__vacantie}>
          <img src="https://st.depositphotos.com/1186248/2240/i/600/depositphotos_22402409-stock-photo-vacancy-rubber-stamp.jpg" alt="vacancy img" />
        </div>
        <div className={style.info__vacantie}>
      <div className={style.header__vacantie}>header vacantie</div>
      <div className={style.subheader__vacantie}>subheader vacantie</div>
      <div className={style.rating__vacantie}>
      <Rating/>
      </div>
      <div className={style.descr__vacantie}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
      <div>
        <a href="#"> Подробнее...</a>
        </div>
        </div>
      </div>
    </>
  );
}

export default Vacancie;
