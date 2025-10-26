import React from "react";
import { useDispatch } from "react-redux";
import { toggleModal } from "../store/slices/summarySlice";
import "./Navigation.css";

const Navigation = () => {
  const dispatch = useDispatch();

  return (
    <nav className="navigation">
      <div className="nav-brand">
        <h2>BudgetEase Solutions</h2>
      </div>
      <div className="nav-actions">
        <button
          className="show-details-btn"
          onClick={() => dispatch(toggleModal())}
        >
          Show Details
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
