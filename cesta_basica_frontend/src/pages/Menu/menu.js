import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";
import { logout } from "../../Services/auth";
import signup from "../../images/signup.png";
import commerce from "../../images/commerce.png";
import mquote from "../../images/mquote.png";
import report from "../../images/report.png";
export default function Menu() {
  function handleLogout() {
    logout();
  }
  return (
    <Container>
      <h1>Menu</h1>

      <div className="part1">
        <div className="signup">
          <Link to="/signup">
            <p>Sign Up</p>
            <img src={signup} />
          </Link>
        </div>
        <div className="commerce">
          <Link to="/commerce">
            <p>Commerce</p>
            <img src={commerce} />
          </Link>
        </div>
      </div>

      <div className="part2">
        <div className="mquote">
          <Link to="/monthlyquote">
            <p>Monthly Quote</p>
            <img src={mquote} />
          </Link>
        </div>
        <div className="report">
          <Link to="/report">
            <p>Report</p>
            <img src={report} />
          </Link>
        </div>
      </div>

      <div className="logout">
        <Link to="/" onClick={handleLogout}>
          <p>Click here to Logout</p>
        </Link>
      </div>
    </Container>
  );
}
