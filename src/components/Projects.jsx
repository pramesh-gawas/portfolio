import styled from "styled-components";
export const Projects = () => {
  return (
    <>
      <ProjectHeader>PROJECTS</ProjectHeader>
      <ProjectContainer>
        <div>
          <a
            href="https://voting-machine-ui.vercel.app/user/login"
            target="_blank"
          >
            <img src="/votingapp.png" alt="votingapp_image" />
          </a>
        </div>
        {/* project 1 */}
        <div>
          <a href="https://dashboard-tf3x.vercel.app/" target="_blank">
            <img src="/dashboard_tab.png" alt="dashboard_image" />
          </a>
        </div>
        {/* project 2 */}

        <div>
          <a href="https://furniture-web-navy.vercel.app/" target="_blank">
            <img src="/furniture.png" alt="furniture_image" />
          </a>
        </div>

        {/* project 3 */}
        <div>
          <a
            href="https://task-manger-mern-frontend.vercel.app/"
            target="_blank"
          >
            <img src="/todo.png" alt="todo_image" />
          </a>
        </div>

        <div>
          <a href="https://food-app-frontend-beta.vercel.app/" target="_blank">
            <img src="/foodapp.png" alt="food_app_image" />
          </a>
        </div>
      </ProjectContainer>
    </>
  );
};

const ProjectHeader = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-top: 15px; */
  font-size: 30px;
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 20px;

  div {
    height: 230px;
    width: 250px;
    margin: 10px;
  }

  div img {
    height: 100%;
    width: 100%;
    border: 1px black;
    margin: 10px;
    flex-grow: 1.2;
    flex-wrap: wrap;
    border-radius: 10px;
    box-shadow: 10px 10px 12px 8px rgba(125, 125, 125, 125);
    border: none;
  }

  div:hover {
    transform: translate(0px, -10px);
    transition: ease-in-out 1s;
  }

  button {
    float: right;
    height: 40px;
    width: 40px;
    position: relative;
    border-radius: 10px;
    border-color: aquamarine;
    border-width: 2px;
  }
`;
