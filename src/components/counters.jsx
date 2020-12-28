import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    const { OnDelete, OnIncrement, OnReset, counters } = this.props;
    return (
      <div>
        <button onClick={OnReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            OnDelete={OnDelete}
            OnIncrement={OnIncrement}
            counter={counter}
          >
            <br></br>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
