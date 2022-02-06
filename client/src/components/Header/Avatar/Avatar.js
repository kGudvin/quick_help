import style from './style.module.css'
import default_avatar from './default_avatar.png'
import { Link, Navigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { userLogout } from '../../../redux/actions/userAC';

const Avatar = () => {


    const user = useSelector(state=> state.users)

const dispatch = useDispatch();
const logoutHandler = () => {
    dispatch(userLogout())
}

    return (
        <div className={`${style.av}`}>
        {user && <Link to="/personal" className={`${style.nav_link}`}>PersonalPage</Link>}
        <Link to="/" className={`${style.nav_link}`} onClick={logoutHandler}>LogOut</Link>

        <div className={`${style.avatar}`}>
            <img src={default_avatar} height={43} className={`${style.icon}`}/>
        </div>
    </div>
    )
}


export default Avatar