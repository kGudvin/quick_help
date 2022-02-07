import React, { useState } from 'react';
import style from './ymap.module.css'
import {useEffect} from 'react'
// import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getUsersTasks } from '../../../redux/actions/userTasksAC';
let ymaps = window.ymaps;
function Ymap() {
    const dispatch = useDispatch()
   
       
    const [per, setPer] = useState(true)
    const tasks = useSelector(state=>state.usersTasks)
    // console.log(tasks);
    
    
    // const address = 'Москва, ул. Льва Толстого, 16';
    // const [tasks, setTasks] = useState([{title:"Организация", address:'Москва, ул. Льва Толстого, 16', date:21.03, price:3500, id:1}, {title:"Организация", address:'Москва, улица Орджоникидзе, 11с10', date:29.03, price:10500, id:2}])
    
    
    
     
   
    
    
     function init(){
        setPer(prev=>!prev)
        const myMap = new ymaps.Map("map", {
            center: [55.745280288813746,37.626212873046875],
            zoom: 11
        }) 
        console.log(tasks);
        tasks.map((el)=>{
            const geocoder = ymaps.geocode(el.address);
            geocoder.then((res)=>{
            const coordinates = res.geoObjects.get(0).geometry.getCoordinates();
            
            myMap.geoObjects
            .add(new ymaps.Placemark(coordinates, {
                balloonContent: `<h2>Организация:${el.title}</h2>
                <h3>адрес:${el.address}</h3>
                <h3>дата:${el.date}</h3>
                <h3>цена:${el.price}</h3>
                <a href="/tasks/userstasks/${el.id}"><button>Перейти</button><a>`
            }, {
                preset: 'islands#icon',
                iconColor: '#0095b6'
            }))
            
        })})
        
    }
    useEffect(()=>{
         console.log("ASYNC");
         dispatch(getUsersTasks())
        
        },[]);  

        useEffect(()=>{
            if(tasks.length && per){
                 console.log(per);
                ymaps.ready(init)
            } 
        }, [tasks]);        

    
    
 
  return (
     <div className={`${style.map_container}`}>
          <div id="map" style={{width: "100%", height: "500px"}}></div>
       </div>
  )
}

export default Ymap;
