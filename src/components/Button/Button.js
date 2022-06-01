// Component Styles
import "./Button.css"
// import {SubmitToLocalStorage} from "../../Events/submitToDB.js";

const Button = (props) => {
	return (
		<button {...props} className="button">{`${props.children}`}</button>
	)
}

export {Button}