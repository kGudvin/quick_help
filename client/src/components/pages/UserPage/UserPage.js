import { useParams } from "react-router-dom";
import Rating from "../../UI/Rating/Rating";
import style from "./UserPage.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../../../redux/actions/userAC";

export default function UserPage() {
  const currentUser = useSelector((state) => state.oneUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = useParams();

  const changePathtoQuizz = () => {
    navigate("/quizz");
  };

  useEffect(() => {
    dispatch(getCurrentUser(id.id));
  }, []);

  return (
    <>
      <div className={style.container__account}>
        {currentUser.name &&
        currentUser.secondname &&
        currentUser.patronymic &&
        currentUser.age &&
        currentUser.about &&
        currentUser.email &&
        currentUser.phone &&
        currentUser.image ? (
          <h3>Привет, {currentUser.name}</h3>
        ) : (
          <div className={style.notification__infoUser}>
            Заполните профиль, чтобы Вас быстрее одобрили при выборе
            исполнителя?
            <div>
              <button
                className={style.notification__infoUser_btn}
                onClick={changePathtoQuizz}
              >
                Заполнить информацию
              </button>
            </div>
          </div>
        )}

        <div className={style.wrapper__account}>
          <div className={style.wrapper_photo__account}>
            <div className={style.photo__account}>
              {currentUser.image ? (
                <div>
                  <img
                    src={`http://localhost:3001${currentUser.image}`}
                    alt="dhg"
                  />
                </div>
              ) : (
                <div>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/166/166260.png"
                    alt="photo userA"
                  />
                </div>
              )}
            </div>

            <div className={style.rating__account}>
              <div>Мой рейтинг:</div>
              <Rating />
            </div>
          </div>

          <div className={style.wrapper_info__account}>
            <div className={style.header_info__account}>
              <div className={style.bio_info__account}>
      
                {
                `ФИО: ${currentUser.secondname} ${currentUser.name}  ${currentUser.patronymic}`
                
                }
              </div>
              <div className={style.main_info__account}>
                {`Возраст: ${currentUser.age}`}
              </div>
            </div>
            <div className={style.main_info__account}>
             {
               `О себе: ${currentUser.about}`
               
             } 
            </div>
            <div className={style.main_info__account}>
              Телефон для связи:<strong>{Number(currentUser.phone)}</strong>
            </div>
            <div className={style.main_info__account}>
              Почта для связи: <strong>{currentUser.email}</strong>
            </div>
          </div>
        </div>
        <div className={style.btn__account}>
          <button
            className={style.notification__infoUser_btn}
            onClick={changePathtoQuizz}
          >
            Редактировать
          </button>
        </div>
      </div>
    </>
  );
}
