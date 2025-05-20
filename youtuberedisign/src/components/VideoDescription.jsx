import { useState } from "react";

function VideoDescription() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="video-description">
      <div className="channel-info">
        <div className="channel-avatar">
          <img
            src="https://placehold.co/600x400/navy/white"
            alt="Channel avatar"
          />
        </div>
        <div className="channel-details">
          <h3 className="channel-name">Channel Name</h3>
          <p className="channel-subscribers">1.2M subscribers</p>
        </div>
        <button className="subscribe-button">Subscribe</button>
      </div>

      <div className="video-description-content">
        <div className="video-metadata">
          <span className="video-views">125K views</span>
          <span className="video-date">Published on May 15, 2025</span>
        </div>

        <div className={`description-text ${expanded ? "expanded" : ""}`}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, urna eu tincidunt consectetur, nisi nunc fermentum nisl,
            eget varius nisl nisi eu nunc. Sed euismod, urna eu tincidunt
            consectetur, nisi nunc fermentum nisl, eget varius nisl nisi eu
            nunc.
          </p>
          <p>
            Sed euismod, urna eu tincidunt consectetur, nisi nunc fermentum
            nisl, eget varius nisl nisi eu nunc. Sed euismod, urna eu tincidunt
            consectetur, nisi nunc fermentum nisl, eget varius nisl nisi eu
            nunc.
          </p>
        </div>

        <button
          className="show-more-button"
          onClick={() => setExpanded(!expanded)}>
          {expanded ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
}

export default VideoDescription;
