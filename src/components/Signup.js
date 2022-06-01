import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from '../contexts/AuthContext.js';

import {DialogBox} from "./dialog-box/dialog-box.js"; 
import {TextBox} from "./text-box/text-box.js"; 
import {Button} from "./Button/Button.js";

export default function Signup() {
	const emailRef = useRef()
	const pwdRef = useRef()
	const pwdConfirmRef = useRef()
	const { signup } = useAuth()
	const [error, setError] = useState("")
	const [loading , setLoading] = useState("")
	const navigate = useNavigate()

	function handleSubmit (evt) {
		evt.preventDefault();

		if (pwdRef.current.value !== pwdConfirmRef.current.value) {
			return setError("Passwords do not match");
		}

		try {
			setError('')
			setLoading(true);
			signup(emailRef.current.value, pwdRef.current.value)
			navigate("/")
		} catch {
			setError("Failed to create an Account")
		}

		setLoading(false);
	}

	return (
		<>
			<DialogBox>
				<form onSubmit={handleSubmit} method={"POST"}>
					<h2 Style="margin-block-start: 0">Sign Up</h2>
					{error && <div>{error}</div>}
					<TextBox type={"Email"} subtitle={"Email"} ref={emailRef} required />
					<TextBox type={"Password"} subtitle={"Password"} ref={pwdRef} required/>
					<TextBox type={"Password"} subtitle={"Confirm Password"} ref={pwdConfirmRef} required/>
					<Button disabled={loading} Style={"margin-block-start: 10px"} type={"submit"}>Sign Up</Button>
				</form>
			</DialogBox>
			<p> Already have an account? <Link to="/login">Log In</Link></p>
		</>
	)
}