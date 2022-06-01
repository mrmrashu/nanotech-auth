import React, {useState} from "react"
import { Link } from "react-router-dom"

import {Button} from "./Button/Button.js";
import {Separator} from "./Separator/separator.js";

import {DialogBox} from "./dialog-box/dialog-box.js"; 
import { useAuth } from '../contexts/AuthContext.js';

const Dashboard = () => {
	const { currentUser, logout } = useAuth()
	const [error, useError] = useState("")
	function handleLogout () {
		
	}

	return (
		<DialogBox>
			<h2>Nanotech Internal Affairs Dashboard</h2>
			<div>currently signed in as</div>
			{currentUser && currentUser.email}
			<Separator></Separator>
			<div Style="display: grid; grid-template-columns: auto auto; grid-gap: 1rem;">
				<Button>Log Out</Button>
				<Link Style={"textDecoration: ; color: transparent"} to="/update-profile">
					<Button component={Link} onClick={handleLogout}>Edit Profile</Button>
				</Link>
			</div>
		</DialogBox>
	)
}

export {Dashboard}