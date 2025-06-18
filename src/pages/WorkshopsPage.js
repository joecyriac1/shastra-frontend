import React from "react";
import Section from "../components/Section";
import WorkshopCard from "../components/WorkshopCard";
import "./WorkshopsPage.css";


import workshopAIImage from "../images/workshop-ai.jpg";
import workshopWebDevImage from "../images/workshop-webdev.jpg";
import workshopRoboticsImage from "../images/workshop-robotics.jpg";
import workshopDesignImage from "../images/workshop-design.jpg";
import workshopCyberImage from "../images/workshop-cyber.jpg";

const workshopsData = [
  {
    id: 1,
    name: "Applied AI & Machine Learning",
    description: "Hands-on session covering practical AI model deployment.",
    image: workshopAIImage,
    instructor: "Dr. Dwayne Johnson",
    duration: "6 hours",
    difficulty: "Advanced",
    date: "July 20, 2025",
    enrollLink: "/enroll/ai-ml",
  },
  {
    id: 2,
    name: "Modern Web Development (React)",
    description: "Build dynamic web applications using ReactJS fundamentals.",
    image: workshopWebDevImage,
    instructor: "Mr. Suresh Gopi",
    duration: "8 hours",
    difficulty: "Intermediate",
    date: "July 25, 2025",
    enrollLink: "/enroll/web-dev",
  },
  {
    id: 3,
    name: "Robotics & Automation Basics",
    description: "Introduction to robotics, sensors, and basic automation.",
    image: workshopRoboticsImage,
    instructor: "Prof. Lakshmi",
    duration: "5 hours",
    difficulty: "Beginner",
    date: "August 1, 2025",
    enrollLink: "/enroll/robotics-basics",
  },
  {
    id: 4,
    name: "UI/UX Design Principles",
    description:
      "Master the art of creating intuitive and beautiful user interfaces.",
    image: workshopDesignImage,
    instructor: "Ms. Ambili",
    duration: "7 hours",
    difficulty: "Intermediate",
    date: "August 5, 2025",
    enrollLink: "/enroll/ui-ux-design",
  },
  {
    id: 5,
    name: "Ethical Hacking & Penetration Testing",
    description: "Understand common vulnerabilities and defensive strategies.",
    image: workshopCyberImage,
    instructor: "Mr. Diddy",
    duration: "10 hours",
    difficulty: "Advanced",
    date: "August 10, 2025",
    enrollLink: "/enroll/ethical-hacking",
  },
];

const WorkshopsPage = () => {
  return (
    <div className="workshops-page">
      <Section title="Our Workshops">
        <p className="workshops-intro-text">
          Dive deep into cutting-edge technologies with our expert-led
          workshops. Enhance your skills, gain practical experience, and get
          certified!
        </p>
        <div className="workshops-grid-container">
          {workshopsData.map((workshop) => (
            <WorkshopCard key={workshop.id} workshop={workshop} />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default WorkshopsPage;

