import React,{useState, useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { getAllCategories } from '../../redux/actions/allCategoriesAC';
import {addUserTask } from '../../redux/actions/userTasksAC'

function AddTaskForm(props) { 

  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({title:'', address:'', time:'', date:0, price:'', description:'', image:'', categories:1});
  const categories = useSelector( state => state.allCategories);

  
  const inputHandler = (e) => {
    setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
};

// console.log(inputs);

const submitHandler = (e) => {
    e.preventDefault();
    console.log(inputs);
    dispatch(addUserTask(inputs))
    setInputs({title:'', address:'', time:'', date:'', price:0, description:'', image:'', categories:1})
  }
  
  useEffect(() => {
    dispatch(getAllCategories())
  }, []);
  
  return(
    <form onSubmit={submitHandler}>
      <lable for="title">Название задания</lable>
      <input id="title" type="text" name="title" onChange={inputHandler} value={inputs.name}></input>
      <lable for="address">Адрес</lable>
      <input id="address" type="text" name="address" onChange={inputHandler} value={inputs.address}></input>
      <lable for="time">Сколько времени займет выполнение вашего задания?</lable>     
      <input id="time" type="text" name="time" onChange={inputHandler} value={inputs.time}></input>
      <lable for="date">Введите дату в формате дд.мм.гггг</lable>
      <input id="date" type="text" name="date" onChange={inputHandler} value={inputs.date}></input>
      <lable for="price">Сколько вы готовы заплатить за заказ?</lable>     
      <input id="price" type="number" name="price" onChange={inputHandler} value={inputs.price}></input>
      <lable for="description">Введите подробное описание Вашего заказа</lable> 
      <input id="description" type="text" name="description" onChange={inputHandler} value={inputs.description}></input>
      <lable for="image">Прикрепите изображения, относящиеся к заказу</lable>    
      <input id="image" type="text" name="image" onChange={inputHandler} value={inputs.image}></input> 
      <lable for="categories">Выберите категорию, подходящую к заказу</lable>    
      <select id="categories" type="select" name="categories" onChange={inputHandler} value={inputs.categories}>
        {categories.map(el => <option key={el.id} value={el.id}>{el.title}</option>)}</select>   
      <button>submit this shit</button>
    </form>
  ) 
}

export default AddTaskForm;
