import React from 'react';
import { Link } from 'react-router-dom';

export default function UserPage() {
  return <div>
    Личный кабинет:
    Photo
    "Мы слишком мало знаем о вас, чтобы Вы могли стать исполнителем, давайте познакомимся поближе? ---BUTTON "ПРОЙТИ ОПРОС""
    <Link to="/quizz"><button>ПРОЙТИ ОПРОС</button></Link>
  </div>;
}
