import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode");
  };
  return (
    <Nav
      className={`${isScrolled ? "scrolled" : ""} ${isDarkMode ? "dark" : ""}`}
    >
      <ul className={`nav ${isMenuOpen ? "open" : ""}`}>
        <li className="nav-item">
          <Link
            to="/"
            className="nav-link"
            aria-current="page"
            onClick={() => setIsMenuOpen(false)}
          >
            <span>Home</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/About"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            <span>About</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Projects"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            <span>Projects</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Contact"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            <span>Contact</span>
          </Link>
        </li>
        <ThemeToggle
          onClick={handleToggleTheme}
          className={isDarkMode ? "dark" : ""}
        >
          <span>{isDarkMode ? "☀️" : "🌙"}</span>
          <span>{isDarkMode ? "Light" : "Dark"}</span>
        </ThemeToggle>
      </ul>
      <Outlet />
    </Nav>
  );
};

const Nav = styled.div`
  @media (max-width: 768px) {
    ul.nav {
      margin-top: 20px;
    }
  }
  .nav {
    position: fixed;
    width: 90%;
    max-width: 1200px;
    top: 30px;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    z-index: 1000;
    border-radius: 25px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    font-weight: 600;
    color: black;
    padding: 15px 20px;
    margin: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    transition: var(--transition);
    box-shadow: var(--shadow);

    &.scrolled {
      background: rgba(0, 141, 213, 0.9);
      backdrop-filter: blur(20px);
      color: white;
    }

    &.dark {
      background: rgba(18, 18, 18, 0.9);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: white;
    }

    &.scrolled.dark {
      background: rgba(0, 168, 232, 0.9);
    }

    .nav-item {
      .nav-link {
        color: inherit;
        text-decoration: none;
        padding: 8px 16px;
        display: block;
        border-radius: 20px;
        transition: var(--transition);
        position: relative;

        span {
          position: relative;
          z-index: 2;
        }

        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          transition: width 0.3s ease;
          z-index: 1;
        }

        &:hover::before {
          width: 100%;
        }

        &:hover {
          color: black;
        }
      }
    }
  }
`;

const ThemeToggle = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: transparent;
  color: black;
  cursor: pointer;
  transition: var(--transition);
  font-weight: 600;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: scale(1.05);
  }

  &.dark {
    background: rgba(255, 255, 255, 0.1);
    color: white;
  }

  span:first-child {
    font-size: 18px;
  }
`;
