/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import NewSpotCard from "../../components/NewSpotCard";
import SpotCard from "../../components/SpotCard";
import { useAuth } from "../../context/AuthContext";
import { getMySpots } from "../../services/SpotsService";
import "./MySpots.scss";

const MySpotsPage = () => {
  const [mySpots, setMySpots] = useState([]);
  const [loadingSpots, setLoadingSpots] = useState(false);

  const navigate = useNavigate();
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

        {!loadingSpots && !mySpots.length && (
          <p className="empty-text">
            Não há Spots cadastrados no momento! Clique no card abaixo para
            cadastrar um novo Spot.
          </p>
        )}

        <div className="spots-list">
          {!loadingSpots && mySpots.length
            ? mySpots.map((spot, index) => (
                <SpotCard
                  reservation={false}
                  key={`spot_${index}`}
                  spot={spot}
                />
              ))
            : ""}
          <NewSpotCard
            onClick={() => {
              navigate("/spot/new");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MySpotsPage;
