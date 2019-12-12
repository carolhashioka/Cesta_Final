import React, { useState } from "react";
import { Container } from "./styles";
import Navigation from "../../components/Navigation/navigation";

import api from "../../Services/api";
export default function SignUp({ history }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(evento) {
    evento.preventDefault();

    try {
      //Criar const
      const user = {
        name,
        email,
        password
      };
      //Cadastrar usuário na API
      await api.post("/user", user);
      //Depois de cadastrar, voltar ao menu
      history.push("/menu");
    } catch (error) {
      alert("User already exists");
    }
  }
  return (
    <Container>
      <Navigation />
      <div>
        <form onSubmit={handleSubmit}>
          <div className="title">
            <h1>Sign Up</h1>
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
          <div className="email">
            <label htmlFor="email"> Email:</label>

            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div className="password">
            <label htmlFor="password"> Password:</label>

            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </Container>
  );
}
