import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoImg from "../../assets/images/logo.png";
import { registerSpot } from "../../services/SpotsService";
import "./SpotRegister.scss";

const isValidFormRegister = (spot) => {
  if (!spot.address) return false;
  if (!spot.number) return false;
  if (!spot.zipcode) return false;
  if (!spot.neighborhood) return false;
  if (!spot.city) return false;
  if (!spot.state) return false;
  if (!spot.description) return false;
  if (!spot.companyName) return false;
  if (!spot.price) return false;
  if (!spot.techs) return false;
  if (!spot.complement) return false;
  if (!spot.thumbnail) return false;

  return true;
};

const SpotRegisterPage = () => {
  const navigate = useNavigate();
  const [thumbnail, setThumbnail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [price, setPrice] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [complement, setComplement] = useState("");
  const [description, setDescription] = useState("");
  const [tech, setTech] = useState("");
  const [techs, setTechs] = useState([]);

  const [showValidationMessage] = useState(false);

  const onSubmitRegister = async () => {
    const newSpot = new FormData();

    newSpot.append("address", address);
    newSpot.append("number", number);
    newSpot.append("zipcode", zipcode);
    newSpot.append("neighborhood", neighborhood);
    newSpot.append("city", city);
    newSpot.append("state", state);
    newSpot.append("description", description);
    newSpot.append("companyName", companyName);
    newSpot.append("price", price);
    newSpot.append("techs", JSON.stringify(techs));
    newSpot.append("complement", complement);
    newSpot.append("thumbnail", thumbnail);

    const response = await registerSpot(newSpot);

    if (response) {
      navigate("/my-spots");
    } else {
      alert("Erro ao adicionar Spot!");
    }
  };

  return (
    <div className="register-profile-page">
      <div className="register-profile-page-content">
        <div className="form-group spot-form-col-12">
          <label>Imagem *</label>
          <img className="logo-top-card" src={logoImg} alt="logo" />
        </div>
        <div className="card">
          <h1 className="card-title">Cadastrar Novo Spot</h1>

          <form>
            <div className="flex-row">
              <div className="form-group spot-form-col-12">
                <label>Imagem do Spot *</label>
                <input
                  type="file"
                  onChange={(e) => {
                    setThumbnail(e.nativeEvent.target.files[0]);
                  }}
                />
              </div>
            </div>
            <div className="flex-row">
              <div className="form-group spot-form-col-12">
                <label>Nome da Empresa *</label>
                <input
                  placeholder="Digite o nome da empresa do Spot"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.currentTarget.value)}
                />
              </div>
            </div>
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
              <div className="spot-form-col-6">
                <div className="form-group spot-form-col-8">
                  <label>Endereço *</label>
                  <input
                    placeholder="Digite o endereço o Spot"
                    value={address}
                    onChange={(e) => setAddress(e.currentTarget.value)}
                  />
                </div>

                <div className="form-group spot-form-col-4">
                  <label>Número *</label>
                  <input
                    placeholder="Digite o número do endereço do Spot"
                    value={number}
                    onChange={(e) => setNumber(e.currentTarget.value)}
                  />
                </div>
              </div>
              <div className="spot-form-col-6">
                <div className="form-group spot-form-col-12">
                  <label>Bairro *</label>
                  <input
                    placeholder="Digite o bairro do Spot"
                    value={neighborhood}
                    onChange={(e) => setNeighborhood(e.currentTarget.value)}
                  />
                </div>
              </div>
            </div>

            <div className="flex-row">
              <div className="spot-form-col-6">
                <div className="form-group spot-form-col-8">
                  <label>Cidade *</label>
                  <input
                    placeholder="Digite a cidade do Spot"
                    value={city}
                    onChange={(e) => setCity(e.currentTarget.value)}
                  />
                </div>

                <div className="form-group spot-form-col-4">
                  <label>Estado *</label>
                  <input
                    placeholder="Digite o estado do Spot"
                    value={state}
                    onChange={(e) => setState(e.currentTarget.value)}
                  />
                </div>
              </div>
              <div className="spot-form-col-6">
                <div className="form-group spot-form-col-12">
                  <label>Complemento *</label>
                  <input
                    placeholder="Digite o complemento do endereço do Spot"
                    value={complement}
                    onChange={(e) => setComplement(e.currentTarget.value)}
                  />
                </div>
              </div>
            </div>

            <div className="flex-row">
              <div className="form-group spot-form-col-12">
                <label>Descrição *</label>
                <textarea
                  placeholder="Digite a descrição do Spot"
                  value={description}
                  onChange={(e) => setDescription(e.currentTarget.value)}
                />
              </div>
            </div>
            <div className="spot-techs-container">
              <div className="form-group">
                <label>Tecnologia *</label>
                <input
                  placeholder="Digite uma Tecnologia"
                  value={tech}
                  onChange={(e) => setTech(e.currentTarget.value)}
                />
                <button
                  type="button"
                  disabled={!tech}
                  onClick={() => {
                    if (!tech) return;
                    setTechs([...techs, tech]);
                    setTech("");
                  }}
                  className="btn-primary"
                >
                  Adicionar
                </button>
              </div>
              <div className="spot-techs-list">
                <ul>
                  {techs.map((techItem, index) => (
                    <li>
                      - {techItem}{" "}
                      <span
                        key={`tech-${index}`}
                        onClick={() => {
                          setTechs(
                            techs.filter((_, _index) => _index !== index)
                          );
                        }}
                        title="Remover Tecnologia"
                      >
                        X
                      </span>
                    </li>
                  ))}
                  {!techs.length && <li>Nenhuma tecnologia adicionada</li>}
                </ul>
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
                const spot = {
                  thumbnail,
                  companyName,
                  price,
                  zipcode,
                  address,
                  number,
                  neighborhood,
                  city,
                  state,
                  complement,
                  description,
                  techs,
                };

                if (isValidFormRegister(spot)) {
                  onSubmitRegister();
                } else {
                  alert("Preencha todos os campos!");
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

export default SpotRegisterPage;
