import { Component } from "react";

// 04_event
import EventPractice from "./04_event/EventPractice";
import EventPracticeFunctional from "./04_event/EventPracticeFunctional";
// 05_ref
import Validation from "./05_ref/Validation";
import ScrollBox from "./05_ref/ScrollBox";

class App extends Component {
	render() {
		return (
			<div>
				<ScrollBox ref={(ref) => (this.scrollBox = ref)}></ScrollBox>
				<button
					onClick={() => {
						this.scrollBox.navigateToBottom();
					}}
				>
					바닥으로
				</button>
			</div>
		);
	}
}

export default App;
