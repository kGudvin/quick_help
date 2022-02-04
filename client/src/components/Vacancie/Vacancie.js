import React from "react";
import Rating from "../UI/Rating/Rating";
import style from "./Vacancie.module.css";
function Vacancie() {
  return (
    <>
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
          <div className={style.header__vacantie}>header vacantie</div>
          <div className={style.subheader__vacantie}>subheader vacantie</div>
          <div className={style.descr__vacantie}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <div >
            <a className={style.link__vacantie}href="#"> Подробнее...</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Vacancie;
