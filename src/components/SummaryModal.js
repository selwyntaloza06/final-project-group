import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleModal } from "../store/slices/summarySlice";
import Navigation from "./Navigation";
import "./SummaryModal.css";

const SummaryPage = () => {
  const { rooms, totalCost: roomTotal } = useSelector((state) => state.rooms);
  const { addons, totalCost: addonsTotal } = useSelector(
    (state) => state.addons
  );
  const {
    meals,
    numberOfPeople,
    totalCost: mealsTotal,
  } = useSelector((state) => state.meals);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const grandTotal = roomTotal + addonsTotal + mealsTotal;

  const getSummaryData = () => {
    const data = [];

    // Add rooms
    rooms.forEach((room) => {
      if (room.quantity > 0) {
        data.push({
          name: `${room.name} (Capacity:${room.capacity})`,
          unitCost: room.price,
          quantity: room.quantity,
          totalCost: room.price * room.quantity,
          type: "room",
        });
      }
    });

    // Add addons
    addons.forEach((addon) => {
      if (addon.quantity > 0) {
        data.push({
          name: addon.name,
          unitCost: addon.price,
          quantity: addon.quantity,
          totalCost: addon.price * addon.quantity,
          type: "addon",
        });
      }
    });

    // Add meals
    meals.forEach((meal) => {
      if (meal.selected && numberOfPeople > 0) {
        data.push({
          name: meal.name,
          unitCost: meal.price,
          quantity: `For ${numberOfPeople} people`,
          totalCost: meal.price * numberOfPeople,
          type: "meal",
        });
      }
    });

    return data;
  };

  const summaryData = getSummaryData();

  return (
    <div className="summary-page">
      <Navigation />

      <div className="page-header">
        <h1>Event Summary</h1>
        <p>Review your conference selections and total cost</p>
      </div>

      <div className="summary-content">
        <div className="grand-total-section">
          <h2>TOTAL COST FOR THE EVENT</h2>
          <h1 className="grand-total">${grandTotal.toLocaleString()}</h1>
        </div>

        <table className="summary-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Unit Cost</th>
              <th>Quantity</th>
              <th>Total Cost</th>
            </tr>
          </thead>
          <tbody>
            {summaryData.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>${item.unitCost.toLocaleString()}</td>
                <td>{item.quantity}</td>
                <td>${item.totalCost.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {summaryData.length === 0 && (
          <div className="empty-summary">
            <p>
              No items selected yet. Start by choosing rooms for your event.
            </p>
          </div>
        )}
      </div>

      <div className="page-footer">
        <div className="navigation-buttons">
          <button
            className="nav-btn back-btn"
            onClick={() => navigate("/meals")}
          >
            Back to Meals
          </button>
          <button
            className="nav-btn primary-btn"
            onClick={() => alert("Thank you for your conference planning!")}
          >
            Complete Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default SummaryPage;
