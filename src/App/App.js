import React, { Component} from "react";
import Home from './../containers/Home/index';


class App extends Component {
	render() {
		return (
			<div className="grid-container">
				<header>
					<a href="/">EMMA Shopping Cart</a>
				</header>
				<main>
					<Home />
				</main>
				<footer> All Rights Are Reserved</footer>
			</div>
		);
	}
}

export default App;
