import React from "react";
import logoImg from "../../assets/images/logo.png";
import { Icons } from "../../components";
import "./Home.scss";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div className="home-page-content">
        <img className="logo-top-card" src={logoImg} alt="logo" />

        <div className="flex-row">
          <div
            className="card"
            onClick={() => navigate("/register/access-select")}
          >
            <Icons.NewUserIcon width={80} height={80} />
            <p className="home-card-title"> Cadastrar-se </p>
          </div>

          <div className="card" onClick={() => navigate("/login")}>
            <Icons.LoginIcon width={80} height={80} />
            <p className="home-card-title"> Entrar </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
