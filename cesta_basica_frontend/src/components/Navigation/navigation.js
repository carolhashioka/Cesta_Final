import React from "react";
import { NavLink } from "react-router-dom";

import { Container } from "./styles";
import { logout } from "../../Services/auth";

export default function Menu(props) {
  function handleLogout() {
    //Sair do sistema
    logout();
  }
  return (
    <Container>
      <NavLink to="/menu">
        <span>Menu</span>
      </NavLink>
      <NavLink to="/signup">
        <span>Sign Up</span>
      </NavLink>
      <NavLink to="/commerce">
        <span>Commerce</span>
      </NavLink>
      <NavLink to="/monthlyquote">
        <span>Monthly Quote</span>
      </NavLink>
      <NavLink to="/report">
        <span> Report</span>
      </NavLink>

      <NavLink to="/" onClick={handleLogout}>
        <span>Logout</span>
      </NavLink>
    </Container>
  );
}
