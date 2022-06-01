import React from "react"
import Signup from "./Signup.js"
import {AuthProvider} from "../contexts/AuthContext.js"
import {BrowserRouter as Router, Routes as Switch, Route} from "react-router-dom" 

import {Dashboard} from "./Dashboard.js"
import {Login} from "./login.js"

function App(argument) {
	return (
			<Router>
				<AuthProvider>
					<Switch>
						<Route exact path="/" element={<Dashboard />} />
						<Route path="/signup" element={<Signup />} />
						<Route path="/login" element={<Login />} />
					</Switch>
				</AuthProvider>
			</Router>
	)
}

export default App