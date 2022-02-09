
import Rating from "../../../UI/Rating/Rating";
import style from "./SmallUserCard.module.css";
function SmallUserCard({index, image,secondname,patronymic,name, email, phone,about}) {



  return (
<div className={style.container_user__card}>
      <div style={{margin:'20px'}}>
      {
    `${index}. Соискатель ${name} откликнулся на задание НАЗВАНИЕ ЗАДАНИЯ ТУТ:`
      }
      </div>
  <div className={style.wrapper_user__card}>
    <div className={style.wrapper_photorating__card}>
        
            <div className={style.img__card}>
              
            {image ? (
                  <img
                    src={`http://localhost:3001${image}`}
                    alt="dhg"
                  />
                
              ) : (

                  <img
                    src="https://cdn-icons-png.flaticon.com/512/166/166248.png"
                    alt="photo userA"
                  />
               
              )}
             
              </div>
                     <div className={style.rating__card}>
                        <Rating />
                      </div>
            
        </div>



          <div className={style.wrapper_info__card}>
            <div className={style.title__card}>
            {
                `ФИО: ${secondname} ${name} ${patronymic}`
                
                }
            </div>
            <div className={style.some_info__card}>
         
            <span>{`О себе: ${about}`}</span>
            <span>{`Тел:${phone}`}</span>
            <span>{`Почта: ${email}`}</span>
          
            </div>
          </div>
        
        <div className={style.wrapper_btns__card}>
          <button>Пригласить</button>
          <button>Отклонить</button>
          <button>Написать</button>
        </div>
   
  </div>
</div>
  );
}

export default SmallUserCard;
