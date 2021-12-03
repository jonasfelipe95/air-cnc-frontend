import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import logoImg from "../../assets/images/logo.png";
import "./SpotRegister.scss";

const useQuery = () => {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
};

const isValidFormRegister = (userRegister) => {
  // if (!zipcodeValidator(userRegister.email)) return false;
  // if (!userRegister.password) return false;
  // if (!userRegister.confirmPassword) return false;
  // if (!userRegister.acceptTerms) return false;
  // if (
  //   !userRegister.type ||
  //   (userRegister.type !== "owner" && userRegister.type !== "client")
  // )
  //   return false;
  // if (userRegister.password !== userRegister.confirmPassword) return false;

  return true;
};

const SpotRegisterPage = () => {
  const [price, setPrice] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [neighbor, setNeighbor] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [complement, setComplement] = useState("");
  const [description, setDescription] = useState("");
  const [tech, setTech] = useState("");
  const [techs, setTechs] = useState([]);

  const [showValidationMessage, setShowValidationMessage] = useState(false);

  const onSubmitRegister = async () => {
    // const user = { price, zipcode, password, type };
    // console.log({ user });
    // const response = await registerUser(user);
    // if (response?._id) {
    //   localStorage.setItem("user", JSON.stringify(response));
    //   localStorage.setItem("userId", response?._id);
    //   setUserId(response?._id);
    //   setUser(response);
    //   response?.type === "ouner" ? navigate("/spot/new") : navigate("/spots");
    // } else {
    //   alert("Erro ao cadastrar usuário!");
    // }
    // console.log({ response });
  };

  return (
    <div className="register-profile-page">
      <div className="register-profile-page-content">
        <img className="logo-top-card" src={logoImg} alt="logo" />
        <div className="card">
          <h1 className="card-title">Cadastrar Novo Spot</h1>

          <form>
            <div className="flex-row">
              <div className="form-group">
                <label>Preço *</label>
                <input
                  placeholder="Digite o valor do aluguel do Spot"
                  value={price}
                  onChange={(e) => setPrice(e.currentTarget.value)}
                />
              </div>

              <div className="form-group">
                <label>Cep *</label>
                <input
                  placeholder="Digite o CEP"
                  value={zipcode}
                  onChange={(e) => setZipcode(e.currentTarget.value)}
                />
              </div>
            </div>

            <div className="flex-row">
              <div className="form-group">
                <label>Endereço *</label>
                <input
                  placeholder="Digite o endereço o Spot"
                  value={address}
                  onChange={(e) => setAddress(e.currentTarget.value)}
                />
              </div>

              <div className="form-group">
                <label>Número *</label>
                <input
                  placeholder="Digite o número do endereço do Spot"
                  value={number}
                  onChange={(e) => setNumber(e.currentTarget.value)}
                />
              </div>
            </div>

            <div className="flex-row">
              <div className="form-group">
                <label>Bairro *</label>
                <input
                  placeholder="Digite o bairro do Spot"
                  value={neighbor}
                  onChange={(e) => setNeighbor(e.currentTarget.value)}
                />
              </div>

              <div className="form-group">
                <label>Cidade *</label>
                <input
                  placeholder="Digite a cidade do Spot"
                  value={city}
                  onChange={(e) => setCity(e.currentTarget.value)}
                />
              </div>
            </div>

            <div className="flex-row">
              <div className="form-group">
                <label>Estado *</label>
                <input
                  placeholder="Digite o estado do Spot"
                  value={state}
                  onChange={(e) => setState(e.currentTarget.value)}
                />
              </div>

              <div className="form-group">
                <label>Complemento *</label>
                <input
                  placeholder="Digite o complemento do endereço do Spot"
                  value={complement}
                  onChange={(e) => setComplement(e.currentTarget.value)}
                />
              </div>
            </div>
            <div className="flex-row">
              <div className="form-group">
                <label>Estado *</label>
                <textarea
                  placeholder="Digite a descrição do Spot"
                  value={description}
                  onChange={(e) => setDescription(e.currentTarget.value)}
                />
              </div>
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
              disabled={!price || !zipcode}
              onClick={() => {
                console.log({
                  price,
                  zipcode,
                  address,
                  number,
                  neighbor,
                  city,
                  state,
                  complement,
                  description,
                  techs,
                });
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

export default SpotRegisterPage;
