import React, {Profiler} from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
function onRender(id, phase, actualDuration, baseDuration, startTime, commitTime) {
  // Aggregate or log render timings...
  console.log('id',id)
  console.log('phase',phase)

  console.log('baseDuration',baseDuration)
  console.log('actualDuration',actualDuration)

  console.log('startTime',startTime)
  console.log('commitTime',commitTime)

  console.log('-----------------------------------')
}
root.render(
  <React.StrictMode>
    <Profiler id="App" onRender={onRender}>
      <App />
    </Profiler>
  </React.StrictMode>
);
