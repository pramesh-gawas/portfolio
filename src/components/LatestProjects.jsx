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
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = projects?.totalPages || 1;

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const baseUrl = import.meta.env.VITE_API_URL;
    const url = `${baseUrl}/admin/all-projects?page=${currentPage}`;
    const fetchProjects = async () => {
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
  }, [currentPage]);

  return (
    <>
      <LHeader>Latest Projects</LHeader>
      <ul className="pagination">
        <button
          className="btn btn-outline-primary"
          onClick={() => handlePrev()}
          disabled={currentPage <= 1}
        >
          Prev
        </button>
        <li className={`page-item ${currentPage === 1 ? "active" : ""}`}>
          <button className="page-link" onClick={() => setCurrentPage(1)}>
            1
          </button>
        </li>
        <li className={`page-item ${currentPage === 2 ? "active" : ""}`}>
          <button className="page-link" onClick={() => setCurrentPage(2)}>
            2
          </button>
        </li>
        <li className={`page-item ${currentPage === 3 ? "active" : ""}`}>
          <button className="page-link" onClick={() => setCurrentPage(3)}>
            3
          </button>
        </li>
        <li className={`page-item ${currentPage === 4 ? "active" : ""}`}>
          <button className="page-link" onClick={() => setCurrentPage(4)}>
            4
          </button>
        </li>
        <li className={`page-item ${currentPage === 5 ? "active" : ""}`}>
          <button className="page-link" onClick={() => setCurrentPage(5)}>
            5
          </button>
        </li>
        <button
          className="btn btn-outline-primary"
          onClick={() => handleNext()}
          disabled={currentPage >= totalPages}
        >
          Next
        </button>
      </ul>
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
  display: flex;
  padding: 20px;
  justify-content: center;
  gap: 10px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

const LHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: 700;
`;
