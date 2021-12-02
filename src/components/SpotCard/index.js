import React, { useState } from "react";
import "./SpotCard.scss";
import { currencyMask } from "../../utils";
import { reserveSpot } from "../../services/BookingService";

const SpotCard = ({ spot }) => {
  console.log({ spot });
  const [reservationDate, setReservationDate] = useState("");

  const onSubmitReservation = async () => {
    const response = await reserveSpot(spot._id, reservationDate);
    console.log({ response });
    if (response?._id) {
      setReservationDate("");
      alert("Spot Reservado com sucesso!");
    } else {
      alert("Falha ao reservar Spot!");
    }
  };

  return (
    <div className={`spot-card ${reservationDate ? "reservation-active" : ""}`}>
      <div className="spot-img-container">
        <img src={spot.thumbnail} alt={spot.title} />
      </div>
      <div className="spot-data-container">
        <div className="spot-header-container">
          <p className="spot-title">{spot.title || " - "}</p>
          <p className="spot-value">{currencyMask(spot.price) || " - "}</p>
        </div>
        <div className="spot-content">
          <div className="spot-techs">
            <p className="spot-tech">{spot.techs || " - "}</p>
          </div>
          <p className="spot-description">{spot.description || " - "}</p>
          <div className="spot-address">
            <p>CEP: {spot.title || " - "}</p>
            <p>
              {spot.address || " - "} - {spot.number || " - "}{" "}
            </p>
            <p>
              {spot.neighborhood || " - "} -{" "}
              {`${spot.city || " - "}/${spot.state || " - "}`}
            </p>
          </div>
        </div>
      </div>
      <div className="spot-card-action-buttons">
        <input
          type="date"
          value={reservationDate}
          onChange={(e) => setReservationDate(e.target.value)}
        />
        {reservationDate && (
          <button
            className="spot-cancel-button btn-primary"
            onClick={() => setReservationDate("")}
          >
            Cancelar
          </button>
        )}
        <button
          className="spot-reservation-button btn-primary"
          onClick={() => {
            if (!reservationDate) return;
            onSubmitReservation();
          }}
        >
          Reservar
        </button>
      </div>
    </div>
  );
};

export default SpotCard;