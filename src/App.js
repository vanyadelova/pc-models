import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import ModelDetails from "./components/ModelDetails";

const data = {
  "Ivel Z3": {
    manufacturer: "Ivasim",
    year: 1969,
    origin: "Croatia"
  },
  "Bally Astrocade": {
    manufacturer: "Bally Consumer Products",
    year: 1977,
    origin: "USA"
  },
  "Sord M200 Smart Home Computer": {
    manufacturer: "Sord Computer Corporation",
    year: 1971,
    origin: "Japan"
  },
  "Commodore 64": {
    manufacturer: "Commodore",
    year: 1982,
    origin: "USA"
  }
};

class App extends Component {
  state = { data };

  render() {
    return (
      <div className="App">
        <ModelDetails pcs={this.props.pcs} />
        <select value={this.updateSelection} onChange={this.updateSelection}>
          <option value="">pick a model</option>
          {Object.entries(data).map(pc => (
            <option value={pc[0]} key={pc[0]}>
              {pc[0]} ({pc[1].year})
            </option>
          ))}
        </select>
        <button onClick={this.buttonClick}>Add</button>
      </div>
    );
  }

  updateSelection = e => {
    this.setState({ selectedPc: e.target.value });
    const model = e.target.value;
    const selectedPc = {
      model: model,
      ...this.state.data[model]
    };
    this.setState({ selected: selectedPc });
  };

  buttonClick = () => {
    if (this.state.selected.name && this.state.selectedPc === "") {
      return;
    }
    return this.props.dispatch(addPc(this.state.selected));
  };
}

const mapStateToProps = pcs => {
  return {
    pcs: pcs
  };
};

export const ADD_PC = "ADD_PC";
export function addPc(selected) {
  return {
    type: ADD_PC,
    payload: selected
  };
}

export default connect(mapStateToProps)(App);
