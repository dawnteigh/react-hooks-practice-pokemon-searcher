import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const { id, name, hp, sprites } = pokemon
  const [isFront, setIsFront] =useState(true)
  let spriteSrc = isFront ? sprites.front : sprites.back
  function spriteSwap() {
    setIsFront(isFront => !isFront)
  }
  return (
    <Card>
      <div onClick={spriteSwap} id={id} >
        <div className="image">
          <img alt="oh no!" src={spriteSrc} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
