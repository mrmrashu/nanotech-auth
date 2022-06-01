// Component Styles
import "./text-box.css"
import {forwardRef} from "react";

const TextBox = forwardRef((props, ref) => {
		return (
			<>
			<div className={"text-box-subtitle"}>{props.subtitle}</div>
			<input
				ref = {ref}
				{...props}
				className="workonfocus native-textbox"/>
			</>
		)
	}
)

export {TextBox};