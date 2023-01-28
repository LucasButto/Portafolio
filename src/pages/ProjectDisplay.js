import React, {useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import "../styles/ProjectDisplay.css";
import { useEffect } from "react";

const ProjectDisplay = () => {
  const { id } = useParams();
  const project = ProjectList[id];
  const navigate = useNavigate();
  const [showButton, setShowButton] = useState(true);
  const goBack = () => {
    navigate("/projects");
    window.scrollTo(0, 0);
  };

  useEffect (() => {
    const showButtonHandler = () => {
      window.screen.width > 425 ? setShowButton(true) : setShowButton(false);
    };
    showButtonHandler();
  }, []);

  return (
    <div className="project">
      <div className="title-container"
      data-aos="fade-up"
      data-aos-delay="0">
        {showButton && <button className="goBack-button" onClick={goBack}><KeyboardBackspaceIcon/></button>}
        <h1> {project.name}</h1>
      </div>

      <img src={project.image} alt="Project img" 
      data-aos="fade-up"
      data-aos-delay="400"/>

      {Boolean(project.skills) && 
        <div data-aos="fade-up" data-aos-delay="800">
          <p><b>Skills:</b> {project.skills}</p>
        </div>
      }

      <div className="links-containers" 
        data-aos="fade-up"
        data-aos-delay="1200">

        {Boolean(project.github) && <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          title="Visit the repository"
        >
          <GitHubIcon />
        </a>}
        
        {Boolean(project.link) &&
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            title="Go to the site"
          >
            <LaunchIcon />
          </a>
        }
      </div>
    </div>
  );
};

export default ProjectDisplay;
