import React, { Component } from "react";

class Counter extends Component {
  styles = {
    fontSize: 20,
    fontWeight: "bold"
  };

  render() {
    console.log(this.props);
    let classes = this.getBadgeClasses();

    return (
      <div>
        {this.props.children}
        <span className={classes}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* <ul>{this.formatList()}</ul> */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }

  formatList() {
    const { tags } = this.props.counter;
    return tags.length === 0
      ? "No items in the list"
      : tags.map(tag => <li key={tag}>{tag}</li>);
  }
}

export default Counter;
