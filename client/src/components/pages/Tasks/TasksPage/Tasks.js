import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOneUserTask } from "../../../../redux/actions/currentUserTasksAC";
import { getUsersTasks } from "../../../../redux/actions/userTasksAC";
import TaskItem from "../TaskItem/TaskItem";

function Tasks({ input, price, cat, lim, result }) {
  const dispatch = useDispatch();
  //   const allTasks = useSelector(state=>state.usersTasks)
  //   let regexp = new RegExp(input, 'i')
  //   const [result, setResult] = useState(allTasks)

  //   useEffect(()=>{
  // if(price){
  //   let as = allTasks.filter(el=>el.price >= price)
  //   setResult(as)

  //   }
  //   }, [price])
  //   useEffect(()=>{
  //   let res = allTasks.filter(el=>regexp.test(el.title))
  //   setResult(res)
  //   }, [input])

  //   useEffect(()=>{
  //     if(cat){
  //       let catRes = allTasks.filter(el=>el.categorie === cat)
  //       setResult(catRes)

  //       }
  //   }, [cat])
  //   useEffect(()=>{
  //     dispatch(getUsersTasks(lim))
  //   },[])

  return (
    <>
      {result &&
        result.map((el) => (
          <TaskItem
            key={el.id}
            id={el.id}
            title={el.title}
            address={el.address}
            time={el.time}
            date={el.date}
            price={el.price}
            description={el.description}
            image={el.image}
            categorie={el.categorie}
          />
        ))}
    </>
  );
}

export default Tasks;
