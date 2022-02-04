import Avatar from '../Avatar/Avatar'
import Logo from '../Logo/Logo'
import NavBt from '../NavBt/NavBt'
import NavLink from '../NavLink/NavLink'
import style from './style.module.css'

const Header = () =>{

    let user = true;
    user = false
    return (
        <nav className={`${style.nav}`}>
            <Logo/>
            <NavLink/>
            {user?<Avatar/>:<NavBt/>}

            
        </nav>
    )
}

export default Header