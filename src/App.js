import data from "./data.json";

import "./App.scss";

export default function App() {
  console.log(data);

  return (
    <div className="App">
      <h1>React Express App</h1>
      <p>Ok</p>
      <p>Test data: {data.test}</p>
    </div>
  );
}
