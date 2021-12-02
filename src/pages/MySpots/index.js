/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import SpotCard from "../../components/SpotCard";
import { useAuth } from "../../context/AuthContext";
import { getMySpots } from "../../services/SpotsService";
import "./MySpots.scss";

const MySpotsPage = () => {
  const [mySpots, setMySpots] = useState([]);
  const [loadingSpots, setLoadingSpots] = useState(false);

  const { userId } = useAuth();

  const fetchMySpots = async () => {
    setLoadingSpots(true);

    const response = await getMySpots(userId);

    setMySpots([...response]);
    setLoadingSpots(false);
  };

  useEffect(() => {
    fetchMySpots();
  }, []);

  return (
    <div className="page-container">
      <Header />

      <div className="page-content">
        <h1 className="title-page">Meus Spots</h1>

        {loadingSpots && "Carregando Spots..."}

        {!loadingSpots &&
          !mySpots.length &&
          "Não há Spots disponíveis para reserva no momento!"}

        <div className="spots-list">
          {!loadingSpots && mySpots.length
            ? mySpots.map((spot, index) => (
                <SpotCard key={`spot_${index}`} spot={spot} />
              ))
            : ""}
        </div>
      </div>
    </div>
  );
};

export default MySpotsPage;
