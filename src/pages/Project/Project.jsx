import React from "react";
import Heading from "../../components/Heading/Heading";
import Card from "../../components/Card/Card";
import Projects from "../../Data/Projects";
import bg from "../../assets/images/background.png";
import "./Project.css";

const Project = () => {
  return (
    <div className="projectsPage">
      <div className="recentProject">
        <div className="projectTitle">
          <Heading label="My Projects" />
        </div>
        <div className="cardGroup">
          {Projects.map((data, index) => {
            return (
              <Card
                key={index}
                img={data.img}
                title={data.title}
                desc={data.desc}
                skills={data.skills}
                url={data.url}
                github={data.github}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
