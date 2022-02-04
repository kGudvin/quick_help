import { Link } from 'react-router-dom'
import style from './style.module.css'


const Logo = () =>{



    return (
        <div className={`${style.logo}`}><h1><Link to="" className={`${style.link}`}>Logo</Link></h1></div>
    )
}

export default Logo