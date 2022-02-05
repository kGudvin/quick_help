import { Link } from 'react-router-dom'
import style from './style.module.css'


const Logo = () =>{



    return (
        <div className={`${style.logo}`}>
          <i className="fas fa-map-marked-alt"></i>
          <h1><Link to="/" className={`${style.link}`}>Quick Help</Link></h1>
        
        </div>
    )
}

export default Logo
