import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementRoom, decrementRoom } from "../store/slices/roomSlice";
import "./RoomSelection.css";

const RoomSelection = () => {
  const { rooms, totalCost } = useSelector((state) => state.rooms);
  const dispatch = useDispatch();

  return (
    <section className="room-selection">
      <h2>Venue Room Selection</h2>
      <div className="rooms-grid">
        {rooms.map((room) => (
          <div key={room.id} className="room-card">
            <h3>{room.name}</h3>
            <p className="capacity">Capacity: {room.capacity}</p>
            <p className="price">${room.price}</p>
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
        ))}
      </div>
      <div className="total-cost">
        <h3>Total Room Cost: ${totalCost}</h3>
      </div>
    </section>
  );
};

export default RoomSelection;
