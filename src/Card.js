import "./Card.css";
import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import { SwipeableDrawer } from "@material-ui/core";

function Card(){
    const [people, setPeople] = useState([
        {
            name: 'Ash Ketchum',
            url: 'https://cdn2.bulbagarden.net/upload/thumb/2/21/Baron_Ash.png/428px-Baron_Ash.png'
        },
        {
            name: 'Gary Oak',
            url: 'https://cdn2.bulbagarden.net/upload/thumb/a/ad/Gary_Oak_BW.png/200px-Gary_Oak_BW.png'
        }
    ])

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
        //setLastDirection(direction);
    }

    const outOfFrame = (name) => {
        console.log(name+" left the screen!")
    }

    return (
        <div className="card">
            <div className="cardsContainer">
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={['up','down']}
                        onSwipe={(dir)=>swiped(dir, person.name)}
                        onCardLeftScreen={()=>outOfFrame(person.name)}
                    >
                        <div
                            style={{backgroundImage: `url(${person.url})`}}
                            className="profileCard"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default Card