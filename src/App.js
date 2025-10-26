import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import LandingPage from "./components/LandingPage";
import RoomsPage from "./components/RoomSelection";
import AddOnsPage from "./components/AddOnsSelection";
import MealsPage from "./components/MealsSelection";
import SummaryPage from "./components/SummaryModal";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/rooms" element={<RoomsPage />} />
            <Route path="/addons" element={<AddOnsPage />} />
            <Route path="/meals" element={<MealsPage />} />
            <Route path="/summary" element={<SummaryPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
