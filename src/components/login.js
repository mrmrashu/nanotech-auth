import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from '../contexts/AuthContext.js';

import {DialogBox} from "./dialog-box/dialog-box.js"; 
import {TextBox} from "./text-box/text-box.js"; 
import {Button} from "./Button/Button.js";

const Login = () => {
	const emailRef = useRef()
	const pwdRef = useRef()
	const { login } = useAuth()
	const [error, setError] = useState("")
	const [loading , setLoading] = useState("")
	const navigate = useNavigate()

	function handleSubmit (evt) {
		evt.preventDefault();

		try {
			setError('')
			setLoading(true);
			login(emailRef.current.value, pwdRef.current.value)
			navigate("/")
		} catch {
			setError("Failed to log in")
		}

		setLoading(false);
	}

	return (
		<>
			<DialogBox>
				<form onSubmit={handleSubmit} method={"POST"}>
					<h2 Style="margin-block-start: 0">Log In</h2>
					{error && <div>{error}</div>}
					<TextBox type={"Email"} subtitle={"Email"} ref={emailRef} required />
					<TextBox type={"Password"} subtitle={"Password"} ref={pwdRef} required/>
					<Button disabled={loading} Style={"margin-block-start: 10px"} type={"submit"}>Log In</Button>
				</form>
			</DialogBox>
			<p> Do not have an account?Sign Up Instead <Link to="/signup">Sign Up</Link></p>
		</>
	)
}

export {Login}