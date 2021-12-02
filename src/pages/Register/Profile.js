import React, { useState } from "react";
import logoImg from "../../assets/images/logo.png";
import "./Profile.scss";

const RegisterProfilePage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="register-profile-page">
      <div className="register-profile-page-content">
        <img className="logo-top-card" src={logoImg} alt="logo" />
        <div className="card">
          <h1 className="card-title">Cadastro</h1>

          <form>
            <div className="flex-row">
              <div className="form-group">
                <label>Nome *</label>
                <input
                  placeholder="Digite seu nome"
                  value={name}
                  onChange={(e) => setName(e.currentTarget.value)}
                />
              </div>

              <div className="form-group">
                <label>E-mail *</label>
                <input
                  placeholder="Digite seu e-mail"
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.currentTarget.value)}
                />
              </div>
            </div>

            <div className="flex-row">
              <div className="form-group">
                <label>Senha *</label>
                <input
                  placeholder="Digite sua senha"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.currentTarget.value)}
                />
              </div>

              <div className="form-group">
                <label>Confirmar Senha *</label>
                <input
                  placeholder="Confirme sua senha"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.currentTarget.value)}
                />
              </div>
            </div>

            <div className="flex-row register-terms-of-use">
              <input type="checkbox" />
              <label>
                Li e concordo com os <a href>Termos de Uso</a>
              </label>
            </div>

            <button
              className="btn-primary"
              type="button"
              onClick={() =>
                console.log({
                  userRegister: { name, email, password, confirmPassword },
                })
              }
            >
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterProfilePage;
