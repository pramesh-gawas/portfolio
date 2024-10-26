import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
export const Header = () => {
  return (
    <Nav>
      <ul className="nav">
        <li className="nav-item">
          <Link to="/" className="nav-link" aria-current="page">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/About" className="nav-link">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Projects" className="nav-link">
            Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Contact" className="nav-link">
            Contact
          </Link>
        </li>
      </ul>
      <Outlet></Outlet>
    </Nav>
  );
};

const Nav = styled.div`
  ul {
    align-items: center;
    justify-content: center;
    margin: 20px;
  }
`;
