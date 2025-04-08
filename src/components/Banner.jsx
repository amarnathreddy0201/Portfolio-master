import React from "react";
import cv from "../assets/resume/AmarnathReddy.pdf";
import { Container } from "react-bootstrap";
import "../styles/banner.css";

function Banner() {
  const download = () => {
    let downloadBtn = document.getElementById("downloadCV");
    let aTag = document.createElement("a");
    aTag.href = cv;
    aTag.download = "Amar Resume";
    aTag.click();
    downloadBtn.appendChild(aTag);
    aTag.remove();
  };

  return (
    <Container fluid className="banner" id="banner">
      <div className="banner-inner">
        <h2>
          Hello! I'm
          <br /> Surapureddy Amarnath Reddy
        </h2>
        <p>
        Since beginning my journey as a developer nearly 3 years ago, I've learned Python, C++, computer vision, HTML, CSS, JavaScript, React.js, and Node.js. 
        In addition, I have hands-on experience with cloud computing services, particularly Amazon Web Services (AWS). 
        My passion for computer vision and machine learning extends to deploying and managing applications on the cloud.
        I enjoy learning more about AWS and leveraging its services to enhance the scalability and efficiency of my projects.
        </p>
        <button id="downloadCV" onClick={download} aria-label="download-cv">
          Get Resume
        </button>
      </div>
    </Container>
  );
}

export default Banner;
