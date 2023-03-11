import React from "react";
import { useGlobalContext } from "../Context";
import { GiAmericanFootballPlayer, GiPlayerTime } from "react-icons/gi";

const ListPlayers = () => {
    const { players, playerToPlay } = useGlobalContext();

    return (
        <div className="list-players-game">
            {players.map((player, index) => {
                if (playerToPlay == index) {
                    return (
                        <div className="player player-me" key={index}>
                            <GiAmericanFootballPlayer /> {player}
                        </div>
                    );
                } else {
                    return (
                        <div className="player" key={index}>
                            <GiPlayerTime /> {player}
                        </div>
                    );
                }
            })}
        </div>
    );
};

export default ListPlayers;
