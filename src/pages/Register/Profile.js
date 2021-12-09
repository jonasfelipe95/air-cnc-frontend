import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logoImg from "../../assets/images/logo.png";
import "./Profile.scss";

import { registerUser } from "../../services/UsersService";
import { emailValidator } from "../../utils";
import { useAuth } from "../../context/AuthContext";

const useQuery = () => {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
};

const isValidFormRegister = (userRegister) => {
  if (!emailValidator(userRegister.email)) return false;
  if (!userRegister.password) return false;
  if (!userRegister.confirmPassword) return false;
  if (!userRegister.acceptTerms) return false;
  if (
    !userRegister.type ||
    (userRegister.type !== "owner" && userRegister.type !== "client")
  )
    return false;
  if (userRegister.password !== userRegister.confirmPassword) return false;

  return true;
};

const RegisterProfilePage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [showValidationMessage, setShowValidationMessage] = useState(false);

  const { setUserId, setUser } = useAuth();
  const navigate = useNavigate();
  const query = useQuery();

  const onSubmitRegister = async () => {
    const user = { name, email, password, type };

    const response = await registerUser(user);

    if (response?._id) {
      localStorage.setItem("user", JSON.stringify(response));
      localStorage.setItem("userId", response?._id);
      setUserId(response?._id);
      setUser(response);

      response?.type === "ouner" ? navigate("/spot/new") : navigate("/spots");
    } else {
      alert("Erro ao cadastrar usuário!");
    }
  };

  useEffect(() => {
    const typeQuery = query.get("type");
    if (typeQuery) setType(typeQuery);
  }, [query]);

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
              <input
                type="checkbox"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.currentTarget.checked)}
              />
              <label>
                Li e concordo com os <a href>Termos de Uso</a>
              </label>
            </div>
            {showValidationMessage && (
              <p className="error-message">
                Há dados inválidos! Confira se o seu e-mail foi digitado
                corretamente e se a confirmação de senha é correspondente a
                senha!
              </p>
            )}
            <button
              className="btn-primary"
              type="button"
              disabled={
                !name ||
                !email ||
                !password ||
                !confirmPassword ||
                !type ||
                !acceptTerms
              }
              onClick={() => {
                const userRegister = {
                  name,
                  email,
                  password,
                  confirmPassword,
                  type,
                  acceptTerms,
                };

                if (isValidFormRegister(userRegister)) {
                  setShowValidationMessage(false);
                  onSubmitRegister();
                } else {
                  setShowValidationMessage(true);
                }
              }}
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
