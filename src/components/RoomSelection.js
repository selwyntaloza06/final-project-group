import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { incrementRoom, decrementRoom } from "../store/slices/roomSlice";
import Navigation from "./Navigation";
import "./RoomSelection.css";

const RoomsPage = () => {
  const { rooms, totalCost } = useSelector((state) => state.rooms);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const roomImages = {
    1: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&h=200&fit=crop",
    2: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=300&h=200&fit=crop",
    3: "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?w=300&h=200&fit=crop",
    4: "https://images.unsplash.com/photo-1571624436279-b272aff752b5?w=300&h=200&fit=crop",
    5: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=300&h=200&fit=crop",
  };

  return (
    <div className="rooms-page">
      <Navigation />

      <div className="page-header">
        <h1>Venue Room Selection</h1>
        <p>Choose the rooms you need for your conference</p>
      </div>

      <div className="rooms-grid">
        {rooms.map((room) => (
          <div key={room.id} className="room-card">
            <div className="room-image">
              <img src={roomImages[room.id]} alt={room.name} />
            </div>
            <div className="room-info">
              <h3>{room.name}</h3>
              <p className="capacity">Capacity: {room.people} people</p>
              <p className="price">${room.price.toLocaleString()}</p>
              <div className="quantity-controls">
                <button
                  onClick={() => dispatch(decrementRoom(room.id))}
                  disabled={room.quantity === 0}
                >
                  -
                </button>
                <span className="quantity">{room.quantity}</span>
                <button onClick={() => dispatch(incrementRoom(room.id))}>
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="page-footer">
        <div className="total-cost">
          <h3>Total Room Cost: ${totalCost.toLocaleString()}</h3>
        </div>
      </div>
    </div>
  );
};

export default RoomsPage;
