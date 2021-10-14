import React from "react";
import logoImg from "../../assets/images/logo.png";
import { Icons } from "../../components";
import "./AccessSelect.scss";
import {useHistory} from "react-router-dom";

const RegisterAccessSelectPage = () => {
  const {push} = useHistory()

  return (
    <div className="register-access-select-page">
      <div className="register-access-select-page-content">
        <img className="logo-top-card" src={logoImg} alt="logo" />

        <h1 className="access-select-title-page">Selecione o seu perfil</h1>

        <div className="flex-row">
          <div
            className="card"
            onClick={() => push("/register/profile?access=company")}
          >
            <Icons.BusinessIcon width={80} height={80} />
            <p className="access-select-title"> Sou Proprietário </p>
            <p className="access-select-sub-title">
              Quero disponibilizar reservas
            </p>
          </div>

          <div
            className="card"
            onClick={() => push("/register/profile?access=user")}
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
