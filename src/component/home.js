import React , { useEffect, useState } from "react";
import "../css/home.css";
import "../css/caroussel.css";
import Footer from "./footer"

function Co_missions(){

    const [currentSlide, setCurrentSlide] = useState(0);
    const images = [
      "/images/honey-352205_1280.jpg",
      "/images/nature-845849_1280.jpg",
      "/images/windmill-5591464_1280.jpeg",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
          nextSlide();
        }, 9999); // Changez cette valeur pour ajuster la durée entre les diapositives (en millisecondes)
    
        return () => {
          clearInterval(interval);
        };
      }, 
      );
    
      const previousSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
      };
    
      const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
      };
    
    return (
        <div className="body">
            <div>
                <h1>Bienvenue sur CO'PART</h1>
            </div>

            <div className="carousel">
                <div className="carousel-buttons">
                </div>
                    <img className={`carousel-slide ${currentSlide === 0 ? "active" : ""}`}
                        src={images[currentSlide]}
                        alt={`image${currentSlide + 1}`}
                    />    
            </div>

            <div className="homeSpace">
                <p>Copart est un site web d'entraide qui vous met en lien avec les personnes de votre région. Nous proposons des centaines de profils qualifiés dans tout type de domaines ! </p>
                <p>Peinture, carlage ou encore jardinage ! Vous disposez de compétences techniques et vous avez le sens du partage ? </p>
                <p>Proposez vos services sur Copart, faites des rencontres, entraidez vous et apprenez auprès de vos voisins.</p>
            </div>
                
            <Footer />
        </div>
    );

}

export default Co_missions;