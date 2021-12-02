import React from "react";
import logoImg from "../../assets/images/logo.png";
import { Icons } from "../../components";
import "./AccessSelect.scss";
import { useNavigate } from "react-router-dom";

const RegisterAccessSelectPage = () => {
  const navigate = useNavigate();

  return (
    <div className="register-access-select-page">
      <div className="register-access-select-page-content">
        <img className="logo-top-card" src={logoImg} alt="logo" />

        <h1 className="access-select-title-page">Selecione o seu perfil</h1>

        <div className="flex-row">
          <div
            className="card"
            onClick={() => navigate("/register/profile?type=owner")}
          >
            <Icons.BusinessIcon width={80} height={80} />
            <p className="access-select-title"> Sou Proprietário </p>
            <p className="access-select-sub-title">
              Quero disponibilizar reservas
            </p>
          </div>

          <div
            className="card"
            onClick={() => navigate("/register/profile?type=client")}
          >
            <Icons.PersonIcon width={80} height={80} />
            <p className="access-select-title"> Sou Usuário </p>
            <p className="access-select-sub-title"> Quero reservar </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RegisterAccessSelectPage;
