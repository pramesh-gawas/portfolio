import React from "react";
import styled from "styled-components";
export const LatestProjects = () => {
  return (
    <>
      {/*    project 1 */}
      <LProjects>
        <Project>
          <a href="https://dashfront-wheat.vercel.app/" target="_blank">
            <img src="/dashboard_tab.png" alt="dashboard_project" />
          </a>
        </Project>
        <Content>
          <h3>DashBoard</h3>
          <p>
            A web application built using the MERN stack (MongoDB, Express.js,
            React, Node.js) retrieves data from a MongoDB Atlas database. Users
            can select various filters to refine the data, and the application
            then generates a visual representation of the filtered data in the
            form of a graph.
          </p>
          <h3>Languages and Libraries</h3>
          <p>
            HTML,css, javascript,MongoDB, Express.js, React,
            Node.js,bootsrap,chart js
          </p>
        </Content>
      </LProjects>
      <hr />
      {/* project 2 */}
      <LProjects>
        <Content>
          <h3>Furniture store</h3>
          <p>
            This project showcases a furniture store website built with React JS
            and Bootstrap. It leverages an API to dynamically populate product
            information, allowing users to browse and explore a wide range of
            furniture options. The responsive design ensures a seamless shopping
            experience across different devices.
          </p>
          <h3>Languages and Libraries</h3>
          <p>HTML,css, javascript,React,bootsrap,api</p>
        </Content>
        <Project>
          <a href="https://furniture-web-navy.vercel.app/" target="_blank">
            <img src="/furniture.png" alt="furniture_project" />
          </a>
        </Project>
      </LProjects>
      <hr />

      {/*       project 3 */}
      <LProjects>
        <Project>
          <a
            href="https://task-manger-mern-frontend.vercel.app/"
            target="_blank"
          >
            <img src="/todo.png" alt="task_manger_project" />
          </a>
        </Project>
        <Content>
          <h3>Task Manager</h3>
          <p>
            This project demonstrates a to-do list application developed using
            the MERN stack (MongoDB, Express.js, React, Node.js) and Bootstrap.
            Users can create, edit, and delete tasks, as well as mark them as
            completed. The application offers a user-friendly interface with
            features like task prioritization and filtering.
          </p>
          <h3>Languages and Libraries</h3>
          <p>
            HTML,css, javascript,MongoDB, Express.js, React, Node.js,bootstrap
          </p>
        </Content>
      </LProjects>
      <hr />
      {/* project 4 */}
      <LProjects>
        <Content>
          <h3>Food Store</h3>
          <p>
            This project showcases a food app built using React and
            styled-components. Users can search for food items across breakfast,
            lunch, and dinner categories. The app offers a visually appealing
            interface and provides a seamless user experience for discovering
            and exploring food options.
          </p>
          <h3>Languages and Libraries</h3>
          <p>html,css,javascript,React js,styled-components</p>
        </Content>
        <Project>
          <a href="https://food-app-frontend-beta.vercel.app/" target="_blank">
            <img src="/foodapp.png" alt="food_app_project" />
          </a>
        </Project>
      </LProjects>
      <hr />
    </>
  );
};

const LProjects = styled.div`
  display: flex;
  padding: 20px;
  margin: 0px 30px;
  gap: 10px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

const Project = styled.div`
  img {
    width: 400px;
    height: 400px;
    box-shadow: 0px 6px 5px 4px rgba(0, 0, 0, 0.5);
  }
  @media screen and (max-width: 768px) {
    img {
      width: 100%;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  h3 {
    font-size: 20px;
    height: 40px;
    border-radius: 10px;
    padding-left: 20px;
    padding-top: 6px;
    background-color: #008dd5;
    border: none;
  }
  p {
    border-radius: 10px;
    height: fit-content;
    border: 1px solid black;
    padding: 5px;
    font-size: 18px;
    font-weight: 400;
  }
`;
