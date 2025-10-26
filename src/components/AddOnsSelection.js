import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementAddon, decrementAddon } from "../store/slices/addonsSlice";
import "./AddOnsSelection.css";

const AddOnsSelection = () => {
  const { addons, totalCost } = useSelector((state) => state.addons);
  const dispatch = useDispatch();

  return (
    <section className="addons-selection">
      <h2>Add-ons Selection</h2>
      <div className="addons-grid">
        {addons.map((addon) => (
          <div key={addon.id} className="addon-card">
            <h3>{addon.name}</h3>
            <p className="price">${addon.price}</p>
            <div className="quantity-controls">
              <button
                onClick={() => dispatch(decrementAddon(addon.id))}
                disabled={addon.quantity === 0}
              >
                -
              </button>
              <span className="quantity">{addon.quantity}</span>
              <button onClick={() => dispatch(incrementAddon(addon.id))}>
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="total-cost">
        <h3>Total Add-ons Cost: ${totalCost}</h3>
      </div>
    </section>
  );
};

export default AddOnsSelection;
