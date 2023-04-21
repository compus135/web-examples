import { BrowserRouter, Link } from "react-router-dom";
import "./registerMicroApps";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/react">react</Link>
        <span> </span>
        <Link to="/static">static</Link>
      </BrowserRouter>
      <div id="subapp"></div>
    </div>
  );
}

export default App;
