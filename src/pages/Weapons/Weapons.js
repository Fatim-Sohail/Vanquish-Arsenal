import React, { useState } from "react";
import { useTransition, animated } from "react-spring";
import "./Weapons.css";

const slides = [
  {
    title: "CR-ASSault",
    subtitle: "High",
    description:
      "An assault rifle with an emphasis on precision and damage.",
    image: "https://images8.alphacoders.com/774/774313.jpg",
  },
  {
    title: "Rocket Launcher",
    subtitle: "High",
    description:
      "An assault rifle with an emphasis on precision and damage.",
    image: "https://asia.sega.com/bayonettavanquish/cn/vanquish/bladesystem/img/item07.png",
  },
  {
    title: "LFE Gun",
    description: "Launches explosive grenades that deal area damage to enemies.",
    subtitle: "High",
    image: "https://asia.sega.com/bayonettavanquish/cn/vanquish/bladesystem/img/item06.png"
  },
  {
    title: "Laser Cannon",
    description: "A long-range energy weapon that shoots devastating laser beams.",
    subtitle: "High",
    image: "https://asia.sega.com/bayonettavanquish/cn/vanquish/bladesystem/img/modal-item02.png"
  },
  {
    title: "Shotgun",
    description: "A close-range weapon that unleashes a spread of pellets for massive damage.",
    subtitle: "High",
    image: "https://asia.sega.com/bayonettavanquish/cn/vanquish/bladesystem/img/modal-item07.png"
  },
  {
    title: "Sniper Rifle",
    description: "A high-subtitleed rifle that allows for precise long-range shots.",
    subtitle: "Moderate",
    image: "https://asia.sega.com/bayonettavanquish/cn/vanquish/bladesystem/img/modal-item10.png"
  },
  {
    title: "Armored Suit",
    description: "Equips a mechanized suit that enhances strength and defense.",
    subtitle: "High",
    image: "https://i.pinimg.com/originals/99/01/8f/99018f1e4e4537251677145272b0e288.jpg"
  }
  
];

function Weapons() {
    const [index, setIndex] = useState(0);
    const currentImage = slides[index].image;
  
    const transitions = useTransition(slides[index], {
      from: { opacity: 0, transform: "translateX(-100%)" },
      enter: { opacity: 1, transform: "translateX(0%)" },
      leave: { opacity: 0, transform: "translateX(100%)" },
    });
  
    const nextSlide = () => {
        const newIndex = (index + 1) % slides.length;
        setIndex(newIndex);
        handleSlideChange(newIndex);
    }

    const prevSlide = () => {
        const newIndex = (index - 1 + slides.length) % slides.length;
        setIndex(newIndex);
        handleSlideChange(newIndex);
    }
  
    const handleSlideChange = (newIndex) => {
        setIndex(newIndex);
    };


    return (
        <>
            <div className="background" style={{backgroundImage: `url('${currentImage}')`}}></div>
            <h1 className="title" >Weapons</h1>
            <h1 className="power" >Po<span className="w">w</span>er</h1>
            <h3 className="subtitle">{slides[index].subtitle}</h3>
        
            <div className="slider-container">
                <button className="slider-button" onClick={prevSlide}>
                ‹
                </button>
                <div className="slider">
                {transitions((style, slide) => (
                    <animated.div className="slide" style={style}>
                    <div
                        className="slideBackground"
                        style={{
                        backgroundImage: `url('${slide.image}')`,
                        }}
                    />
                    <div className="slideContent">
                        <div className="slideContentInner">
                        <h2 className="slideTitle">{slide.title}</h2>
                        <p className="slideDescription">{slide.description}</p>
                        </div>
                    </div>
                    </animated.div>
                ))}
                </div>
        
                <button className="slider-button" onClick={nextSlide}>
                ›
                </button>
            </div>
      </>
    );
  }
  
export default Weapons;
