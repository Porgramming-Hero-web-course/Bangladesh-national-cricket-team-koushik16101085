import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './Player.css';
const Player = (props) => {
    const { name, salary, image, jersey } = props.player;
    const handleAddPlayer = props.handleAddPlayer;
    return (
        <div className="text-center d-inline-flex" >
            <div className=' playerStyle mx-3 shadow-sm p-3 mb-5 bg-body rounded'>
                <img className='imageStyle' src={image} alt="" />
                <h4>Player Name: {name}</h4>
                <p>salary: {salary}</p>
                <p>jersey: {jersey}</p>
                <button className="main-button" onClick={() => handleAddPlayer(props.player)} ><FontAwesomeIcon icon={faPlus} />Add Player</button>
            </div>
        </div>
    );
};

export default Player;