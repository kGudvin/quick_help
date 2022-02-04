import ButtonCircle from "../UI/Buttons/ButtonCircle"
import style from './style.module.css'
import { Link, useNavigate } from 'react-router-dom';




const NavBt = () => {
    let user = true;
    user = false
    

    return(
        <div className={`${style.nav_bt}`}>
            <div ><Link to="/signIn" className={`${style.nav_link}`}>Sign In</Link></div>
            
          <Link to="/signUp"><ButtonCircle>Sign Up</ButtonCircle></Link>
        </div>
    )
}

export default NavBt
