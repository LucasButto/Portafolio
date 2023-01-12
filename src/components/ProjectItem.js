import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectItem = ({ image, name, id }) => {
  const navigate = useNavigate();
  const navigateToTop = () => {
    navigate("/project/" + id);
    window.scrollTo(0, 0);
  };
  return (
    <div
      className="projectItem"
      onClick={() => {
        navigateToTop();
      }}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1> {name} </h1>
    </div>
  );
};

export default ProjectItem;
