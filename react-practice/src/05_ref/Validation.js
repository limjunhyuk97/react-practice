import { Component } from "react";
import "./Validation.css";

class ValidationComponent extends Component {
	state = {
		password: "",
		clicked: false,
		validated: false,
	};

	handleChange = (e) => {
		this.setState({ ...this.state, [e.target.name]: e.target.value });
	};

	handleClicked = (e) => {
		this.setState({
			...this.state,
			clicked: true,
			validated: this.state.password === "0000",
		});
		this.input.focus();
	};

	render() {
		return (
			<div>
				<input
					name="password"
					type="password"
					value={this.state.password}
					onChange={this.handleChange}
					ref={(ref) => (this.input = ref)}
					className={
						this.state.clicked
							? this.state.validated
								? "success"
								: "failure"
							: ""
					}
				/>
				<button onClick={this.handleClicked}>Validate</button>
			</div>
		);
	}
}

export default ValidationComponent;
