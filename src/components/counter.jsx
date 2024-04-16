import React, { Component } from "react";
//Controlled component
class Counter extends Component {
  getCounterClass = () => {
    let { counter } = this.props;
    let classes = "btn m-2 btn-";
    classes += counter.value === 0 ? "warning" : "primary";
    return classes;
  };

  render() {
    let { counter } = this.props;
    // console.log(this.props, "props");
    return (
      <div>
        <span className={this.getCounterClass()}>{counter.value}</span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => this.props.onIncrement(counter)}
        >
          Increment
        </button>
        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={() => this.props.onDecrement(counter)}
        >
          Decrement
        </button>
        <button
          onClick={() => this.props.onDelete(counter.id)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
