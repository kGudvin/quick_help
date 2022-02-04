import ButtonCircle from "../UI/Buttons/ButtonCircle"
import style from './style.module.css'




const NavBt = () => {
    let user = true;
    user = false
    const handleButton = () =>{

        console.log('aaaaaaaaaaaa');
    }



    return(
        <div className={`${style.nav_bt}`}>
            <div ><a href="" className={`${style.nav_link}`}>Sign In</a></div>
            
           <ButtonCircle Handler={handleButton}>Sign Up</ButtonCircle>
        </div>
    )
}

export default NavBt