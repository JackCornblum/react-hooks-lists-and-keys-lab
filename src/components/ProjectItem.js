import React from "react";

function Span(props) {
  return <span>{props.technology}</span>
}

function ProjectItem({ name, about, technologies }) {
  const tech = technologies.map(tech => {
    return <Span technology={tech} key={tech} />
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        {tech}
      </div>
    </div>
  );
}

export default ProjectItem;
