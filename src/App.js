import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import LandingPage from "./components/LandingPage";
import ProductSelection from "./components/ProductSelection";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/products" element={<ProductSelection />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
