import React from "react";
import styled from "styled-components";
export const LatestProjects = () => {
  return (
    <>
      <LProjects>
        <Content>
          <h3>Voting App E-vote Hub</h3>
          <div>
            <p>
              <b>
                This voting application is designed to provide a secure,
                user-friendly, and transparent platform for conducting
                elections, incorporating robust authentication, administrative
                controls, and a clear voting mechanism.
              </b>
            </p>
            <ul>
              <li>
                <strong>Aadhar-Based User Authentication:</strong> Users can
                securely sign in to the application using their Aadhar card
                number, serving as a primary identifier for registration and
                login.
              </li>
              <li>
                <strong>User Profile & Image Upload:</strong> During
                registration or profile management, users are required to upload
                their image, enhancing the visual verification and
                personalization of their accounts.
              </li>
              <li>
                <strong>Candidate Voting:</strong> Registered and authenticated
                users can browse a list of candidates and cast their vote for
                their preferred choice.
              </li>
              <li>
                <strong>Single Vote Per User:</strong> A critical feature
                ensuring fairness and integrity, each user is strictly limited
                to casting only one vote per election. Once a vote is cast, the
                user cannot vote again.
              </li>
              <li>
                <strong>Password Recovery:</strong> Users who forget their
                password can initiate a recovery process through their
                registered email address, receiving a secure link to reset their
                credentials.
              </li>
              <li>
                <strong>Comprehensive Admin Control:</strong> The application
                includes a dedicated administrative interface with exclusive
                access for a single designated admin. The admin has full control
                over:
                <ul>
                  <li>
                    <strong>Candidate Management:</strong> The ability to add
                    new candidates, update existing candidate details, and
                    delete candidates from the system.
                  </li>
                  <li>
                    <strong>User Management:</strong> The ability to add new
                    users, update user information, and delete users from the
                    system.
                  </li>
                  <li>
                    <strong>Admin Voting Restriction:</strong> Crucially, the
                    admin account is explicitly restricted from voting in any
                    election, maintaining impartiality and preventing conflict
                    of interest.
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <h3>Languages and Libraries</h3>
          <p>
            <b>MERN Multer,nodemailer,material UI</b>{" "}
          </p>
        </Content>
        <Project>
          <a
            href="https://voting-machine-ui.vercel.app/user/login"
            target="_blank"
          >
            <img src="/votingapp.png" alt="votingapp_image" />
          </a>
        </Project>
      </LProjects>
      {/*    project 1 */}
      <LProjects>
        <Project>
          <a href="https://dashboard-tf3x.vercel.app/" target="_blank">
            <img src="/dashboard_tab.png" alt="dashboard_project" />
          </a>
        </Project>
        <Content>
          <h3>DashBoard</h3>
          <div>
            {" "}
            <p>
              <b>
                A web application built using the MERN stack (MongoDB,
                Express.js, React, Node.js) retrieves data from a MongoDB Atlas
                database. Users can select various filters to refine the data,
                and the application then generates a visual representation of
                the filtered data in the form of a graph.
              </b>
            </p>
          </div>
          <h3>Languages and Libraries</h3>
          <p>
            <b>
              HTML,css, javascript,MongoDB, Express.js, React,
              Node.js,bootsrap,chart js
            </b>
          </p>
        </Content>
      </LProjects>
      <hr />
      {/* project 2 */}
      <LProjects>
        <Content>
          <h3>Furniture store</h3>
          <div>
            {" "}
            <p>
              <b>
                This project showcases a furniture store website built with
                React JS and Bootstrap. It leverages an API to dynamically
                populate product information, allowing users to browse and
                explore a wide range of furniture options. The responsive design
                ensures a seamless shopping experience across different devices.
              </b>
            </p>
          </div>
          <h3>Languages and Libraries</h3>
          <p>
            <b>HTML,css, javascript,React,bootsrap,api</b>
          </p>
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
          <div>
            {" "}
            <p>
              <b>
                This project demonstrates a to-do list application developed
                using the MERN stack (MongoDB, Express.js, React, Node.js) and
                Bootstrap. Users can create, edit, and delete tasks, as well as
                mark them as completed. The application offers a user-friendly
                interface with features like task prioritization and filtering.
              </b>
            </p>
          </div>
          <h3>Languages and Libraries</h3>
          <p>
            <b>
              HTML,css, javascript,MongoDB, Express.js, React, Node.js,bootstrap
            </b>
          </p>
        </Content>
      </LProjects>
      <hr />
      {/* project 4 */}
      <LProjects>
        <Content>
          <h3>Food Store</h3>
          <div>
            {" "}
            <p>
              <b>
                This project showcases a food app built using React and
                styled-components. Users can search for food items across
                breakfast, lunch, and dinner categories. The app offers a
                visually appealing interface and provides a seamless user
                experience for discovering and exploring food options.
              </b>
            </p>
          </div>
          <h3>Languages and Libraries</h3>
          <p>
            <b>html,css,javascript,React js,styled-components</b>
          </p>
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

  div {
    border-radius: 10px;
    height: 225px;
    overflow: auto;
    border: 1px solid black;
    padding: 5px;
    font-size: 18px;
    font-weight: 400;
  }

  h3 {
    color: white;
    font-size: 20px;
    height: 40px;
    border-radius: 10px;
    padding-left: 20px;
    padding-top: 6px;
    background-color: #008dd5;
    border: none;
  }
  /* p {
    border-radius: 10px;
    height: 145px;
    overflow: auto;
    border: 1px solid black;
    padding: 5px;
    font-size: 18px;
    font-weight: 400;
  } */
`;
