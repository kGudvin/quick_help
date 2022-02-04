import style from './style.module.css'




const NavLink = () => {




    return (
        <div className={style.link_list}>
                <a href='#' className={style.link}>Добавить задание</a>
                <a href='#' className={style.link}>Найти задание</a>
                <a href='#' className={style.link}>Задания</a>
            </div>
    )
}

export default NavLink