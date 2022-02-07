import React,{useState, useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux'
import CustomInput from '../UI/Input/Input';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { getAllCategories } from '../../redux/actions/allCategoriesAC';
import { updateUser } from '../../redux/actions/userAC';
import { ADD_NEW_TASK } from '../../redux/types/usersTasksTypes';

function AddTaskForm(props) { 

  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({title:'', address:'', time:'', date:18, price:'', description:'', image:'', categories:1});
  
  
  const inputHandler = (e) => {
    setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
};


console.log(inputs);

const submitHandler = (e) => {
    e.preventDefault();
    console.log(inputs);
    dispatch(ADD_NEW_TASK(inputs))
    setInputs({title:'', address:'', time:'', date:'', price:0, description:'', image:'', categories:1})
  }
  
  useEffect(() => {
    dispatch(getAllCategories())
  }, []);
  
  return(
    <form>
      <input id="title" type="text" name="title" onChange={inputHandler} value={inputs.name}></input>
      <input id="address" type="text" name="address" onChange={inputHandler} value={inputs.address}></input>     
      <input id="time" type="text" name="time" onChange={inputHandler} value={inputs.time}></input>
      <input id="date" type="text" name="date" onChange={inputHandler} value={inputs.date}></input>      
      <input id="price" type="number" name="price" onChange={inputHandler} value={inputs.price}></input>   
      <input id="description" type="text" name="description" onChange={inputHandler} value={inputs.description}></input>   
      <input id="image" type="text" name="image" onChange={inputHandler} value={inputs.image}></input>   
      <select id="categories" type="select" name="categories" onChange={inputHandler} value={inputs.categories}></select>   
    </form>
  ) 
}

export default AddTaskForm;
