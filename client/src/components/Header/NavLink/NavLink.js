import { Link } from 'react-router-dom'
import style from './style.module.css'





const NavLink = () => {




    return (
        <div className={style.link_list}>
                <Link to='addtask' className={style.link}>Добавить задание</Link>
                <Link to='findtask' className={style.link}>Найти задание</Link>
                <Link to='tasks' className={style.link}>Задания</Link>
            </div>
    )
}

export default NavLink