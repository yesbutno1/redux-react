import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  counter: state,
});


const mapDispatchToProps = (dispatch) => ({
    incrementByOne: () => dispatch({ type: "INCREMENT" }),
    decrementByOne: () => dispatch({ type: "DECREMENT" }),
    incrementByTen: () => dispatch({ type: "INCREMENT10" }),
    decrementByTen: () => dispatch({ type: "DECREMENT10" }),
    reset: () => dispatch({type: "RESET"}),
});

const CounterComponent = ({ counter, incrementByOne, decrementByOne, incrementByTen, decrementByTen, reset }) => (
  <div>
    <p>{counter}</p>
    <button onClick={incrementByOne}>Increment by One</button>
    <button onClick={decrementByOne}>Decrement by One</button>
    <button onClick={incrementByTen}>Increment by Ten</button>
    <button onClick={decrementByTen}>Decrement by Ten</button>
    <button onClick={reset}>Reset to Zero</button>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);
