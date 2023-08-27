import React, { useState } from "react";
import "./Character.css"; 
import Arrow from '../../components/Arrow/Arrow';

const characters = [
    {
      name: "Sam Gideon",
      desc: "Sam Gideon is a former United States Marine who has become a member of DARPA, the Defense Advanced Research Projects Agency. He is chosen to wear the Augmented Reaction Suit (ARS), a cutting-edge powered exoskeleton suit that grants him enhanced speed, agility, and strength. The ARS also grants Sam the ability to perform various acrobatic maneuvers, such as boosting, sliding, and even time manipulation. Sam Gideon is portrayed as a determined and resourceful individual. He is dedicated to completing his mission at all costs and is willing to push himself to the limits to achieve success. ",
      image: "https://asia.sega.com/bayonettavanquish/cn/vanquish/img/characters/SAM.jpg"
    },
    {
      name: "Robert Burns",
      desc: "Robert Burns is a battle-hardened soldier with a strong sense of duty and camaraderie. As a member of Bravo Company, he fights alongside the game's protagonist, Sam Gideon, in the mission to rescue the President of the United States. Burns is known for his no-nonsense attitude and his unwavering determination to complete the mission. He brings a sense of realism to the team, showcasing the human side of the conflict amidst the futuristic battles and advanced technology. With his tactical expertise and combat prowess, Burns plays a crucial role in the fight against the enemy forces.",
      image: "https://asia.sega.com/bayonettavanquish/cn/vanquish/img/characters/ROBERT.jpg"
    },
    {
      name: "Victor Zaitsev",
      desc: "Victor Zaitsev stands as a charismatic and enigmatic villain whose motivations are shrouded in mystery. As the leader of the Order of the Russian Star, he orchestrates a rebellion against the United States by seizing control of a powerful space-based energy weapon. Zaitsev's character is marked by his ruthlessness and cunning, utilizing his strategic genius to exploit weaknesses and further his agenda. Armed with advanced technology and an army of loyal followers, Victor Zaitsev is a formidable adversary for the game's protagonist, Sam Gideon.",
      image: "https://asia.sega.com/bayonettavanquish/cn/vanquish/img/characters/VICTOR.jpg"
    },
    {
      name: "Elena Ivanova",
      desc: "Elena Ivanova is a strong-willed and skilled individual who finds herself entangled in the conflict between the United States and the Order of the Russian Star. As a scientist, she is responsible for developing and maintaining the energy weapons that the Order wields in their rebellion against the United States. Despite her association with the antagonistic faction, Elena's character is multi-dimensional, reflecting her internal struggles and moral dilemmas. Elena's intelligence and resourcefulness shine through as she navigates the challenging landscape of the game's world. Her commitment to her work and the people she cares about drives her actions, leading her to question the true motives of the Order and to consider the impact of her creations on the world at large.",
      image: "https://asia.sega.com/bayonettavanquish/cn/vanquish/img/characters/ELENA.jpg"
    },
    {
      name: "President Elizabeth Winters",
      desc: "President Winters is depicted as a strong and determined leader who faces a dire situation when the United States comes under attack by the Order of the Russian Star. She becomes a symbol of resilience and courage as she seeks to protect her nation and its people from the threat posed by the Order's advanced technology and military forces. Throughout the game, President Winters is portrayed as a pragmatic and level-headed individual who weighs the consequences of her decisions carefully. Her leadership style is marked by her dedication to her country and her willingness to take difficult actions to ensure its survival. ",
      image: "https://asia.sega.com/bayonettavanquish/cn/vanquish/img/characters/ELIZABETH.jpg",
    },
    {
      name: "Dr. Candide",
      desc: "Dr. Candide is portrayed as a highly intelligent and innovative scientist who has made significant contributions to the development of advanced technology, including the Augmented Reaction Suit (ARS) that the protagonist Sam Gideon uses. His creations, particularly the ARS, become instrumental in the battle against the Order of the Russian Star, a ruthless organization that threatens the safety of the United States. While Dr. Candide's scientific achievements are remarkable, his character is marked by a certain enigmatic quality. He possesses knowledge that proves to be crucial in unraveling the mysteries behind the Order's intentions and their technological prowess. ",
      image: "https://asia.sega.com/bayonettavanquish/cn/vanquish/img/characters/FRANCOIS.jpg"
    },
    // Add more characters here
  ];
  

function Character() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentCharacter = characters[currentIndex];
  
    const nextCharacter = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % characters.length);
    };
  
    const prevCharacter = () => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + characters.length) % characters.length
      );
    };
  
    return (
        <div className="characters-container">
        <div className="character-details">
          <h2 className="character-name">{currentCharacter.name}</h2>
          <p className="character-desc">{currentCharacter.desc}</p>
          <div className="arrow prev" onClick={prevCharacter}><Arrow /></div>
        </div>
        <div className="character-image">
          <img src={currentCharacter.image} alt={currentCharacter.name} />
          <div className="arrow next" onClick={nextCharacter}><Arrow /></div>
        </div>
      </div>
    );
  }

export default Character;
