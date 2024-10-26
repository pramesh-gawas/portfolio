import styled from "styled-components";

export const About = () => {
  return (
    <>
      <AboutHeader>About me</AboutHeader>
      <AboutContent>
        "As a dedicated web developer, I possess a strong foundation in HTML,
        CSS, and JavaScript, enabling me to create dynamic and user-centric web
        experiences.I'm a passionate MERN Stack developer with a strong
        foundation in React, Node.js, MongoDB, and other technologies like
        bootstrap,style-components,MySQL. I'm eager to apply my skills to build
        dynamic and efficient web applications."
      </AboutContent>
    </>
  );
};

const AboutHeader = styled.div`
  display: flex;
  justify-content: center;
  font-size: 30px;
`;

const AboutContent = styled.div`
  margin: 30px;
  font-size: 20px;
`;
