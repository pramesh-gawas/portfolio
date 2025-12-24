import styled from "styled-components";
import Card from "./common/Card";
import { useEffect } from "react";
import { useState } from "react";
import { GetProjects } from "../apiIntegration/Api";
import Spinner from "./common/Spinner";
export const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      const baseUrl =
        import.meta.env.VITE_API_URL ||
        "https://portfolio-backend-79t2.onrender.com";
      const url = `${baseUrl}/admin/all-projects?limit=100`;
      try {
        setLoading(true);
        const data = await GetProjects(url);
        if (data) {
          setProjects(data);
        } else {
          setError("No data received");
        }
      } catch (err) {
        setError("Failed to load projects");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
      <ProjectHeader>All Projects</ProjectHeader>
      <ProjectContainer>
        {!loading && projects?.totalPages === 0 && (
          <div className="text-center p-5 text-muted">
            <p>Add project to show</p>
          </div>
        )}
        {loading ? (
          <Spinner />
        ) : (
          projects?.data?.map((project, index) => (
            <Card key={index} project={project}></Card>
          ))
        )}

        {!loading && error && (
          <div className="text-center p-5 text-muted">
            <p>{error}</p>
          </div>
        )}
      </ProjectContainer>
    </>
  );
};

const ProjectHeader = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: 700;
  margin-top: 70px;
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px;
  gap: 10px;

  div:hover {
    transform: scale(1.04);
    background-color: #008dd5;
    transition: ease-in-out 1s;
    z-index: 1;
  }
`;
