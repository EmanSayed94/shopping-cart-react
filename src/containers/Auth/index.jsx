import React, { Component } from "react";
import Loader from "react-loader-spinner";

import { connect } from "react-redux";

import AuthForm from "../../components/AuthForm/index";
import * as actions from "../../redux/actions/auth";

class Auth extends Component {
	state = {};
	onSubmit = (values) => {
		// console.log("Received values of form: ", values);
		this.props.onAuth(values.email, values.password, this.props.formType);
	};
	render() {
		const { formType, loading } = this.props;
		return (
			<div className="login-container">
				{loading ? (
					<Loader type="Circles" color="#00BFFF" height={50} width={50} />
				) : (
					<AuthForm formType={formType} onFinish={this.onSubmit} >
				{this.props.error&&<p style={{color:'red'}}>{this.props.error.message}</p>}

					</AuthForm>)}
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	console.log(state.authReducer.loading);
	return {
		loading: state.authReducer.loading,
		error:state.authReducer.error
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		onAuth: (email, password, formtype) =>
			dispatch(actions.auth(email, password, formtype)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
