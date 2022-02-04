import style from './style.module.css'
import default_avatar from './default_avatar.png'


const Avatar = () => {




    return (
        <div className={`${style.avatar}`}>
            <img src={default_avatar} height={43} className={`${style.icon}`}/>
        </div>

    )
}


export default Avatar