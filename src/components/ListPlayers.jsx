import React from "react";
import { useGlobalContext } from "../Context";
import { GiAmericanFootballPlayer, GiPlayerTime } from "react-icons/gi";

const ListPlayers = () => {
    const { players, playerIndexName } = useGlobalContext();

    return (
        <div className="list-players-game">
            {players.map((player, index) => {
                console.log(index);
                if (index == playerIndexName) {
                    return (
                        <div className="player player-me" key={index}>
                            <GiAmericanFootballPlayer />
                        </div>
                    );
                } else {
                    return (
                        <div className="player" key={index}>
                            {player}
                        </div>
                    );
                }
            })}
        </div>
    );
};

export default ListPlayers;
