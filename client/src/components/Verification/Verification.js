import React, { useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategories } from "../../redux/actions/allCategoriesAC";
import { updateUser } from "../../redux/actions/userAC";
import style from "./Verification.module.css";
import img from "../img/imgmansecond.jpg";
import { useNavigate } from "react-router-dom";

export default function Verification() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const categories = useSelector((state) => state.allCategories);
  const user = useSelector(state=>state.users)
  const [inputs, setInputs] = useState({
    name: user.name,
    secondname: user.secondname,
    patronymic: user.patronymic,
    age: user.age,
    about: user.about,
    categories: 1,
  });
  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  const inputHandler = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };


  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateUser(inputs));
    setTimeout(()=>{
      navigate('/user/userpage')
    },1000)
  };
// -------------------------------


  return (
    <div className={style.container_form__user_info}>
      <div className={style.container_form__user}>
        <form className={style.form__user_info} onSubmit={submitHandler}>
          <label htmlFor="name">Имя :</label>
          <input
            id="name"
            type="text"
            name="name"
            onChange={inputHandler}
            value={inputs.name}
            required
          />
          <label htmlFor="secondname">Фамилия : </label>
          <input
            id="secondname"
            type="text"
            name="secondname"
            onChange={inputHandler}
            value={inputs.secondname}
            required
          />
          <label htmlFor="patronymic">Очество : </label>
          <input
            id="patronymic"
            type="text"
            name="patronymic"
            onChange={inputHandler}
            value={inputs.patronymic}
            required
          />
          <label htmlFor="age"> Возраст :</label>
          <input
            id="age"
            type="number"
            name="age"
            onChange={inputHandler}
            value={inputs.age}
            required
          />
          <label htmlFor="phone"> Телефон :</label>
          <input
            id="phone"
            type="phone"
            name="phone"
            onChange={inputHandler}
            value={inputs.phone}
            required
          />
          <label htmlFor="about">О себе :</label>
          <input
            className={style.form__textarea}
            placeholder="Расскажите о себе и своем опыте работы"
            id="about"
            type="textarea"
            name="about"
            onChange={inputHandler}
            value={inputs.about}
          />
          <label htmlFor="categories"> Выберете кагорию :</label>
          <select className={style.new_select_style_wpandyou}
            id="categories"
            type="select"
            name="categories"
            onChange={inputHandler}
          >
            {categories &&
              categories.map((el) => (
                <option className={style.options__form_btn} key={el.id} value={el.id}>
                  {el.title}
                </option>
              ))}
          </select>
          {/* добавление фото */}

          <div className={style.choose_photo__account}>
            <input type="file"
                    name="file"
                    id="file"
                    // ref={upload}
                    // onChange={imageHandler}
            />
              <button  className={style.notification__infoUser_btn}>
                Загрузить фото
              </button>
            </div>

          <button className={style.container__form_btn}>Сохранить</button>
        </form>
      </div>
      <div className={style.illustration___form__user}>
        <h3>Обновитe информацию</h3>
        <img src={img} alt="back img" />
      </div>
    </div>
  );
}
