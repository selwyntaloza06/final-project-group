import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "../store/slices/summarySlice";
import "./SummaryModal.css";

const SummaryModal = () => {
  const { isModalOpen } = useSelector((state) => state.summary);
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

  if (!isModalOpen) return null;

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
        });
      }
    });

    return data;
  };

  const summaryData = getSummaryData();

  return (
    <div className="modal-overlay" onClick={() => dispatch(toggleModal())}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>TOTAL COST FOR THE EVENT</h2>
          <h1 className="grand-total">${grandTotal}</h1>
          <button className="close-btn" onClick={() => dispatch(toggleModal())}>
            ×
          </button>
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
                <td>${item.unitCost}</td>
                <td>{item.quantity}</td>
                <td>${item.totalCost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SummaryModal;
