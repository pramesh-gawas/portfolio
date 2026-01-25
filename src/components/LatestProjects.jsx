import React, { useEffect } from "react";
import styled from "styled-components";
import Card from "./common/Card";
import Spinner from "./common/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProjects } from "../store/projectSlice";
export const LatestProjects = () => {
  const ProjectData = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!ProjectData?.items || ProjectData.items.length === 0) {
      dispatch(fetchAllProjects());
    }
  }, [dispatch]);
  return (
    <>
      <LHeader>Latest Projects</LHeader>
      <LProjects>
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
            <p>{ProjectData?.error}</p>
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
