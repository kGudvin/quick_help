import style from './style.module.css'
import default_avatar from './default_avatar.png'
import { Link } from 'react-router-dom'


const Avatar = () => {




    return (
        <div className={`${style.av}`}>
        <Link to="/signOut" className={`${style.nav_link}`}>SignOut</Link>
        <div className={`${style.avatar}`}>
            <img src={default_avatar} height={43} className={`${style.icon}`}/>
        </div>
    </div>
    )
}


export default Avatar