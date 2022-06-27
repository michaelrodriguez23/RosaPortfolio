import React, { useState } from "react";
import { selectedProjects } from "Data/projects";
import styled from "styled-components";

function Selected() {
  const Section = styled.section`
    display: flex;
    margin-top: 4em;
    width: 100%;
    height: 100vh;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 0em;
  `;

  const ProjectImage = styled.img`
    width: 40vw;
    margin: 1em;
    object-fit: fill;
  `;

  const ProjectContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
  `;

  const ProjectDetail = styled.p`
    display: block;
    margin: auto;
  `;

  const [projects, setProjects] = useState([selectedProjects]);

  return (
    <>
      <Section data-testid="grid-container-test" className="grid-container">
        {selectedProjects.map((project, index) => {
          return (
            <ProjectContainer
              data-testid={`grid-item-${index}`}
              key={project.id}
              className="grid-item"
            >
              <a a href="{project.link}">
                {console.log(project.link)}
                <ProjectImage
                  src={process.env.PUBLIC_URL + project.previewImage}
                />{" "}
              </a>
              <div className="project-grid-details">
                <ProjectDetail>{project.title}</ProjectDetail>
              </div>
            </ProjectContainer>
          );
        })}
      </Section>
    </>
  );
}

export default Selected;
