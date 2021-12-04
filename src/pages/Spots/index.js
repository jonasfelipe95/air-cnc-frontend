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

    if (response) {
      setSpots([...response]);
    } else {
      alert("Erro em carregar Spots");
    }
    setLoadingSpots(false);
  };

  useEffect(() => {
    fetchSpots();
  }, []);
  console.log(spots);
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
