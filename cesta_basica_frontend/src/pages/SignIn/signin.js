import React, { useState } from "react";
import api from "../../Services/api";
import { login } from "../../Services/auth";
import { Container } from "./styles";
export default function SignIn({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(evento) {
    evento.preventDefault();

    try {
      //Criar const
      const user = {
        email,
        password
      };
      //Cadastrar seção na API
      const response = await api.post("/session", user);
      const { token, user: userData } = response.data;
      if (token) {
        login(token, userData);
        // localStorage.setItem("@CESTA/token", token);
      }

      // await api.post("/session", user);
      //Depois de cadastrar, voltar para menu
      history.push("/menu");
    } catch (error) {
      alert("Invalid");
    }
  }
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <div className="title">
          <h1>Sign In</h1>
        </div>
        <div className="email">
          <input
            type="email"
            required
            placeholder="Type your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="password">
          <input
            type="password"
            required
            placeholder="Type your password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <div type="buttonS">
          <button type="submit">Sign In</button>
        </div>
      </form>
    </Container>
  );
}
