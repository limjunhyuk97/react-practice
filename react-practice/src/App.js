import { Component } from "react";

// 04_event
import EventPractice from "./04_event/EventPractice";
import EventPracticeFunctional from "./04_event/EventPracticeFunctional";
// 05_ref
import Validation from "./05_ref/Validation";
import ScrollBox from "./05_ref/ScrollBox";
// 06_repitition
import IterationIdx from "./06_repetition/IterationIdx";
import IterationKey from "./06_repetition/IterationKey";

class App extends Component {
	render() {
		return (
			<div>
				<IterationKey></IterationKey>
			</div>
		);
	}
}

export default App;
