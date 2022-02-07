import { Link } from 'react-router-dom'
import style from './style.module.css'





const NavLink = () => {




    return (
        <div className={style.link_list}>
{/* Это только для юзера зарегистированного!! тут условие */}
                <Link to='findtask' className={style.link}>Найти задания</Link>
                <Link to='addtask' className={style.link}>Моя подработка</Link>
                <Link to='addtask' className={style.link}>Создать задание</Link>
                <Link to='tasks' className={style.link}>Мои задания</Link>
                <Link to='tasks' className={style.link}>Мои исполнители</Link>
                <Link to='#' className={style.link}>Уведомления</Link>
                

{/* Это для организации тут условие */}
                {/* <Link to='#' className={style.link}>Создать вакансию</Link>
                <Link to='#' className={style.link}>Мои вакансии</Link>
                <Link to='#' className={style.link}>Отклики</Link>
                <Link to='#' className={style.link}>Уведомления</Link>
    */}

    {/* для незареганых - ничего кроме регистрации и авторизаци */}

            </div>
    )
}

export default NavLink
