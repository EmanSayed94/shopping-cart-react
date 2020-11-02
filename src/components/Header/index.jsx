import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="header container-fluid">
			<div>
				<Link to="/">EMMA Shopping Cart</Link>
			</div>
			<div>
				
					<Link to="/login">Login</Link>
				
					<Link to="/register">Register</Link>
				
                
			</div>
		</header>
	);
};

export default Header;
