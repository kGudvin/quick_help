import React,{useState} from 'react';
import pbStyles from './styles.module.css'


export default function ProgressBar({done}) {
	const [style, setStyle] = useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`
		}
		setStyle(newStyle)
	}, 200)

	return (
		<div className={pbStyles.progress}>
			<div className={pbStyles.progress-done} style={style}>
				{done}%
			</div>
		</div>
  )
}
