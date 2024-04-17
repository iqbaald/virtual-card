import Header from "./components/Header";
import Identify from "./components/Identify";
import Biodata from "./components/Biodata";
import Highlight from "./components/Highlight";

import "./App.css";

function App() {
  return (
    <>
      <div className="card">
        <div className="top">
          <Header />
          <Identify />
        </div>
        <div className="bottom">
          <Biodata />
          <Highlight />
        </div>
      </div>
    </>
  );
}

export default App;
