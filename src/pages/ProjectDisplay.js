import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import LaunchIcon from '@mui/icons-material/Launch';
import "../styles/ProjectDisplay.css";

const ProjectDisplay = () => {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} alt="Project img"/>
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <div className="links-containers">
        <a href={project.github} target="_blank" rel="noreferrer">
          <GitHubIcon />
        </a>
        <a href={project.link} target="_blank" rel="noreferrer">
          <LaunchIcon />
        </a>
      </div>
    </div>
  );
}

export default ProjectDisplay;
