import ButtonCircle from "../UI/Buttons/ButtonCircle"
import style from './style.module.css'




const NavBt = () => {
    let user = true;
    user = false



    return(
        <div className={`${style.nav_bt}`}>
            <div ><a href="" className={`${style.nav_link}`}>Sign In</a></div>
            
           <ButtonCircle>Sign Up</ButtonCircle>
        </div>
    )
}

export default NavBt