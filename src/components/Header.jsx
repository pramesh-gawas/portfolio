import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
export const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.style.backgroundColor = "#121212";
      document.body.style.color = "#008dd5";
      document.body.style.transition = "background-color 0.5s, color 0.5s";
    } else {
      document.body.style.backgroundColor = "#ffffff";
      document.body.style.color = "#000000";
      document.body.style.transition = "background-color 0.5s, color 0.5s";
    }
  };

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
        <button onClick={handleToggleTheme}>
          {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
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

    .nav-item {
      padding: 0 15px;

      .nav-link {
        color: white;
        text-decoration: none;
        padding: 5px 0;
        display: block;
      }

      .nav-link:hover {
        color: #0e0e0e;
      }
    }

    button {
      margin-left: 20px;
      padding: 5px 10px;
      border-radius: 20px;
      border: none;
    }
  }
`;
