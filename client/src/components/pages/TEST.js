import React from 'react';
import SmallUserCard from './UserPage/SmallUserCard/SmallUserCard';
import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAlltUsers } from '../../redux/actions/userAC';


function TEST() {
  const dispatch = useDispatch()
  const users = useSelector(state => state.users)
  console.log(users);
  useEffect(()=>{
    dispatch(getAlltUsers())
  },[])
  return(
<div style={{padding:'70px', display:'flex', flexDirection:'column', alignItems:'center', gap:'30px', backgroundColor: '#f8f8f8'}}>

{
  users &&
  users?.map((el,index)=>(
    <SmallUserCard index={index + 1} key={el.id} image={el.image} secondname={el.secondname} patronymic={el.patronymic} name={el.name}  email={el.email} phone={el.phone} about={el.about}/>)
)
  }
</div>
  ) 
}

export default TEST;
