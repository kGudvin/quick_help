import React from 'react';
import {Link} from 'react-router-dom'
import MainButton from '../../../UI/Buttons/MainButton';
import ProgressBar from '../../../UI/ProgressBar/ProgressBar';

function TaskItem({id, title, adress, time, date, price, description, image, categorie}) {
  return (
    <div>
      <hr></hr>
      <Link to={`userstasks/${id}`}><p>{title}</p></Link>
      <p>{description}</p>
      <p>{categorie}</p>
      <ProgressBar done={50}/>
      <button>Взяться</button>
      <hr></hr>
      <hr></hr>
    </div>
  );
}

export default TaskItem;
