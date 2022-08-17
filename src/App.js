import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/homePage";
import Appointment from "./components/Appointment/Appointment";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="/appointment" element={<Appointment />}></Route>
        {/* <div className="App">
        <HomePage />
      </div> */}
      </Routes>
    </Router>
  );
}

export default App;
