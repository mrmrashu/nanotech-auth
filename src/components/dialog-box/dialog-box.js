import "./dialog-box.css";
const DialogBox = (props) => {
	return (
		<div className="DialogBox">{props.children}</div>
		)
}

export {DialogBox}