import React from "react";
import { render } from "react-dom";
import { TwoLayerDonutChart } from "./TwoLayerDonutChart";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <TwoLayerDonutChart />
  </div>
);

render(<App />, document.getElementById("root"));
