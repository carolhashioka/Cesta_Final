import React, { useState } from "react";
import api from "../../Services/api";
import Navigation from "../../components/Navigation/navigation";
import { Container } from "./styles";
export default function Commerce({ history }) {
  //Criar o useState
  const [name, setName] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [street_name, setStreet_name] = useState("");
  const [street_number, setStreet_number] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  async function handleSubmit(evento) {
    evento.preventDefault();

    try {
      //criar const commerce
      const commerce = {
        name,
        cnpj,
        street_name,
        street_number,
        neighborhood,
        city,
        state
      };
      //Cadastrar comércio na API
      await api.post("/commerce", commerce);
      //Depois de cadastrado, voltar ao menu
      history.push("/menu");
    } catch (error) {
      alert("Invalid");
    }
  }

  return (
    <Container>
      <Navigation />
      <form onSubmit={handleSubmit}>
        <div className="title">
          <h1>Commerce</h1>
        </div>
        <div className="name">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="cnpj">
          <label htmlFor="cnpj">CNPJ:</label>
          <input
            id="cnpj"
            type="number"
            required
            value={cnpj}
            onChange={e => setCnpj(e.target.value)}
          />
        </div>
        <div className="street_name">
          <label htmlFor="street_name">Street Name:</label>
          <input
            id="street_name"
            type="text"
            required
            value={street_name}
            onChange={e => setStreet_name(e.target.value)}
          />
        </div>
        <div className="street_number">
          <label htmlFor="street_number">Street Number:</label>
          <input
            id="street_number"
            type="number"
            required
            value={street_number}
            onChange={e => setStreet_number(e.target.value)}
          />
        </div>
        <div className="neighborhood">
          <label htmlFor="neighborhood">Neighborhood:</label>
          <input
            id="neighborhood"
            type="text"
            required
            value={neighborhood}
            onChange={e => setNeighborhood(e.target.value)}
          />
        </div>
        <div className="city">
          <label htmlFor="city">City:</label>
          <input
            id="city"
            type="text"
            required
            value={city}
            onChange={e => setCity(e.target.value)}
          />
        </div>
        <div className="state">
          <label htmlFor="state">State:</label>
          <input
            id="state"
            type="text"
            required
            value={state}
            onChange={e => setState(e.target.value)}
          />
        </div>
        <div type="buttonS">
          <button type="submit">Add</button>
        </div>
      </form>
    </Container>
  );
}
