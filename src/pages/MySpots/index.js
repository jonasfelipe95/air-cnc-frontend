/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import NewSpotCard from "../../components/NewSpotCard";
import SpotCard from "../../components/SpotCard";
import { useAuth } from "../../context/AuthContext";
import { getReserves } from "../../services/BookingService";
import { getMySpots } from "../../services/SpotsService";
import "./MySpots.scss";

const MySpotsPage = () => {
  const [mySpots, setMySpots] = useState([]);
  const [reserves, setReserves] = useState([]);
  const [loadingSpots, setLoadingSpots] = useState(false);

  const navigate = useNavigate();
  const { userId } = useAuth();

  const fetchMySpots = async () => {
    setLoadingSpots(true);

    const response = await getMySpots(userId);
    if (response) {
      setMySpots([...response]);
    } else {
      alert("Erro em carregar Spots");
    }

    setLoadingSpots(false);
  };

  const fetchReserves = async (id) => {
    const response = await getReserves(id);

    if (response) {
      setReserves(response);
    } else {
      alert("Erro em carregar reservas");
    }
  };

  useEffect(() => {
    fetchMySpots();
    fetchReserves(userId);
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
            ? mySpots.map((spot, index) => {
                return (
                  <SpotCard
                    toApprove={reserves.filter(
                      (_reserve) => _reserve.spot === spot._id
                    )}
                    onChangeApproved={() => fetchReserves(userId)}
                    reservation={false}
                    key={`spot_${index}`}
                    spot={spot}
                  />
                );
              })
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
