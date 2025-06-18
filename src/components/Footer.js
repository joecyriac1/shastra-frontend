
import React from "react";
import "./Footer.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; Shastra. All rights reserved.</p>
        <div className="social-links">
          <a
            href="https://www.youtube.com/watch?v=0Kvw2BPKjz0" /*dont have facebook,excuse*/
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://x.com/JoeCyriac2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.instagram.com/joecyriac423/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

