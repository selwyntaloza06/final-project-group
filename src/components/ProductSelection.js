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
        <RoomSelection />
        <AddOnsSelection />
        <MealsSelection />
      </div>
      <SummaryModal />
    </div>
  );
};

export default ProductSelection;
