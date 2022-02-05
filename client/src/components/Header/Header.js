import { useSelector } from 'react-redux'
import Avatar from './Avatar/Avatar'
import Logo from './Logo/Logo'
import NavBt from './NavBt/NavBt'
import NavLink from './NavLink/NavLink'
import style from './style.module.css'

const Header = () =>{
    const user = useSelector(state=> state.users)
    return (
        <nav className={`${style.nav}`}>
            <Logo/>
            <NavLink/>
            {user?<Avatar/>:<NavBt/>}

            
        </nav>
    )
}

export default Header
