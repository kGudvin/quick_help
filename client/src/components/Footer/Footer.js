import React from "react";
import style from "./Footer.module.css";

function Footer() {
  return (
    <footer className={style.container__footer}>
      <div className={style.info__footer}>
      <div className={style.info__footer_item}>About Us</div>
      <div className={style.info__footer_item}>FAQ</div>
      <div className={style.info__footer_item}>Privacy Policy</div>
      <div className={style.info__footer_item}>Blog</div>
      <div className={style.info__footer_item}>Become Partner</div>
      </div>
      <div className={style.contacts__footer}>
        <div className={style.wrapper__circle}>
          <i class="fab fa-facebook-f"></i>
        </div>
        <div className={style.wrapper__circle}>
          <i class="fab fa-twitter"></i>
        </div>
        <div className={style.wrapper__circle}>
          <i class="fab fa-instagram"></i>
        </div>
      </div>
      <div className={style.made_site_info__footer}>©2022QuikHelp</div>
    </footer>
  );
}

export default Footer;
