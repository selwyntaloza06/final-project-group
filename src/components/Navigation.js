import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleModal } from "../store/slices/summarySlice";
import "./Navigation.css";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const isActivePage = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navigation">
      <div className="nav-brand">
        <h2>BudgetEase Solutions</h2>
      </div>

      <div className="nav-links">
        <button
          className={`nav-link ${isActivePage("/") ? "active" : ""}`}
          onClick={() => navigate("/")}
        >
          Home
        </button>
        <button
          className={`nav-link ${isActivePage("/rooms") ? "active" : ""}`}
          onClick={() => navigate("/rooms")}
        >
          Rooms
        </button>
        <button
          className={`nav-link ${isActivePage("/addons") ? "active" : ""}`}
          onClick={() => navigate("/addons")}
        >
          Add-ons
        </button>
        <button
          className={`nav-link ${isActivePage("/meals") ? "active" : ""}`}
          onClick={() => navigate("/meals")}
        >
          Meals
        </button>
      </div>

      <div className="nav-actions">
        {location.pathname !== "/" && (
          <button
            className="nav-btn show-details-btn"
            onClick={() => navigate("/summary")}
          >
            Quick Summary
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
