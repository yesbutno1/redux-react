import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  light: state,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: () => dispatch({ type: "SWITCH" }),
});

const countComponent = ({ count, onChange }) => (
  <div>
    <p>{count}</p>
    <button onClick={onChange}>switch</button>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(countComponent);
