import React, { useState, useCallback } from 'react';
import style from './ymap.module.css'
import {useEffect} from 'react'
// import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getUsersTasks } from '../../../redux/actions/userTasksAC';
let ymaps = window.ymaps;


function Ymap({input, price, result}) {
  const myM = document.getElementById('map')
    const dispatch = useDispatch()
    // const [per, setPer] = useState(true)
    const tasks = useSelector(state=>state.usersTasks)
     const init = () =>{
       
        const myMap = new ymaps.Map("map", {
            center: [55.745280288813746,37.626212873046875],
            zoom: 11
        }) 
        tasks.map((el)=>{
            const geocoder = ymaps.geocode(el.address);
            geocoder.then((res)=>{
            const coordinates = res.geoObjects.get(0).geometry.getCoordinates();
            // setPer(prev=>!prev)
            // console.log(per);
            myMap.geoObjects
            .add(new ymaps.Placemark(coordinates, {
                balloonContent: `<div style="padding:5px;font-size:15px;"><h2>${el.title}</h2>
                <a>адрес: ${el.address}</a><br/>
                <a>дата: ${el.date}</a><br/>
                <a>цена: ${el.price}</a><br/>
                <a href="http://localhost:3000/tasks/userstasks/${el.id}"><button class="ybutton">Перейти</button><a></div>`
            }, {
                preset: 'islands#icon',
                iconColor: '#0095b6'
            }))
            
        })})  
        
        
    }
    useEffect(()=>{
   
      console.log(result);
      if(result.length !== tasks.length ){
        
        // myM.innerHTML=""
      }

           setTimeout(()=>{
            ymaps.ready(init)  
           }, 700)

        },[price]);  
        useEffect(()=>{
   
          dispatch(getUsersTasks())
          
          ymaps.ready(init) 
          // setTimeout(()=>{
        // myM.innerHTML=""

              // },700)
    
            },[]);  


     
     
 
  return (
    
     <div className={`${style.map_container}`}>
          <div id="map" style={{width: "100%", height: "500px"}} className={`${style.map_div}`} ></div>
       </div>
      
     
      
  )
}

export default Ymap
