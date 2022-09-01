import { Component } from "react";
import PropTypes from "prop-types";

// functional component
const FuncitonComponent = (props) => {
  return (
    <>
      <div>{props.name}</div>
      <div>{props.children}</div>
      <div>{props.age}</div>
    </>
  );
};

FuncitonComponent.defaultProps = {
  name: "JUN",
};

FuncitonComponent.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
};

// class component
class ClassComponent extends Component {
  render() {
    const { name, age } = this.props;
    return (
      <>
        <h1>My name is {name}</h1>
        <h2>And I'm {age} years old</h2>
      </>
    );
  }
}

export { FuncitonComponent, ClassComponent };
