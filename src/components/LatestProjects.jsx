import React from "react";
import styled from "styled-components";
import Card from "./common/Card";
import { useState, useEffect } from "react";
import { GetProjects } from "../apiIntegration/Api";
import Spinner from "./common/Spinner";
export const LatestProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      const baseUrl = import.meta.env.VITE_API_URL;
      const url = `${baseUrl}/admin/all-projects`;
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
      <LHeader>Latest Projects</LHeader>
      <LProjects>
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
      </LProjects>
      <hr />
    </>
  );
};

const LProjects = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding: 20px;
  gap: 20px;
  animation: fadeInUp 1s ease-out;
`;

const LHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: 700;
`;
