import style from "./style.module.css"



function Input({...props}) {


    return (
        <input {...props} className={`${style.input}`}/>
    )


}

export default Input