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
  box-shadow: -2px -2px rgba(240, 240, 240), 3px 3px black;
  flex-direction: row;
  border-radius: 20px;
  border-color: black;
  padding: 10px;
  margin: 70px 30px;
  height: 460px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

const Image = styled.div`
  width: 100%;
  height: 440px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  img {
    width: 100%;
    height: inherit;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
`;

const Content = styled.div`
  background-color: #008dd5;
  color: #ffff;
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

  @media screen and (max-width: 780px) {
    display: none;
  }
`;
const IconImage = styled.div`
  max-height: 440px;

  img {
    width: 70px;
  }
`;
