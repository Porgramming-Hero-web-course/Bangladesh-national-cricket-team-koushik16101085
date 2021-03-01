import logo from './logo.svg';
import './App.css';
import playersData from './fackData/data.json';
import { useEffect, useState } from 'react';
import Player from './components/Player/Player';
import Cart from './components/Cart/Cart';
import PlayerName from './components/PlayersNamesList/PlayerName';


function App() {
  const [Players, setPlayer] = useState([]);
  const [cart, setCart] = useState([]);
  const [playerName, setPlayerName] = useState([]);
  
  const handleAddPlayer = (player) => {
   const newCart = [...cart, player];
   setCart(newCart);
   const newPlayerName = [...playerName, player];
   setPlayerName (newPlayerName);
  } 
  
  return (
    <div className="text-center" >
     <h1>Player Data loaded: {playersData.length}</h1>
      <p className="player-add">Player Added: {cart.length}</p>
      <Cart cart={cart}></Cart>
      <PlayerName playerName ={playerName}></PlayerName>


      {
        playersData.map(player => <Player player={player} handleAddPlayer={handleAddPlayer} key={player.id}></Player>)
      }


    </div>
  );
}

export default App;
