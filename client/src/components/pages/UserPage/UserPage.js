import React, { useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Rating from "../../UI/Rating/Rating";
import style from "./UserPage.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser, postImage } from "../../../redux/actions/userAC";
import axios from "axios";

export default function UserPage() {
  // const allState = useSelector(state => state.users)
  const currentUser = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = useParams();

  const changePathtoQuizz = () => {
    navigate("/quizz");
  };
  useEffect(() => {
    dispatch(getCurrentUser(id.id));
  }, []);

  // ==================================================

  const upload = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    const newIncident = {
      sampleFile: upload.current.files[0],

    };
    console.log(upload.current.files[0]);
  //  await fetch('http://localhost:3001/user/upload/', {
  //   method: 'post',
  //   headers: {
  //     'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
  //     'Content-Type': 'multipart/form-data'
  //   },
  //   body: JSON.stringify(newIncident)
  dispatch(postImage({sampleFile: upload.current.files[0]}))
  }
  

  const [image, setImage] = useState(null);
  // const [reader] = useState(new FileReader());

  // function imageHandler() {
  //   reader.readAsDataURL(upload.current.files[0]);
  //   reader.addEventListener("load", function () {
  //     setImage(reader.result);
  //   });
  // }

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
          Заполните профиль, чтобы Вас быстрее одобрили при выборе исполнителя?
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
        <div className={style.header_wrapper__account}>
          <div className={style.wrapper_photo__account}>
            <div className={style.photo__account}>
              {/* {
                currentUser.photo ?
                (<img src={currentUser.image} alt={currentUser.email}/>)
                    :
                    (
                <img
                    src="https://cdn-icons-png.flaticon.com/512/166/166260.png"
                    alt="add_photo"
                  />
                )
              } */}
              {/* <form  onSubmit={handleSubmit} >
                    <label  htmlFor="file">Add photo</label>
                  <input 
                   
                    type="file"
                    name="file"
                    id="file"
                    ref={upload}
                    onChange={imageHandler}
                    // onClick ={()=>setVisible(false)}
                  />
                  <div >
                      <button type="submit">
                      Upload photo
                    </button>
                  </div>
                </form> */}
                {!currentUser.image && <form
                
                id="uploadForm"
                // action="http://localhost:3001/user/upload"
                // method="post"
                // encType="multipart/form-data"
                onSubmit={(e)=>handleSubmit(e)}
              >
                <input type="file" name="sampleFile" ref={upload}/>
                <input type="submit" value="Upload!" />
              </form>}
              

              <div>
                {/* {currentUser.image.length === 1 && ( */}
                
                  <>
                    <img
                      // src={`http://localhost:3001/uploads/${currentUser.image[0]?.path}`}
                    src={`http://localhost:3001`}
                    />
                  </>
                {/* )} */}
              </div>
            </div>

            <div className={style.rating__account}>
              <div>Мой рейтинг:</div>
              <Rating />
            </div>
          </div>
          <div className={style.wrapper_info__account}>
            <div className={style.header_info__account}>
              <div className={style.main_info__account}>
                Имя:{currentUser.name}
              </div>
              <div className={style.main_info__account}>
                Очество: {currentUser.patronymic}
              </div>
              <div className={style.main_info__account}>
                Фамилия:{currentUser.secondname}
              </div>
              <div className={style.main_info__account}>
                Возраст: {currentUser.age}
              </div>
            </div>
            {/* <div className={style.main_info__account}>Город: {currentUser.address}</div> */}
            <div className={style.main_info__account}>
              О себе:
              {currentUser.about}
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
    </div>
    
    </>
  );
}
