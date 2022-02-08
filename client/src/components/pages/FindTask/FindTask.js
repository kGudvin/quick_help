import Input from "../../UI/Input/Input"
import Tasks from "../Tasks/TasksPage/Tasks"
import Ymap from "../Ymap/Ymap"
import style from './findtasks.module.css'
import { useState } from "react"

const FindTask = () => {
   const [input, setInput] = useState('')
   const hadleChange = (e) =>{
       setInput(e.target.value)
       console.log(input);

   }


    return (
        <>
        <Ymap input={input}/>
        <div className={`${style.div}`}>
            <input onChange={(e)=>hadleChange(e)} className={`${style.input}`}/>
        </div>
        <Tasks input={input}/>
        </>
    )
}


export default FindTask
