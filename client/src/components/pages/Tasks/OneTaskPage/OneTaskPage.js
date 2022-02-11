import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getOneUserTask } from "../../../../redux/actions/oneUserTaskAC";
import TaskItem from "../TaskItem/TaskItem";
import TasksMP from "../TasksMP/TasksMP";
import style from "./OneTask.module.css"

function OneTaskPage() {

  const dispatch = useDispatch();
  const currentUrl = useLocation().pathname;
  const id = Number(currentUrl.replace("/tasks/userstasks/", ""));
  
  useEffect(() => {
    console.log(id);
    dispatch(getOneUserTask(id));
  }, []);
  
  // const oneTask = useSelector(state => state.oneUserTask);
  const oneTask = useSelector(state => state.oneUserTask);

  const currentTask = oneTask.oneTask
  console.log(oneTask);

  // const checkCategory = (category) => {
  //   switch (category) {
  //     case "Курьерские услуги":
  //       return courierAvatar;
  //     case "Ремонт и строительство":
  //       return repairhouse;
  //     case "Грузоперевозки":
  //       return deliveryTruck;
  //     case "Уборка помещения":
  //       return broom;
  //     case "Компьютерная помощь":
  //       return settings;

  //     default:
  //       return "https://cdn-icons-png.flaticon.com/512/166/166260.png";
  //   }
  // };

  return (
  //   <>
  // {oneTask?.oneTask &&
  //   <div>
  //     <p>{currentTask.title}</p>
  //     <p>{currentTask.date}</p>
  //     <img src={currentTask.image} width="200px" />
  //     <p>{currentTask.adress}</p>
  //     <p>{currentTask.description}</p>
  //   </div>
  // }
  // </>
  <div className={style.container}>
    {currentTask  &&
    <TaskItem
            key={currentTask.id}
            id={currentTask.id}
            title={currentTask.title}
            address={currentTask.address}
            time={currentTask.time}
            date={currentTask.date}
            price={currentTask.price}
            description={currentTask.description}
            image={currentTask.image}
            categorie={currentTask.categorie}
          />
          } 
  </div>
  );
}

export default OneTaskPage;
