import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Traffic from "./components/traffic.jsx";

function App() {
  return (
    <div className = "container">
      <div className = "stick"></div>
        <div className = "traffic-light">
        <Traffic />
        </div>
    </div>
  );
}

export default App;
