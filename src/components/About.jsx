import styled from "styled-components";

export const About = () => {
  return (
    <>
      <AboutHeader>About me</AboutHeader>
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="display-5 fw-bold mb-3">About Me</h2>
              <p className="lead">
                I am <strong>Pramesh Gawas</strong>, a{" "}
                <strong>Computer Engineering</strong> professional with a focus
                on the <strong>MERN stack</strong> and modern API development.
                Having completed my formal engineering curriculum, I specialize
                in building high-performance applications and high-utility
                telemetry software.
              </p>
              <p className="lead">
                My background combines a <strong>Diploma in Electronics</strong>{" "}
                with a degree in <strong>Computer Engineering</strong> from
                Agnel Institute of Technology and Design (Batch of 2024). This
                dual-discipline expertise allows me to tackle software
                challenges with a deep understanding of both system architecture
                and user-facing design.
              </p>
            </div>

            <div className="col-lg-5 offset-lg-1">
              <div className="card shadow-sm p-4 border-0">
                <h4 className="mb-3">Technical Toolkit</h4>
                <div className="d-flex flex-wrap gap-2">
                  {[
                    "React.js",
                    "Node.js",
                    "Express.js",
                    "MongoDB",
                    "TypeScript",
                    "Python",
                    "FastAPI",
                    "PostgreSQL",
                    "MySql",
                    "PostMan",
                    "Material UI",
                  ].map((skill) => (
                    <span key={skill} className="badge bg-primary px-3 py-2">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <hr className="my-5" />

          <div className="row">
            <div className="col-12">
              <h3 className="mb-4">Professional Experience</h3>
              <div className="timeline">
                <div className="mb-4 ps-4 border-start border-primary border-3">
                  <h5>Junior Software Applications Development Engineer</h5>
                  <p className=" mb-1">
                    3D System Private Limited | Dec 2024 – May 2025
                  </p>
                  <ul>
                    <li>
                      Developed telemetry software front-ends using{" "}
                      <strong>React.js</strong> and <strong>TypeScript</strong>.
                    </li>
                    <li>
                      Integrated <strong>.NET-based APIs</strong> for robust
                      data exchange.
                    </li>
                    <li>
                      Resolved over <strong>117 bugs</strong> reported via Jira
                      to improve stability.
                    </li>
                  </ul>
                </div>

                <div className="mb-4 ps-4 border-start border-success border-3">
                  <h5>Junior Web Developer</h5>
                  <p className=" mb-1">
                    Magica Infotech | Sept 2023 – Oct 2023
                  </p>
                  <ul>
                    <li>
                      Launched responsive static websites using the{" "}
                      <strong>Bootstrap</strong> framework.
                    </li>
                    <li>
                      Applied a <strong>mobile-first approach</strong> for
                      diverse client portfolios.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-6">
              <h3 className="mb-3">Education</h3>
              <p className="mb-1">
                <strong>Bachelor in Computer Engineering</strong>
              </p>
              <p className="small">
                Agnel Institute of Technology and Design (2021–2024)
              </p>
              <p className="mb-1">
                <strong>Diploma in Electronics & Communication</strong>
              </p>
              <p className="small">Govt. Polytechnic Bicholim (2018–2021)</p>
            </div>
            <div className="col-md-6">
              <h3 className="mb-3">Certifications</h3>
              <div className="p-3 border rounded bg-white">
                <h6>FastAPI - The Complete Course 2026</h6>
                <p className=" small mb-0">Issued by Udemy • Dec 17, 2025</p>
                <p className="small mt-2">
                  Specializing in high-performance Python APIs and Pydantic
                  validation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
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
