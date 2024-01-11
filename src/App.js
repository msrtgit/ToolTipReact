import React from "react";
import "./App.css";
import ToolTip from "./components/ToolTip.js";

function App() {
  const [direction, setDirection] = React.useState("TOP");
  const handleDirection = (e) => {
    if (e.target.value.length > 0) {
      setDirection(e.target.value);
    }
  };
  return (
    <div className="App">
      <h1>Tool Tip React Application</h1>
      <div className="form-group">
        <label className="form-label">Tool Tip Position</label>
        <select
          id="directionControl"
          name="directionControl"
          className="form-control"
          onChange={handleDirection}
        >
          <option value="TOP">TOP</option>
          <option value="BOTTOM">BOTTOM</option>
          <option value="LEFT">LEFT</option>
          <option value="RIGHT">RIGHT</option>
        </select>
      </div>
      <ToolTip direction={direction} />
    </div>
  );
}

export default App;
