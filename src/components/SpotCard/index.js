import React, { useState } from "react";
import "./SpotCard.scss";
import { currencyMask } from "../../utils";
import {
  approveReserve,
  rejectReserve,
  reserveSpot,
} from "../../services/BookingService";

const SpotCard = ({
  myReserves,
  reservation,
  spot,
  toApprove,
  onChangeApproved = () => {},
}) => {
  const [reservationDate, setReservationDate] = useState("");

  const onSubmitReservation = async () => {
    const response = await reserveSpot(spot._id, reservationDate);
    if (response?._id) {
      setReservationDate("");
      alert("Spot Reservado com sucesso!");
    } else {
      alert("Falha ao reservar Spot!");
    }
  };

  const onSubmitApproveReserve = async (reserveId) => {
    await approveReserve(reserveId);
    onChangeApproved();
  };

  const onSubmitRejectReserve = async (reserveId) => {
    await rejectReserve(reserveId);
    onChangeApproved();
  };

  return (
    <div
      className={`spot-card ${reservationDate ? "reservation-active" : ""} ${
        !reservation && !toApprove?.length ? "reservation-disabled" : ""
      } ${myReserves?.length ? "highlight-reserves" : ""}`}
    >
      <div className="spot-img-container">
        <img src={spot.thumbnail} alt={spot.title} />
      </div>
      <div className="spot-data-container">
        <div className="spot-header-container">
          <p className="spot-title">{spot.companyName || " - "}</p>
          <p className="spot-value">{currencyMask(spot.price) || " - "}</p>
        </div>
        <div className="spot-content">
          <div className="spot-techs">
            {JSON.parse(spot.techs).map((tech, index) => (
              <p key={`tech-${index}`} className="spot-tech">
                - {tech}
              </p>
            ))}
            {!JSON.parse(spot.techs).length && (
              <p className="spot-tech">Nenhuma tecnologia cadastrada</p>
            )}
          </div>
          <p className="spot-description">{spot.description || " - "}</p>
          <div className="spot-address">
            <p>CEP: {spot.zipcode || " - "}</p>
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
      {!!myReserves?.length &&
        myReserves.map((reserve, index) => (
          <div key={`reserve-${index}`} className="spot-card-action-buttons">
            {reserve?.approved === false ? (
              <p className="rejected-text">Reserva Rejeitada</p>
            ) : reserve?.approved === true ? (
              <p className="approved-text">Reserva Aprovada</p>
            ) : (
              ""
            )}
            <p className="date-text">
              {reserve?.date.split("-").reverse().join("/")}
            </p>
          </div>
        ))}

      {!toApprove?.length && (
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
            disabled={!reservationDate}
            title={
              !reservationDate
                ? "Selecione uma data para reservar!"
                : "Reservar"
            }
            onClick={() => {
              if (!reservationDate) return;
              onSubmitReservation();
            }}
          >
            Reservar
          </button>
        </div>
      )}

      {!!toApprove?.length &&
        toApprove.map((reserve, index) => (
          <div key={`reserve-${index}`} className="spot-card-action-buttons">
            {reserve?.approved === false ? (
              <p className="rejected-text">Rejeitado</p>
            ) : reserve?.approved === true ? (
              <p className="approved-text">Aprovado</p>
            ) : (
              ""
            )}
            <p className="date-text">
              {reserve?.date.split("-").reverse().join("/")}
            </p>
            <button
              title="Rejeitar Reserva"
              className="spot-cancel-button btn-primary"
              onClick={() => {
                onSubmitRejectReserve(reserve._id);
              }}
            >
              Rejeitar
            </button>
            <button
              className="spot-reservation-button btn-primary"
              title="Aprovar Reserva"
              onClick={() => {
                onSubmitApproveReserve(reserve._id);
              }}
            >
              Aprovar
            </button>
          </div>
        ))}
    </div>
  );
};

export default SpotCard;
