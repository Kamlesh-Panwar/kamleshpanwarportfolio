import React, { useContext } from "react";
import "./VideoCard.css";

function VideoCard() {
  return (
    <div className="video-card">
      <video
        className="video-player"
        src="/videos/demo.mp4"
        controls
        autoPlay
        muted
        loop
      />
      <div className="video-content">
        <h3>My Project Demo</h3>
        <p>
          This project shows a complete React portfolio with animations, dark mode,
          and responsive design.
        </p>
      </div>
    </div>
  );
}

export default VideoCard;
