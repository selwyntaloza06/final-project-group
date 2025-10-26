import React from "react";
import Navigation from "./Navigation";
import RoomSelection from "./RoomSelection";
import AddOnsSelection from "./AddOnsSelection";
import MealsSelection from "./MealsSelection";
import SummaryModal from "./SummaryModal";
import "./ProductSelection.css";

const ProductSelection = () => {
  return (
    <div className="product-selection">
      <Navigation />
      <div className="sections-container">
        <div className="page-header">
          <h1>Conference Planning</h1>
          <p>Select your rooms, add-ons, and meals for your event</p>
        </div>
        <RoomSelection />
        <AddOnsSelection />
        <MealsSelection />
      </div>
      <SummaryModal />
    </div>
  );
};

export default ProductSelection;
