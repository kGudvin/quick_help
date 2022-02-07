import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getOneUserTask } from "../../../../redux/actions/oneUserTaskAC";

function OneTaskPage() {

  const dispatch = useDispatch();
  const currentUrl = useLocation().pathname;
  const id = Number(currentUrl.replace("/tasks/userstasks/", ""));
  console.log(id);
  console.log(currentUrl);

  useEffect(() => {
    dispatch(getOneUserTask(id));
    console.log("object");
  }, []);
  
  const oneTask = useSelector(state => state.oneUserTask);
  const currentTask = oneTask.oneTask

  return (
    <>
  {oneTask?.oneTask &&
    <div>
      <p>{currentTask.title}</p>
      <p>{currentTask.date}</p>
      <img src={currentTask.image} width="200px" />
      <p>{currentTask.adress}</p>
      <p>{currentTask.description}</p>
    </div>
  }
  </>
  );
}

export default OneTaskPage;
