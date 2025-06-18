
import React from "react";
import HeroSection from "../components/HeroSection";
import Section from "../components/Section";
import EventCard from "../components/EventCard";
import "./HomePage.css";

import roboWarsImage from '../images/robo-wars.jpg';
import codeGolfImage from '../images/code-golf.jpg';
import hackathonImage from '../images/hackathon.jpg'; 
import UAVImage from '../images/uav.jpg'; 
import SharktankImage from '../images/shark.jpg'; 


const eventsData = [
  {
    id: 1,
    name: "Robo Wars",
    description: "Experience the ultimate robot combat and strategy.",
    image: roboWarsImage, 
  },
  {
    id: 2,
    name: "Code Golf",
    description:
      "Solve complex problems with the most elegant and shortest code.",
    image: codeGolfImage, 
  },
  {
    id: 3,
    name: "AI Hackathon",
    description: "Build innovative AI solutions and compete for prizes.", 
    image: hackathonImage, 
  },
  {
    id: 4,
    name: "UAV exhibition", 
    description: "Watch and learn about UAV", 
    image: UAVImage, 
  },
  {
    id: 5,
    name: "Shark Tank", 
    description: "Pitch your startup ideas to industry experts.",
    image: SharktankImage, 
  },
];

const HomePage = () => {
  return (
    <div className="home-page">
      <HeroSection
        title="Welcome to Shastra"
        subtitle="Innovation, Creativity, and Technology"
        ctaText="Explore Events"
        ctaLink="/events"
        videoSource="/videos/homevideo.mp4"
      />

      <Section title="Featured Events">
        <div className="event-cards-container">
          {eventsData.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </Section>

    </div>
  );
};

export default HomePage;

