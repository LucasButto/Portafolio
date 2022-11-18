import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import TimelineElement from "../components/TimelineElement";

const Experience = () => {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2013 - 2017"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <TimelineElement
            title={"Eesopi N3081 Dante Alighieri"}
            subTitle={"High School Diploma"}
          />
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2017"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <TimelineElement
            title={"internships at Arrow Computacion"}
            description={
              "internship at Arrow Computacion where I had to perform tasks of assembly and maintenance of computer equipment."
            }
          />
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<AutoStoriesIcon />}
        >
          <TimelineElement
            title={"Data analysis using Microsoft Excel."}
            description={"Data management course in excel"}
          />
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<AutoStoriesIcon />}
        >
          <TimelineElement
            title={"Excel programming with VBA"}
            description={"Excel programming course with VBA"}
          />
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<AutoStoriesIcon />}
        >
          <TimelineElement
            title={"PC Assembly and Maintenance"}
            description={"PC Assembly and Maintenance Course"}
          />
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 - current"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <TimelineElement
            title={
              "Universidad Tecnológica Nacional | Facultad Regional Rosario"
            }
            description={"University Degree in Programming"}
          />
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
