/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import SpotCard from "../../components/SpotCard";
import { useAuth } from "../../context/AuthContext";
import { getMyReserves } from "../../services/BookingService";
import { getSpots } from "../../services/SpotsService";
import "./Spots.scss";

const SpotsPage = () => {
  const [spots, setSpots] = useState([]);
  const [reserves, setReserves] = useState([]);
  const [loadingSpots, setLoadingSpots] = useState(false);

  const { userId } = useAuth();

  const fetchSpots = async () => {
    setLoadingSpots(true);

    const response = await getSpots();

    if (response) {
      setSpots([...response]);
    } else {
      alert("Erro em carregar Spots");
    }
    setLoadingSpots(false);
  };

  const fetchReserves = async (userId) => {
    const response = await getMyReserves(userId);

    if (response) {
      setReserves([...response]);
    } else {
      alert("Erro em carregar Spots");
    }
  };

  useEffect(() => {
    fetchSpots();
    fetchReserves(userId);
  }, []);

  return (
    <div className="page-container">
      <Header />

      <div className="page-content">
        <h1 className="title-page">Spots para Reserva</h1>

        {loadingSpots && "Carregando Spots..."}

        {!loadingSpots && !spots.length && (
          <p className="empty-text">
            Não há Spots disponíveis para reserva no momento!
          </p>
        )}

        <div className="spots-list">
          {!loadingSpots && spots.length
            ? spots.map((spot, index) => (
                <SpotCard
                  myReserves={reserves.filter(
                    (_reserve) => _reserve.spot === spot._id
                  )}
                  reservation={true}
                  key={`spot_${index}`}
                  spot={spot}
                />
              ))
            : ""}
        </div>
      </div>
    </div>
  );
};

export default SpotsPage;
