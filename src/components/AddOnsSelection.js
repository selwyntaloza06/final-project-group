import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { incrementAddon, decrementAddon } from "../store/slices/addonsSlice";
import Navigation from "./Navigation";
import "./AddOnsSelection.css";

const AddOnsPage = () => {
  const { addons, totalCost } = useSelector((state) => state.addons);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addonImages = {
    1: "https://images.unsplash.com/photo-1589001739255-93bab41e3f64?w=300&h=200&fit=crop",
    2: "https://images.unsplash.com/photo-1598990749607-8b717c0125e4?w=300&h=200&fit=crop",
    3: "https://images.unsplash.com/photo-1587355765548-3758b4c6f5de?w=300&h=200&fit=crop",
    4: "https://images.unsplash.com/photo-1563297007-0686b7003af7?w=300&h=200&fit=crop",
    5: "https://images.unsplash.com/photo-1616007736933-4e8aed0de7c0?w=300&h=200&fit=crop",
  };

  return (
    <div className="addons-page">
      <Navigation />

      <div className="page-header">
        <h1>Add-ons Selection</h1>
        <p>Choose your audio/visual equipment</p>
      </div>

      <div className="addons-grid">
        {addons.map((addon) => (
          <div key={addon.id} className="addon-card">
            <div className="addon-image">
              <img src={addonImages[addon.id]} alt={addon.name} />
            </div>
            <div className="addon-info">
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
          </div>
        ))}
      </div>

      <div className="page-footer">
        <div className="total-cost">
          <h3>Total Add-ons Cost: ${totalCost}</h3>
        </div>
      </div>
    </div>
  );
};

export default AddOnsPage;
