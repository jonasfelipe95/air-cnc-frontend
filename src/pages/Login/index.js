/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import logoImg from "../../assets/images/logo.png";
import { login } from "../../services/UsersService";
import { emailValidator } from "../../utils";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const isValidLoginForm = (email, password) => {
  if (!emailValidator(email)) return false;
  if (!password) return false;

  return true;
};

const LoginPage = () => {
  const navigate = useNavigate();
  const { userId, setUserId, setUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showValidationMessage, setShowValidationMessage] = useState(false);

  useEffect(() => {
    if (!userId) {
      const userIdSaved = localStorage.getItem("userId");
      const userSaved = JSON.parse(localStorage.getItem("user"));

      if (userIdSaved && userSaved) {
        setUserId(userIdSaved);
        setUser(userIdSaved);
        setUser(userSaved);
        userSaved?.type === "owner"
          ? navigate("/my-spots")
          : navigate("/spots");
      }
    }
  }, []);

  const onSubmit = async (email, password) => {
    const response = await login(email, password);

    if (!response) return alert("E-mail e/ou Senha inválidos");
    localStorage.setItem("userId", response._id);
    localStorage.setItem("user", JSON.stringify(response));
    setUserId(response._id);
    setUser(response);
    response?.type === "owner" ? navigate("/my-spots") : navigate("/spots");
  };

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
            {showValidationMessage && (
              <p className="error-message">E-mail e/ou Senha inválido(s)!</p>
            )}
            <button
              className="btn-primary"
              type="button"
              disabled={!email || !password}
              onClick={async () => {
                if (isValidLoginForm(email, password)) {
                  setShowValidationMessage(false);
                  onSubmit(email, password);
                } else {
                  setShowValidationMessage(true);
                }
              }}
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
