import { Component } from "react";

class Iteration extends Component {
	state = {
		fruits: [
			{ key: 0, name: "사과" },
			{ key: 1, name: "배" },
			{ key: 2, name: "참외" },
			{ key: 3, name: "토마토" },
			{ key: 4, name: "귤" },
		],
		id: 5,
	};

	deleteHandler = (id) => {
		return (e) => {
			console.log("clicked");
			this.setState({
				...this.state,
				fruits: this.state.fruits.filter((fruit) => fruit.key !== id),
			});
		};
	};

	render() {
		return (
			<ul>
				{this.state.fruits.map((fruit, idx) => (
					<li key={fruit.key} onClick={this.deleteHandler(fruit.key)}>
						{fruit.name}
					</li>
				))}
			</ul>
		);
	}
}

export default Iteration;
