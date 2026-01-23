import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Card = ({ project }) => {
  const Navigate = useNavigate();
  const handleDetailpage = (id) => {
    Navigate(`/Detail/${id}`, { state: { projectData: project } });
  };

  const truncate = (text, max) => {
    if (!text) return "";
    return text.length > max ? text.slice(0, max) + "..." : text;
  };
  const carouselId = `carousel-${project?._id}`;
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div id={carouselId} className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target={`#${carouselId}`}
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target={`#${carouselId}`}
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target={`#${carouselId}`}
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          {project?.profileImages?.map((url, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                src={url}
                loading="lazy"
                height={200}
                className="d-block w-100"
                alt={project?.data?.ttile}
              />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target={`#${carouselId}`}
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target={`#${carouselId}`}
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="card-body">
        <h5 className="card-title">{project?.title}</h5>
        <p className="card-text">{truncate(project?.description, 180)}</p>
        <div style={{ display: "flex", gap: "8px" }}>
          <a
            href={project?.projectUrl || "#"}
            target="_blank"
            className="btn btn-success btn-sm"
          >
            Visit Site
          </a>
          <button
            onClick={() => handleDetailpage(project?._id)}
            type="button"
            className="btn btn-primary btn-sm"
          >
            Details
          </button>
          <a
            target="_blank"
            href={project?.codeLink || "#"}
            className="btn btn-danger btn-sm"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

const style = styled.div`
  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }

  .card {
    display: flex;
    flex-direction: column;
    height: 100%;
    outline: 1px solid rgb(0, 141, 213);
  }

  .card-body {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .card-text {
    flex-grow: 1;
    min-height: 80px;
  }
`;

export default Card;
