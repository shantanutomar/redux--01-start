import React, { Component } from "react";
import { connect } from "react-redux";
// import * as actionTypes from "../../store/actions/actionTypes";
import * as actionCreators from "../../store/actions/index";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
  state = {
    counter: 0
  };

  counterChangedHandler = (action, value) => {
    switch (action) {
      case "inc":
        this.setState(prevState => {
          return { counter: prevState.counter + 1 };
        });
        break;
      case "dec":
        this.setState(prevState => {
          return { counter: prevState.counter - 1 };
        });
        break;
      case "add":
        this.setState(prevState => {
          return { counter: prevState.counter + value };
        });
        break;
      case "sub":
        this.setState(prevState => {
          return { counter: prevState.counter - value };
        });
        break;
    }
  };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.incrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.decrementCounter}
        />
        <CounterControl label="Add 5" clicked={this.props.addCounter} />
        <CounterControl
          label="Subtract 5"
          clicked={this.props.subtractCounter}
        />
        <hr />
        <button onClick={() => this.props.storeResults(this.props.ctr)}>
          {" "}
          Store Results{" "}
        </button>
        <ul>
          {this.props.storeRes.map(ele => {
            return (
              <li key={ele.id} onClick={() => this.props.deleteResults(ele.id)}>
                {ele.value}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

var mapStateToProps = state => {
  return {
    ctr: state.ctr.counter,
    storeRes: state.res.results
  };
};

var mapDispatchToProps = dispatch => {
  return {
    incrementCounter: () => dispatch(actionCreators.incCtr()),
    decrementCounter: () => dispatch(actionCreators.decCtr()),
    addCounter: () => dispatch(actionCreators.addCtr(5)),
    subtractCounter: () => dispatch(actionCreators.subCtr(5)),
    storeResults: res => dispatch(actionCreators.storeRes(res)),
    deleteResults: id => dispatch(actionCreators.delStore(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
