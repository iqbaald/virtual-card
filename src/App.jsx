import Header from "./components/Header";
import Identify from "./components/Identify";

import "./App.css";

function App() {
  return (
    <>
      <div className="card">
        <div className="top">
          <Header />
          <Identify />
        </div>
        <div className="bottom"></div>
      </div>
    </>
  );
}

export default App;
