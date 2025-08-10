import PropTypes from "prop-types";
import { Component } from "react";

class App extends Component {
  static defaultProps = {
    name: "이름",
    num: "12",
  };

  static propTypes = {
    name: PropTypes.string,
    num: PropTypes.number.isRequired,
  };

  render() {
    const { name, num } = this.props;
    return (
      <div>
        <div>{name} is name</div>
        <div>{num} is num</div>
      </div>
    );
  }
}

export default App;
