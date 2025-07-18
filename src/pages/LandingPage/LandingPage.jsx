import React from "react";
import "./LandingPage.css";
import FillBtn from "../../components/Buttons/FillBtn/FillBtn";
import Heading from "../../components/Heading/Heading";
import OutlineBtn from "../../components/Buttons/OutlineBtn/OutlineBtn";
import Card from "../../components/Card/Card";
import Projects from "../../Data/Projects";
import coder from "../../assets/images/Coder.png";
import resume from "../../assets/resume/GhanshyamMistryResume.pdf";
import resumePng from "../../assets/resume/GhanshyamMistryResume.jpg";
import { useState } from "react";

const LandingPage = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleClick = () => {
    setIsDownloading(true);
    fetch(resume)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "Ghanshyam's Resume.pdf";
        link.click();
        setIsDownloading(false);
      });
  };

  return (
    <div className="landingPage">
      <div className="topContent">
        <div className="mainHead">
          <div className="heading">
            <p className="mainHeadText">Ghanshyam Mistry</p>
            <p className="mainHeadText">Full-Stack & AI Engineer</p>
          </div>
          <div className="descPara">
            <p className="mainDesc">
              Dedicated to embracing new knowledge and fostering
            </p>
            <p className="mainDesc">
              meaningful connections in pursuit of excellence.
            </p>
          </div>
          <FillBtn to="/about" label="More About Me" />
        </div>
        <div className="mainImg">
          <img
            src="https://res.cloudinary.com/duoe2yt88/image/upload/v1699125595/Images/bja5765stim6mmje3qxr.png"
            alt=""
            srcSet=""
          />
        </div>
      </div>

      <div className="recentProject">
        <div className="projectTitle">
          <Heading label="Recent Projects" />
          <OutlineBtn to="/projects" label="View All" />
        </div>
        <div className="cardGroup">
          {Projects.slice(0, 3).map((data, index) => {
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

      <div className="partitionPortion">
        <div className="partitionBackgroundBox" />
        <div className="coderImageContainer">
          <img src={coder} alt="" srcSet="" />
        </div>
        <div className="partitionText">
          <Heading
            label="Designing and coding: A love for crafting,"
            className="partitionHead"
          />
          <Heading label="logic as the compass" className="partitionHead" />
          <p className="mainDesc partitionDesc">
            Where creativity meets precision, and every line of code is a
            brushstroke
          </p>
          <p className="mainDesc partitionDesc">on the canvas of the web</p>
        </div>
      </div>

      <div className="resumePortion">
        <div className="resumeContent">
          <Heading label="My Resume" />
          <p className="resumeDesc">
            You're welcome to access and review my comprehensive resume, which
            offers a detailed overview of my professional background,
            qualifications, and experience. It serves as a valuable resource for
            gaining a deeper understanding of my career journey, skills, and
            achievements. Should you have any inquiries or require further
            information, please don't hesitate to reach out; I'm readily
            available to assist in any way I can.
          </p>
          <div className="resumeBtnGroup">
            <FillBtn
              label="Download Resume"
              onClick={handleClick}
              disabled={isDownloading}
            />
            <OutlineBtn label="More About Me" to="/about" />
          </div>
        </div>
        <div className="resumeImage">
          <img src={resumePng} alt="Resume" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
