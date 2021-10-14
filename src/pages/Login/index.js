import React, { useState } from "react";
import logoImg from '../../assets/images/logo.png';
import "./Login.scss";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-page">
      <div className="login-page-content">
        <img className="logo-top-card" src={logoImg} alt="logo" />
        <div className="card">
          <h1 className="card-title">Login</h1>

          <form>
            <div className="form-group">
              <label>E-mail *</label>
              <input
                placeholder="Digite seu e-mail"
                value={email}
                type="email"
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
            </div>

            <div className="form-group">
              <label>Senha *</label>
              <input
                placeholder="Digite sua senha"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
            </div>

            <button
              className="btn-primary"
              type="button"
              onClick={() => console.log({ userAuth: { email, password } })}
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
