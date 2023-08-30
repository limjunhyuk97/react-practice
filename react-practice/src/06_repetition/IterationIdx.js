import { Component } from "react";

class Iteration extends Component {
	state = {
		fruits: ["사과", "배", "참외", "토마토", "귤"],
	};

	deleteHandler = (idx) => {
		console.log(idx);
		return (e) => {
			this.setState({
				...this.state,
				fruits: this.state.fruits.filter((fruit, i) => i !== idx),
			});
		};
	};

	render() {
		return (
			<ul>
				{this.state.fruits.map((fruit, idx) => (
					<li key={idx} onClick={this.deleteHandler(idx)}>
						{fruit}
					</li>
				))}
			</ul>
		);
	}
}

export default Iteration;
