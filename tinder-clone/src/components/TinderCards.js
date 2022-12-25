import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import "../css/TinderCards.css";
import axios from "../axios.js";

function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchCards() {
      const req = await axios.get("/cards");

      setPeople(req.data);
    }

    fetchCards();
  }, []);
  const swiped = (direction, name) => {
    console.log("swiped " + name + " in " + direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " out of frame");
  };
  return (
    <div className="tinderCards">
      <div className="tinderCards__container">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.imgUrl})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
