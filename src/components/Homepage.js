import ceoLogo from '../images/logo/coeLogoWithoutText.jpg'
import backgroundVideo from '../images/background.mp4';

import LabImage2 from '../images/lab/2.jpg';
import LabImage3 from '../images/lab/3.jpg';
import LabImage4 from '../images/lab/4.jpg';
import LabImage5 from '../images/lab/5.jpg';


import '../css/Homepage.css'

import React, { useState, useEffect } from 'react';

function Homepage() {

  const industryLogo = [
    "https://www.next-chemx.com/wp-content/themes/nextchemx/assets/img/logo.png",
    "https://ionexchangeglobal.com/app/uploads/2022/05/ion-logo.webp",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSopngCefg2XIl_1WQTv-9X9CMAcdU5aWns3Q&s",
  ]

  const labImages = [
    LabImage2,
    LabImage3,
    LabImage4,
    LabImage5
  ];

  const labTexts = [
    {
      title: "Algae Carbon Capture",
      description: "Intelligent Photo Bioreactor for Carbon Capture"
    },
    {
      title: "Unmixed Combustion Test Rig",
      description: "Enviromentally Friendly Alternative Pathway For Combustion"
    },
    {
      title: "Mixed Mode Forced Convection Solar Dryer",
      description: "For Agriculture and Marine Food Products"
    },
    {
      title: "Electrochemical Flow Cell",
      description: "For Conducting Chemical Reaction on Continuous Basis"
    }
  ];

  const achievemntImages = [
    'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1676313414325-2a877a95dd10?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];

  const achievementText = [
    {
      title: "National Green Hydrogen Mission Scheme",
      description: "Call for Proposals under Research and Development Scheme of National Green Hydrogen Mission",
      link:"https://mnre.gov.in/en/notice/call-for-proposals-under-research-and-development-scheme-of-national-green-hydrogen-mission/"
    },
    {
      title: "DBT-EU Cooperation Programme",
      description: "Programme on R&I ‘Horizon Europe’ Calls 2023-2024",
      link:"https://dbtindia.gov.in/latest-announcement/dbt-eu-coopration-programme-ri-%E2%80%98horizon-europe%E2%80%99-calls-2023-2024"
    },
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentAchievementIndex, setAchievementIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % labImages.length;
        return newIndex;
      });
    }, 3000); 
    return () => clearInterval(interval); 
  }, [labImages.length, labTexts]);

  useEffect(() => {
    const interval = setInterval(() => {
      setAchievementIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % achievemntImages.length;
        return newIndex;
      });
    }, 3000); 
    return () => clearInterval(interval); 
  }, [achievemntImages.length, achievementText]);

  return (
    <div className="homepage">

      <div className="backgroundVideo">
        <video className="backgroundVideoElement" autoPlay loop muted>
          <source src={backgroundVideo} type="video/mp4"/>
          Your browser does not support the video tag.
        </video>

        <div className="mainTitle">
          <span> ARCSET </span>
          <img src={ceoLogo} width="170px" height="150px" className="coeLogoWithText"></img>
        </div>

        <div className="secondaryText">
          <p> Advanced Research Centre For Sustainable Energy Technologies </p>
     
        </div>

        <div className="otherText">
          <p>First of a kind Energy Center</p>
        </div> 
      </div>

      <div className="labMain">
        <div
          className="labSlider"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {labImages.map((image, index) => (
            <div key={index} className="labSlide">
              <div className="labTextSection">
                <div className="labText">
                  <p className="labTextMain">{labTexts[index].title}</p>
                  <p className="labOtherText">{labTexts[index].description}</p>
                </div>
              </div>
              <div className="carousel">
                <img src={image} alt={`Slide ${index}`} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="industryTitle">New Achievements</p>

      <div className="labMain">
        <div
          className="labSlider"
          style={{ transform: `translateX(-${currentAchievementIndex * 100}%)` }}
        >
          {achievemntImages.map((image, index) => (
            <a key={index} href={achievementText[index].link} target="_blank" rel="noopener noreferrer" className="labSlide" style={{ textDecoration: "none" }}>
              <div className="labTextSection">
                <div className="labText">
                  <p className="labTextMain">{achievementText[index].title}</p>
                  <p className="labOtherText">{achievementText[index].description}</p>
                </div>
              </div>
              <div className="carousel">
                <img src={image} alt={`Slide ${index}`} />
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="industryInfo">
        <p className="industryTitle">Industry Partners</p>
        <div className="industryLogos">
          <a href="https://www.next-chemx.com/" target="_blank" rel="noopener noreferrer" className="logoContainer">
            <img style={{ width: '250px', height: '60px' }} src={industryLogo[0]} className="industryLogoImage" />
          </a>
          <a href="https://ionexchangeglobal.com/" target="_blank" rel="noopener noreferrer" className="logoContainer">
            <img style={{ width: '180px', height: '60px' }} src={industryLogo[1]} className="industryLogoImage" />
          </a>
          <a href="https://www.chemdistgroup.com/" target="_blank" rel="noopener noreferrer" className="logoContainer">
            <img style={{ width: '120px', height: '60px' }} src={industryLogo[2]} className="industryLogoImage" />
          </a>
        </div>
      </div>

    </div>
  );

}

export default Homepage;