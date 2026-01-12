// import React, { useState, useEffect, useContext, lazy, Suspense } from "react";
// import StyleContext from "../../contexts/styleContext";

// const Projects = () => {

//   const { isDark } = useContext(StyleContext);
//     return (
      
//      <div className="main" id="projects">
//         <h1 className="project-title">Projects</h1>
//         <div className="video-grid">
//       <div className="video-card">
//       <video
//         className="video-player"
//         src = "/videos/Portfolio_Recording.mp4"
//         controls
//         autoPlay
//         muted
//         loop
//       />
//       <div className="video-content">
//         <h3>My Project Demo</h3>
//         <p>
//           This project shows a complete React portfolio with animations, dark mode,
//           and responsive design.
//         </p>
//       </div>
//     </div>
//     <div className="video-card">
//       <video
//         className="video-player"
//         src="/videos/demo.mp4"
//         controls
//         autoPlay
//         muted
//         loop
//       />
//       <div className="video-content">
//         <h3>My Project Demo</h3>
//         <p>
//           This project shows a complete React portfolio with animations, dark mode,
//           and responsive design.
//         </p>
//       </div>
//     </div>
//     <div className="video-card">
//       <video
//         className="video-player"
//         src="/videos/demo.mp4"
//         controls
//         autoPlay
//         muted
//         loop
//       />
//       <div className="video-content">
//         <h3>My Project Demo</h3>
//         <p>
//           This project shows a complete React portfolio with animations, dark mode,
//           and responsive design.
//         </p>
//       </div>
//     </div>
//     <div className="video-card">
//       <video
//         className="video-player"
//         src="/videos/demo.mp4"
//         controls
//         autoPlay
//         muted
//         loop
//       />
//       <div className="video-content">
//         <h3>My Project Demo</h3>
//         <p>
//           This project shows a complete React portfolio with animations, dark mode,
//           and responsive design.
//         </p>
//       </div>
//       </div>
//     </div>
//     </div>
//     );
// }

// export default Projects;

import React from "react";
import "./Project.css";

function Projects() {
  return (
    <div className="main" id="projects">
      <h1 className="project-title">Projects</h1>

      <div className="video-grid">
        <div className="video-card">
          <video className="video-player" src="/videos/Portfolio_Recording.mp4" controls />
          <div className="video-content">
            <h3>My Project Demo</h3>
            <p>React portfolio with animations, dark mode and responsive design.</p>
          </div>
        </div>

        <div className="video-card">
          <video className="video-player" src="/videos/demo.mp4" controls />
          <div className="video-content">
            <h3>My Project Demo</h3>
            <p>React portfolio with animations, dark mode and responsive design.</p>
          </div>
        </div>

        <div className="video-card">
          <video className="video-player" src="/videos/demo.mp4" controls />
          <div className="video-content">
            <h3>My Project Demo</h3>
            <p>React portfolio with animations, dark mode and responsive design.</p>
          </div>
        </div>

        <div className="video-card">
          <video className="video-player" src="/videos/demo.mp4" controls />
          <div className="video-content">
            <h3>My Project Demo</h3>
            <p>React portfolio with animations, dark mode and responsive design.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
