import React from 'react';
import {Link} from 'react-router-dom'

function TaskItem({id, title, adress, time, date, price, description, image, categorie}) {
  return (
    <div>
      <hr></hr>
      <Link to={`userstasks/${id}`}><p>{title}</p></Link>
      <p>{description}</p>
      <p>{categorie}</p>
      <hr></hr>

    </div>
  );
}

export default TaskItem;
