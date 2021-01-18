import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({p}) {
  const {name, hp, sprites} = p
  const [showFront, setShowFront] = useState(true)

  function handleClick () {
    setShowFront((showFront)=> !showFront)
  }

    return (
    <Card>
      
      <div id={p.name} >
        
        <div className="image" onClick = {handleClick}>
          <img src={showFront? sprites.front : sprites.back} alt = {name}/>
        </div>
        <div className="content">
          <div className="header"><b>{p.name.toUpperCase()}</b></div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {p.hp} hp
          </span>
        </div>
      </div>
        
    </Card>
  )

  

}

export default PokemonCard;
