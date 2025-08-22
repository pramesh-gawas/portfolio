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
  .nav {
    position: fixed;
    width: 100%;
    top: 30px;
    left: 0px;
    transform: translateY(-50%);
    z-index: 1000;
    border-radius: 20px;
    background-color: #008dd5;
    font-weight: 600;
    color: white;
    padding: 10px 0;
    margin: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
  }

  .nav-item {
    padding: 0 15px;
  }

  .nav-link {
    color: white;
    text-decoration: none;
    padding: 5px 0;
    display: block;
  }

  .nav-link:hover {
    color: #f0f0f0;
  }
`;
