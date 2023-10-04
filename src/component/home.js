/* eslint-disable jsx-a11y/img-redundant-alt */
import React , { useEffect, useState } from "react";
import "../css/home.css";
import "../css/caroussel.css";
import Footer from "./footer"

function Co_missions(){

    const [currentSlide, setCurrentSlide] = useState(0);
    const images = [
      "/img/honey-352205_1280.jpg",
      "/img/nature-845849_1280.jpg",
      "/img/windmill-5591464_1280.jpg",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
          nextSlide();
        }, 9999); // Changez cette valeur pour ajuster la durée entre les diapositives (en millisecondes)
    
        return () => {
          clearInterval(interval);
        };
      }, []);
    
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ducimus qui natus velit officiis totam obcaecati itaque veritatis accusantium ad eveniet tempore laudantium, nihil in sit earum voluptatum fugit. Ab!</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt accusamus placeat beatae aspernatur iure consectetur eaque minima eligendi! Harum natus, aut non debitis in quisquam soluta magni ut ipsum. Nesciunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aperiam placeat, eligendi atque maxime accusamus tenetur cumque distinctio veniam quos tempora aliquid, fugit dolorum optio earum, nihil explicabo esse delectus?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt accusamus placeat beatae aspernatur iure consectetur eaque minima eligendi! Harum natus, aut non debitis in quisquam soluta magni ut ipsum. Nesciunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aperiam placeat, eligendi atque maxime accusamus tenetur cumque distinctio veniam quos tempora aliquid, fugit dolorum optio earum, nihil explicabo esse delectus?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt accusamus placeat beatae aspernatur iure consectetur eaque minima eligendi! Harum natus, aut non debitis in quisquam soluta magni ut ipsum. Nesciunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aperiam placeat, eligendi atque maxime accusamus tenetur cumque distinctio veniam quos tempora aliquid, fugit dolorum optio earum, nihil explicabo esse delectus?
                </p>

                <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit officia, nulla voluptatum quam voluptate repellat saepe? Aspernatur, officia facere animi veritatis molestias ullam. Repellat sint at provident a quia numquam.</p>
            </div>
                
            <Footer />
        </div>
    );

}

export default Co_missions;