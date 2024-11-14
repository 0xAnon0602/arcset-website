import coeLogo from '../images/logo/coeLogo.png'
import '../css/Homepage.css'
import React, { useState, useEffect } from 'react';

function Homepage() {

    const images = [
      'https://images.unsplash.com/photo-1667995508178-e24e78cd944c?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://plus.unsplash.com/premium_photo-1661434779070-cf8fc0e253ab?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://plus.unsplash.com/premium_photo-1661430659143-ffbb5ce2b6a7?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ];

    const industryLogo = [
      "https://img.freepik.com/premium-vector/bird-logo-vector-design_1020392-9.jpg?w=1060",
      "https://png.pngtree.com/png-clipart/20200727/original/pngtree-rooster-creative-logo-design-template-png-image_5327856.jpg",
      "https://st2.depositphotos.com/3487615/5752/v/450/depositphotos_57526709-stock-illustration-phoenix-logo-design-symbol-vector.jpg",
      "https://i.pinimg.com/736x/cd/95/7a/cd957ad812878612f006fb7c3b698cd0.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5MDdXUuF-eLzAeCpTxXGSQ_m2PMrFDmZAQokYMwZOAHgBOsW3yJaZ99ENg3QdeHT0o90&usqp=CAU",
      "https://img.freepik.com/premium-vector/colorful-bird-with-colorful-tail-is-shown-white-background_1187092-33056.jpg?w=2000",
      "https://img.freepik.com/premium-vector/colorful-bird-gradient-illustration-logo-concept_1253202-1713.jpg?w=1060",
      "https://img.freepik.com/premium-vector/stylized-hummingbird-premium-vector-illustration_629132-102.jpg?w=1060"
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); 
      return () => clearInterval(interval); 
    }, [images.length]);


    return (
        <div className="homepage">

          <div className="mainTitle">
            <span> CASET </span>
            <img className='backgroundImage' src={coeLogo} width="90px" height="90px"></img>
          </div>

          <div className="secondaryText">
            <p> Centre for Advancement in Sustainable Energy Technologies </p>
          </div>

          <div className="otherText">
            <p>The First COE Of Energy Research <br/>"For Goa, Of Goa, By Goa"</p>
          </div> 

          <div className="labMain">

            <div className="labTextSection">

              <div className="labText">
                <p className='labTextMain'>Lab  And  <br/> Prototypes</p>
                <p className="labOtherText">Lorem eu sunt consequat magna reprehenderit proident aliqua. Eu minim ea aliquip dolor occaecat exercitation veniam cillum. Eiusmod irure cupidatat consequat pariatur minim ipsum minim. Sint voluptate in commodo excepteur veniam proident mollit sit cillum veniam ex proident. Velit consequat laborum irure Lorem reprehenderit incididunt eu magna id amet nisi exercitation.</p>
              </div>

            </div>

            <div className="carousel">
              <div
                className="carousel-images"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {images.map((image, index) => (
                  <img key={index} src={image} alt={`Slide ${index}`} />
                ))}
              </div>
            </div>

          </div>

          <div className="industryInfo">
            <p className="industryTitle">Industry Logo</p>
            <div className="industryLogos">
              {industryLogo.map((logo, index) => (
                <div key={index} className="logoContainer">
                  <img width="100px" height="100px" src={logo} alt={`Logo ${index}`} className="industryLogoImage" />
                  <p className="logoText">Logo {index + 1}</p> 
                </div>
              ))}
            </div>
          </div>

      </div>
    );
  }
  
  export default Homepage;