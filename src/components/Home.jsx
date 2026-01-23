import React from "react";
import styled from "styled-components";
import { Contact } from "./Contact";
import { LatestProjects } from "./LatestProjects";
export const Home = ({ projects }) => {
  return (
    <>
      <Main>
        <Image>
          <img src="/avatar.jpg" alt="profile_pic" />
        </Image>
        <Content>
          <div style={{ display: "flex" }}>
            <div style={{ width: "50%" }}>
              <h2>Hi 👋, I'm Pramesh</h2>
              <p>
                <b>"MERN Stack Developer: Bringing Ideas to Life"</b>
              </p>
            </div>
            <div>
              <img
                src="https://camo.githubusercontent.com/1a603a5c1c96760442cd78922f90bdb813385c624e01d88e2236051a0c3e4bc9/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67733f757365726e616d653d7072616d6573682d67617761732673686f775f69636f6e733d74727565266c6f63616c653d656e266c61796f75743d636f6d70616374"
                alt=""
              />
            </div>
          </div>
          <IconImage>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" />

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" />

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" />

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg" />

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg" />

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/tailwindcss.png"
              alt="tailwindcss"
            />
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/material-ui.png"
              alt="material-ui"
            />
          </IconImage>
        </Content>
      </Main>

      <LatestProjects projects={projects}></LatestProjects>

      <Contact></Contact>
    </>
  );
};

const Main = styled.div`
  justify-content: center;
  display: flex;
  background: linear-gradient(
    135deg,
    rgba(0, 141, 213, 0.1),
    rgba(0, 168, 232, 0.1)
  );
  backdrop-filter: blur(10px);
  border: 1px solid var(--border-color);
  flex-direction: row;
  border-radius: 25px;
  padding: 20px;
  margin: 100px 30px;
  height: 500px;
  box-shadow: var(--shadow);
  transition: var(--transition);

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--hover-shadow);
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: auto;
    margin: 80px 15px;
  }
`;

const Image = styled.div`
  width: 100%;
  height: 440px;
  img {
    width: 100%;
    height: inherit;
    border-radius: 20px;
  }
`;

const Content = styled.div`
  color: var(--text-color);
  width: 100%;
  height: 440px;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  text-align: start;
  padding: 20px;

  img {
    margin-block-start: 10px;
    padding: 5px;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const IntroSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
  }
`;

const TextSection = styled.div`
  flex: 1;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.2rem;
  }

  @media (max-width: 1024px) {
    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

const StatsSection = styled.div`
  flex-shrink: 0;

  img {
    width: 300px;
    height: auto;
    border-radius: 10px;
  }

  @media (max-width: 1024px) {
    img {
      width: 250px;
    }
  }

  @media (max-width: 768px) {
    img {
      width: 200px;
    }
  }
`;

const IconImage = styled.div`
  max-height: 440px;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  animation: fadeInUp 1.2s ease-out;

  img {
    width: 70px;
    transition: var(--transition);
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));

    &:hover {
      transform: translateY(-5px) scale(1.1);
      filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
    }

    @media (max-width: 1024px) {
      width: 60px;
    }

    @media (max-width: 768px) {
      width: 50px;
    }
  }
`;
