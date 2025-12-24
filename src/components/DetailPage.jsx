import React from "react";
import styled from "styled-components";
import { useParams, useLocation } from "react-router-dom";
export const DetailPage = () => {
  const param = useParams();
  const location = useLocation();
  const project = location.state?.projectData;
  return (
    <DetailWrapper>
      <ImageWrap>
        <img src={project?.profileImages?.[0]} alt={project?.title} />
      </ImageWrap>

      <Info>
        <Title>{project?.title}</Title>

        <Section>
          <SectionTitle>Languages</SectionTitle>
          <Tags>
            {project?.languages.map((l) => (
              <Tag key={l}>{l}</Tag>
            ))}
          </Tags>
        </Section>

        <Section>
          <SectionTitle>Tools</SectionTitle>
          <Tags>
            {project?.tools.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </Tags>
        </Section>

        <Section>
          <SectionTitle>Description</SectionTitle>
          <Description>{project?.description}</Description>
        </Section>

        <Actions>
          {project?.codeLink && (
            <ActionLink
              href={project?.codeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ActionButton>View Code</ActionButton>
            </ActionLink>
          )}
          {project?.projectUrl && (
            <ActionLink
              href={project?.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ActionButton>Live Demo</ActionButton>
            </ActionLink>
          )}
        </Actions>
      </Info>
    </DetailWrapper>
  );
};

const DetailWrapper = styled.div`
  display: flex;
  gap: 24px;
  padding: 24px 30px;
  align-items: flex-start;
  margin-top: 80px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 16px;
  }
`;

const ImageWrap = styled.div`
  flex: 0 0 480px;
  img {
    width: 100%;
    height: 400px;
    border-radius: 8px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.45);
  }
  @media (max-width: 768px) {
    flex: 0 0 auto;
  }
`;

const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 24px;
  color: #fff;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SectionTitle = styled.h4`
  margin: 0;
  font-size: 16px;
  color: #008dd5;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.span`
  background: rgba(0, 141, 213, 0.12);
  color: #008dd5;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 14px;
`;

const Description = styled.p`
  margin: 0;
  padding: 12px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  line-height: 1.4;
  font-size: 15px;
  max-height: 220px;
  overflow: auto;
`;

const Actions = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 8px;
`;

const ActionLink = styled.a`
  text-decoration: none;
`;

const ActionButton = styled.button`
  background: ${(p) => (p.primary ? "#008dd5" : "transparent")};
  color: ${(p) => (p.primary ? "#fff" : "#008dd5")};
  border: 2px solid #008dd5;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    opacity: 0.9;
  }
`;
