import styled from "styled-components";
import Card from "./common/Card";
import { useEffect } from "react";
import Spinner from "./common/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProjects } from "../store/projectSlice";
export const Projects = () => {
  const ProjectData = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProjects());
  }, [dispatch]);

  return (
    <>
      <ProjectHeader>All Projects</ProjectHeader>
      <ProjectContainer>
        {!ProjectData?.loading &&
          ProjectData?.pagination?.totalResult === 0 && (
            <div className="text-center p-5 text-muted">
              <p>Add project to show</p>
            </div>
          )}
        {ProjectData?.loading ? (
          <Spinner />
        ) : (
          ProjectData?.items?.map((project, index) => (
            <Card key={index} project={project}></Card>
          ))
        )}
        {!ProjectData?.loading && ProjectData?.error && (
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
