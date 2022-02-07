import style from "./style.module.css";
import default_avatar from "./default_avatar.png";
import { Link, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userLogout } from "../../../redux/actions/userAC";
import { useNavigate } from "react-router-dom";
const Avatar = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.users);

  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(userLogout());
    navigate("/");
  };

  return (
    <div className={style.btns_wrap}>
       <div className={`${style.mail}`}>
         {/* условие,если есть уведомления */}
         <span> </span>
        <i className="fas fa-bell"></i>
      </div>
      <button onClick={logoutHandler} className={`${style.nav_btn}`}>
        Выйти
      </button>

      {user && (
        <Link to="/personal" className={`${style.nav_link}`}>
          <div className={`${style.avatar}`}>
            <img src={default_avatar} height={43} className={`${style.icon}`} />
          </div>
        </Link>
      )}
     
    </div>
  );
};

export default Avatar;
