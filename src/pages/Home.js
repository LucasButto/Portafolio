import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Lucas Butto</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h3> Front-End</h3>
            <span>- HTML, CSS, JavaScript, ReactJS, NPM, BootStrap.</span>
          </li>
          <li className="item">
            <h3>Back-End</h3>
            <span>- .NET, MySQL</span>
          </li>
          <li className="item">
            <h3>Programming Languages</h3>
            <span>- JavaScript, Python, C#, C</span>
          </li>
          <li className="item">
            <h3>Tools</h3>
            <span>- Git, GitHub, Visual Studio 2022, Visual Studio Code</span>
          </li>
          <li className="item">
            <h3>Languajes</h3>
            <span>- Spanish, English, Italian</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
