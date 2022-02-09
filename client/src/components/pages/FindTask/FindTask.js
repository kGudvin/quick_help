import Tasks from "../Tasks/TasksPage/Tasks"
import Ymap from "../Ymap/Ymap"
import style from './findtasks.module.css'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllCategories } from "../../../redux/actions/allCategoriesAC"
import { getUsersTasks } from "../../../redux/actions/userTasksAC"

const FindTask = () => {
  const [lim, setLim] = useState(100)

  const [input, setInput] = useState('')
  const [cat, setCat] = useState('')
  const [price, setPrice] = useState()
  const handleChange = (e) => {
    setInput(e.target.value)
    console.log(input);

  }
  const handlePrice = (e) => { 
    setPrice(e.target.value)
    console.log(price);


  }
  const handleCat = (e)=> {
    setCat(e.target.value)
  }
   const dispatch = useDispatch()
  const categories = useSelector(state => state.allCategories);
    useEffect(() => {
      // dispatch(getUsersTasks(100))
      setTimeout(()=>{setPrice(1)}, 700)
      
    }, []);


  return (
    <>
      {/* <Ymap input={input} /> */}
      <div className={`${style.div}`}>
        <input onChange={(e) => handleChange(e)} className={`${style.input}`} placeholder="поиск по имени"/>
         <select onChange={(e) => handleCat(e)} className={`${style.input}`}>{categories.map(el => <option key={el.id} value={el.title}>{el.title}</option>)}
        </select> 
        <input  type="number" onChange={(e) => handlePrice(e)} className={`${style.input}`} placeholder="цена от-"/>

      </div>
      <Tasks input={input} price={price} cat={cat} lim={lim} />
      {/* <button className={style.btns__main} onClick={()=>setLim(prev=>prev+3)}>Показать еще</button> */}
    </>
  )
}


export default FindTask
