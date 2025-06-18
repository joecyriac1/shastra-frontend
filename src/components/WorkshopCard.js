
import React from "react";
import { Link } from "react-router-dom";
import "./WorkshopCard.css";

const WorkshopCard = ({ workshop }) => {
  const {
    name,
    description,
    image,
    instructor,
    duration,
    difficulty,
    date,
    enrollLink,
  } = workshop;

  return (
    <div className="workshop-card">
      <div className="workshop-image-container">
        <img src={image} alt={name} className="workshop-card-image" />
        {difficulty && (
          <span
            className={`workshop-difficulty difficulty-${difficulty.toLowerCase()}`}
          >
            {difficulty}
          </span>
        )}
      </div>
      <div className="workshop-content">
        <h3>{name}</h3>
        <p className="workshop-description">{description}</p>
        <div className="workshop-meta">
          {instructor && (
            <p>
              <strong>Instructor:</strong> {instructor}
            </p>
          )}
          {duration && (
            <p>
              <strong>Duration:</strong> {duration}
            </p>
          )}
          {date && (
            <p>
              <strong>Date:</strong> {date}
            </p>
          )}
        </div>
        {enrollLink && (
          <Link to={enrollLink} className="workshop-enroll-button">
            Enroll Now
          </Link>
        )}
      </div>
    </div>
  );
};

export default WorkshopCard;

