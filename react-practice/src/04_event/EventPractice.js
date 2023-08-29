import { Component } from "react";

class EventPractice extends Component {
	//* 해당 Class 인스턴스의 메서드로서 this.handleChange가 동작하려면,
	// this.handleChange 메서드의 this를 현재 Class에서 생성된 인스턴스에 바인딩해주는 과정이 필요하다
	//* 그렇지 않으면, HTML 요소의 이벤트 리스너로 등록되는 과정에서 this를 통해 현재 컴포넌트 인스턴스를 가리킬 수 있는 방법이 없어진다.
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value,
		});
	}

	handleSubmit(e) {}

	//* 아래와 같은 방식으로 constructor에서 this 바인딩을 하지않는 방법도 있다.
	handleClick = (e) => {};

	state = {
		message: "",
		title: "",
	};

	render() {
		return (
			<div>
				<h1>이벤트 연습</h1>
				{/* 이벤트 리스너 부착 - state 변경 */}
				<input
					type="text"
					name="message"
					placeholder="아무거나 입력 ㄱ"
					value={this.state.message}
					onChange={this.handleChange}
				/>
				<input
					type="text"
					name="title"
					placeholder="타이틀"
					value={this.state.title}
					onChange={this.handleChange}
				/>
				{/* 이벤트 리스너 부착 - state 초기화*/}
				<button onClick={(e) => this.setState({ message: "", title: "" })}>
					초기화
				</button>
				<h2>{this.state.message}</h2>
				<h2>{this.state.title}</h2>
			</div>
		);
	}
}

export default EventPractice;
