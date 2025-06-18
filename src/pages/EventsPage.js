
import React from "react";
import Section from "../components/Section";
import EventCard from "../components/EventCard";
import "./EventsPage.css";


import roboWarsImage from "../images/robo-wars.jpg";
import codeGolfImage from "../images/code-golf.jpg";
import hackathonImage from "../images/hackathon.jpg"; 
import UAVImage from "../images/uav.jpg"; 
import SharktankImage from "../images/shark.jpg"; 

const allEventsData = [
  {
    id: 1,
    name: "Robo Wars",
    description: "Experience the ultimate robot combat and strategy.",
    image: roboWarsImage, 
    details: "Full details for Robo Wars...",
  },
  {
    id: 2,
    name: "Code Golf",
    description:
      "Solve complex problems with the most elegant and shortest code.",
    image: codeGolfImage, 
    details: "Full details for Code Golf...",
  },
  {
    id: 3,
    name: "AI Hackathon", 
    description: "Build innovative AI solutions and compete for prizes.", 
    image: hackathonImage, 
    details: "Full details for Hackathon...",
  },
  {
    id: 4,
    name: "UAV exhibition",
    description: "Watch and learn about UAV.", 
    image: UAVImage, 
    details: "Discover cutting-edge Unmanned Aerial Vehicles.",
  },
  {
    id: 5,
    name: "Shark Tank", 
    description: "Pitch your startup ideas to industry experts.", 
    image: SharktankImage, 
    details: "Present your innovative ideas and secure funding.",
  },
];

const EventsPage = () => {
  return (
    <div className="events-page">
      <Section title="All Events">
        <p>
          Discover the exciting array of technical and non-technical events!
        </p>
        <div className="events-grid">
          {allEventsData.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default EventsPage;

