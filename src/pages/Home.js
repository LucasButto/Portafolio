import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <div data-aos="zoom-in" data-aos-duration="1000">
          <h2> Hi, My Name is Lucas Butto</h2>
        </div>
        <div className="prompt" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500">
          <p>A software developer with a passion for learning and creating.</p>
        </div>
      </div>
      <div className="skills">
        <div data-aos="zoom-in" data-aos-duration="500">
          <h1> Skills</h1>
        </div>
        <ol className="list">
          <div data-aos="zoom-in-right" data-aos-duration="800">
            <li className="item">
              <h3> Front-End</h3>
              <span>- HTML, CSS, JavaScript, ReactJS, NPM, BootStrap.</span>
            </li>
          </div>
          <div data-aos="zoom-in-right" data-aos-duration="800">
            <li className="item">
              <h3>Back-End</h3>
              <span>- .NET, MySQL</span>
            </li>
          </div>
          <div data-aos="zoom-in-right" data-aos-duration="800">
            <li className="item">
              <h3>Programming Languages</h3>
              <span>- JavaScript, Python, C#, C</span>
            </li>
          </div>
          <div data-aos="zoom-in-right" data-aos-duration="800">
            <li className="item">
              <h3>Tools</h3>
              <span>- Git, GitHub, Visual Studio 2022, Visual Studio Code</span>
            </li>
          </div>
          <div data-aos="zoom-in-right" data-aos-duration="800">
            <li className="item">
              <h3>Languajes</h3>
              <span>- Spanish, English, Italian</span>
            </li>
          </div>
        </ol>
      </div>
    </div>
  );
};

export default Home;
