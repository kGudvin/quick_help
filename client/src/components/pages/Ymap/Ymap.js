import React, { useState } from 'react';
import style from './ymap.module.css'
import {useEffect} from 'react'
import {Link} from 'react-router-dom'

function Ymap() {
    let ymaps = window.ymaps
    // const address = 'Москва, ул. Льва Толстого, 16';
    const [tasks, setTasks] = useState([{title:"Организация", address:'Москва, ул. Льва Толстого, 16', date:21.03, price:3500, id:1}, {title:"Организация", address:'Москва, улица Орджоникидзе, 11с10', date:29.03, price:10500, id:2}])



    
   

    function init(){
        // Создание карты.
        const myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.745280288813746,37.626212873046875],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 11
        })
        // Создаём макет содержимого.
        // MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        //     '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        // ),
        //  myGeoObject = new ymaps.GeoObject({
        //     // Описание геометрии.
        //     geometry: {
        //         type: "Point",
        //         coordinates: [[55.78173463870143,37.63285879397917]]
        //     },
        //     // Свойства.
        //     properties: {
        //         // Контент метки.
        //         iconContent: 'Надо перетащить бомжа',
        //         hintContent: 'Ну давай уже тащи'
        //     }
        // }, {
        //     // Опции.
        //     // Иконка метки будет растягиваться под размер ее содержимого.
        //     preset: 'islands#blackStretchyIcon',
        //     // Метку можно перемещать.
        //     draggable: true
        // })
        tasks.map((el)=>{
            const geocoder = ymaps.geocode(el.address);
            geocoder.then((res)=>{
            const coordinates = res.geoObjects.get(0).geometry.getCoordinates();

            myMap.geoObjects
            .add(new ymaps.Placemark(coordinates, {
                balloonContent: `<h2>${el.title}</h2>
                    <h3>Организация:${el.address}</h3>
                    <h3>адрес:${el.date}</h3>
                    <h3>дата:${el.price}</h3>
                    <a href="/tasks/usertasks/цена:${el.id}"><button>Перейти</button><a>`
            }, {
                preset: 'islands#icon',
                iconColor: '#0095b6'
            }))

        })})
        
        // .add(myGeoObject)
    }
    
     useEffect(()=>{
 
         ymaps.ready(init);
    },[])


  return (
      <div className={`${style.map_container}`}>
          <div id="map" style={{width: "100%", height: "500px"}}></div>
       </div>
  )
}

export default Ymap;
