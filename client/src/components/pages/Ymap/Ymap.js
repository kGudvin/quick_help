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
        result.map((el)=>{
            const geocoder = ymaps.geocode(el.address);
            geocoder.then((res)=>{
            const coordinates = res.geoObjects.get(0).geometry.getCoordinates();
            // setPer(prev=>!prev)
            // console.log(per);
            myMap.geoObjects
            .add(new ymaps.Placemark(coordinates, {
                balloonContent: `<h2>${el.title}</h2>
                <h3>адрес:${el.address}</h3>
                <h3>дата:${el.date}</h3>
                <h3>цена:${el.price}</h3>
                <a href="http://localhost:3000/tasks/userstasks/${el.id}"><button>Перейти</button><a>`
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

          // setTimeout(()=>{
            ymaps.ready(init)  
          // }, 700)

        },[result]);  
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

export default React.memo(Ymap)
