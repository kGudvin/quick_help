import React, { useState, useCallback } from 'react';
import style from './ymap.module.css'
import {useEffect} from 'react'
// import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getUsersTasks } from '../../../redux/actions/userTasksAC';
let ymaps = window.ymaps;


function Ymap({input}) {
    const dispatch = useDispatch()
    const [per, setPer] = useState(true)
    const tasks = useSelector(state=>state.usersTasks)
    // let regexp = new RegExp(input, 'i')
    // let result = tasks.filter(el=>regexp.test(el.title))
    // const someFunction = useCallback(() => {
    //     if(tasks.length){
    //         // console.log('монтирование',per);
    //        ymaps.ready(init)  
    //    } 
    //   }, [tasks])
    
    
    
    
     
   
    
     const init = () =>{
       
        const myMap = new ymaps.Map("map", {
            center: [55.745280288813746,37.626212873046875],
            zoom: 11
        }) 
        tasks.map((el)=>{
            const geocoder = ymaps.geocode(el.address);
            geocoder.then((res)=>{
            const coordinates = res.geoObjects.get(0).geometry.getCoordinates();
            setPer(prev=>!prev)
            // console.log(per);
            myMap.geoObjects
            .add(new ymaps.Placemark(coordinates, {
                balloonContent: `<h2>Организация:${el.title}</h2>
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
      // setTimeout(()=>{
      //   console.log("ggfds");
      // },5000)
      dispatch(getUsersTasks())
         console.log('bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb');
        //  someFunction()
         if(tasks.length && per){
            // setTimeout(()=>{
                console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
                ymaps.ready(init)  
            // },1000)
       } 
        },[]);  

        // useEffect(() => {
        //     return () => {
        //         setPer(prev=>!prev)
        //         console.log("Демонтирование",per);
        //       // Your code you want to run on unmount.
        //     };
        //   }, []); 

    
    
 
  return (
    
     <div className={`${style.map_container}`}>
          <div id="map" style={{width: "100%", height: "500px"}}></div>
       </div>
      
     
      
  )
}

export default Ymap;
