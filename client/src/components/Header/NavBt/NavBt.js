import ButtonCircle from "../../UI/Buttons/ButtonCircle"
import style from './style.module.css'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';



const NavBt = () => {
  let user = true;
    user = false
    
    
    return(
        <div className={`${style.nav_bt}`}>
        <Link to="/signIn"><button className={`${style.btn_circle}`}>Войти</button></Link> 
        <Link to="/signUp"><button className={`${style.btn_circle}`}>Зарегестрироваться</button></Link>
        </div>
    )
}

export default NavBt
