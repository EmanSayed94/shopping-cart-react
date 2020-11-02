import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./../containers/Home/index";

import Header from "./../components/Header/index";
import Auth from './../containers/Auth/index';

class App extends Component {
	render() {
		return (
			<div className="grid-container">
				<Header />

				<main>

				<Switch>
				<Route
					path="/"
					exact
					component={Home}
				/>
				<Route
					path="/login"
					exact
					render={(props) => <Auth formType="Login" {...props} />}
				/>
				<Route
					path="/register"
					render={(props) => <Auth formType="SignUp" {...props} />}
				/>
			</Switch>
				</main>
				<footer> All Rights Are Reserved</footer>
			</div>
			
		);
	}
}

export default App;
