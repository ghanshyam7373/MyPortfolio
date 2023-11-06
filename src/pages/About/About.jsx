import React from "react";
import "./About.css";
import Heading from "../../components/Heading/Heading";
import vectorImg from "../../assets/images/Speaker.png";
import Experience from "../../Data/Experience";
import ListIcon from "../../components/ListIcon/ListIcon";
import Education from "../../Data/Education";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <div className="aboutPage">
      <div className="aboutPortion">
        <div className="aboutContent">
          <div className="aboutHeading">
            <Heading label="About" className="headAbout" />
            <p className="pHeading">Ghanshyam Mistry</p>
          </div>
          <p className="aboutDesc">
            As a creative professional, I wear the dual hats of a designer and
            developer. My passion lies in the art of transforming ordinary
            concepts into captivating designs and bringing them to life through
            the power of development. With an unwavering commitment to
            innovation and a strong belief in the marriage of aesthetics and
            functionality, I thrive on crafting unique digital experiences that
            leave a lasting impact
          </p>
        </div>
        <div className="aboutImage">
          <img src={vectorImg} alt="Resume" />
        </div>
      </div>
      <div className="listingSection">
        <div className="experience">
          <Heading label="Experience" className="listHeading" />
          <VerticalTimeline lineColor="var(--light-cyan)">
            {Experience.map((data, index) => {
              return (
                <VerticalTimelineElement
                  key={index}
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "transparent",
                    color: "var(--light-grey)",
                  }}
                  contentArrowStyle={{ display: "none" }}
                  iconStyle={{ background: "var(--dark-cyan)" }}
                  icon={<ListIcon />}
                >
                  <h3 className="vertical-timeline-element-title">
                    {data.company}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    {data.positionTime}
                  </h4>
                  <p className="vertical-timeline-element-desc">{data.desc}</p>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </div>

        <div className="education">
          <Heading label="Education" className="listHeading" />
          <VerticalTimeline lineColor="var(--light-cyan)">
            {Education.map((data, index) => {
              return (
                <VerticalTimelineElement
                  key={index}
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "transparent",
                    color: "var(--light-grey)",
                  }}
                  contentArrowStyle={{ display: "none" }}
                  iconStyle={{ background: "var(--dark-cyan)" }}
                  icon={<ListIcon />}
                >
                  <h3 className="vertical-timeline-element-title">
                    {data.institute}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    {data.degree}
                  </h4>
                  <p className="vertical-timeline-element-desc">
                    {data.percentage}
                  </p>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default About;
