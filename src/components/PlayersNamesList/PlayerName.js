import React from 'react';

const PlayerName = (props) => {
      const playerName = props.playerName;
      let AddPlayersList = [];
      for (let i = 0; i < playerName.length; i++) {
          const player = playerName[i];
         AddPlayersList = AddPlayersList +  ' '  + player.name;          
      }
    return (
        <div>
           <h2>Players Names Selected Count Club :{playerName.length}</h2>
           <p>players Names: {AddPlayersList}</p>
        </div>
    );
};

export default PlayerName;