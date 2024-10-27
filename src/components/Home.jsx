import React from "react";
import styled from "styled-components";
import { Contact } from "./Contact";
import { LatestProjects } from "./LatestProjects";
export const Home = () => {
  return (
    <>
      <Main>
        <Image>
          <a href="https://github.com/pramesh-gawas">
            <img src="/avatar.jpg" alt="profile_pic" />
          </a>
        </Image>
        <Content>
          <h1>Pramesh Gawas</h1>
          <h2>Web developer</h2>
          <h4>"MERN Stack Developer: Bringing Ideas to Life"</h4>
          <img src="/stats.png" alt="statistics" />
        </Content>
      </Main>
      <LHeader>Latest Projects</LHeader>
      <LatestProjects></LatestProjects>
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
  margin: 0px 30px;
  height: 460px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

const Image = styled.div`
  img {
    width: 100%;
    height: 450px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
  width: 100%;
  height: auto;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`;

const Content = styled.div`
  background-color: #008dd5;
  color: #ffff;
  width: 100%;
  height: auto;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  text-align: start;
  padding: 20px;

  img {
    width: 80%;
    margin-top: 10px;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const LHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: 600;
`;
