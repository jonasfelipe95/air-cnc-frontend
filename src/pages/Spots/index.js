import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import SpotCard from "../../components/SpotCard";
import { getSpots } from "../../services/SpotsService";
import "./Spots.scss";

const SpotsPage = () => {
  const [spots, setSpots] = useState([]);
  const [loadingSpots, setLoadingSpots] = useState(false);

  const fetchSpots = async () => {
    setLoadingSpots(true);

    const response = await getSpots();

    setSpots([...response]);
    setLoadingSpots(false);
  };

  useEffect(() => {
    fetchSpots();
  }, []);

  return (
    <div className="page-container">
      <Header />

      <div className="page-content">
        <h1 className="title-page">Spots para Reserva</h1>

        {loadingSpots && "Carregando Spots..."}

        {!loadingSpots &&
          !spots.length &&
          "Não há Spots disponíveis para reserva no momento!"}

        <div className="spots-list">
          {!loadingSpots &&
            spots.length &&
            spots.map((spot, index) => (
              <SpotCard key={`spot_${index}`} spot={spot} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default SpotsPage;
