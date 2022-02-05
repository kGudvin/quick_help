import React from "react";
import style from "./Footer.module.css";

function Footer() {
  return (
    <footer className={style.container__footer}>
      <div className={style.info__footer}></div>

      <div className={style.contacts__footer}></div>
      <div className={style.made_site_info__footer}></div>
    </footer>
  );
}

export default Footer;
