import { Component } from "react";

class ScrollBox extends Component {
	// 바닥으로 : react Element를 참조하기 위한 방식으로 ref를 활용
	// 마치 svelte에서 bind:this를 활용하는 것처럼
	navigateToBottom = () => {
		const { scrollHeight, clientHeight } = this.outerBox;
		this.outerBox.scrollTop = scrollHeight - clientHeight;
	};

	// render
	render() {
		const outerStyle = {
			height: "300px",
			width: "300px",
			overflow: "auto",
			position: "relative",
		};

		const innerStyle = {
			height: "650px",
			width: "300px",
			background: "green",
		};

		return (
			<div style={outerStyle} ref={(ref) => (this.outerBox = ref)}>
				<div style={innerStyle}></div>
			</div>
		);
	}
}

export default ScrollBox;
