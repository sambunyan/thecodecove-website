import React from 'react';
import './entertainmentsection.css';  

const EntertainmentSection = () => {
  return (
    <div className="entertainment-section">
      <div className="entertainment-text">
        <p>
          We even have short-form <span className="highlight-red">entertainment</span><br />
          for those <span className="highlight-muted-purple">dopamine</span> hits you love.
        </p>
      </div>
      <div className="icons">
        <div>
          <a href="https://www.youtube.com/@TheCodeCove" target="_blank" rel="noopener noreferrer">
            <i className="fi fi-brands-youtube"></i>
            <p className="icon-text">Youtube</p>
          </a>
        </div>
        <div>
          <a href="https://www.tiktok.com/@thecodecove" target="_blank" rel="noopener noreferrer">
            <i className="fi fi-brands-tik-tok"></i>
            <p className="icon-text">TikTok</p>
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/the_code_cove/" target="_blank" rel="noopener noreferrer">
            <i className="fi fi-brands-instagram"></i>
            <p className="icon-text">Instagram</p>
          </a>
        </div>
        <div className="x">
          <a href="https://x.com/TheCodeCove" target="_blank" rel="noopener noreferrer">
            <i className="fi fi-brands-twitter"></i>
            <p className="icon-text">X (Twitter)</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default EntertainmentSection;
