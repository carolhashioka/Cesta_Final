import React, { useState, useEffect } from "react";
import api from "../../Services/api";
import Navigation from "../../components/Navigation/navigation";
import { Container } from "./styles";
export default function Report() {
  const [commerces, setCommerces] = useState([]);
  //Quando  Report for renderizado, será feito isso:
  useEffect(() => {
    async function loadCommerces() {
      const response = await api.get("/commerce");
      setCommerces(response.data);
    }
    loadCommerces();
  }, [commerces]);

  return (
    <Container>
      <Navigation />
      <h1>Registered Commerces Report</h1>
      {commerces &&
        commerces.map(commerce => (
          <div className="report">
            <div className="name"> Name:{commerce.name}</div>
            <div className="cnpj"> CNPJ:{commerce.cnpj} </div>
            <div className="city"> City:{commerce.city}</div>
            <div className="state">State: {commerce.state}</div>
            <div className="neighborhood">
              Neighborhood: {commerce.neighborhood}
            </div>
            <div className="streetnumber">
              Street Number: {commerce.street_number}
            </div>

            <div className="streetname">
              Street Name: {commerce.street_name}
            </div>
          </div>
        ))}
    </Container>
  );
}
