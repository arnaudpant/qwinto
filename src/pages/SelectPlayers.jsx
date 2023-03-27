import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../Context";

const SelectPlayers = () => {
    // CONTEXT
    const { setPlayers, players, setPlayerIndexName, playerIndexName } =
        useGlobalContext();

    // -- PARTIE 1 --- ENTRER NOMS DES JOUEURS
    // USEREF
    const formPlayers = useRef();

    // AJOUT DES JOUEURS DANS UN ARRAY
    const handleSubmit = (e) => {
        e.preventDefault();
        let arrayPlayers = [];
        arrayPlayers.push(formPlayers.current.player1.value);
        arrayPlayers.push(formPlayers.current.player2.value);

        if (formPlayers.current.player3.value != "") {
            arrayPlayers.push(formPlayers.current.player3.value);
        }
        if (formPlayers.current.player4.value != "") {
            arrayPlayers.push(formPlayers.current.player4.value);
        }
        if (formPlayers.current.player5.value != "") {
            arrayPlayers.push(formPlayers.current.player5.value);
        }
        if (formPlayers.current.player6.value != "") {
            arrayPlayers.push(formPlayers.current.player6.value);
        }

        // AJOUT DES JOUEURS DANS USESTATE
        setPlayers(arrayPlayers);

        // RAZ DES INPUT NAMES
        formPlayers.current.player1.value = "";
        formPlayers.current.player2.value = "";
        formPlayers.current.player3.value = "";
        formPlayers.current.player4.value = "";
        formPlayers.current.player5.value = "";
        formPlayers.current.player6.value = "";
    };

    // -- PARTIE  --- ENTRER INDEX JOUEUR
    const handleSelect = (index) => {
        setPlayerIndexName(index);
    };

    return (
        <div className="carte-select-players">
            <h1>Q<span>WIN</span>TO</h1>
            {players.length < 2 ? (
                <form onSubmit={(e) => handleSubmit(e)} ref={formPlayers}>
                    <div className="form-grid">
                        <label htmlFor="player1">Joueur 1: </label>
                        <input
                            type="text"
                            id="player1"
                            className="player"
                            required
                        />
                    </div>
                    <div className="form-grid">
                        <label htmlFor="player2">Joueur 2: </label>
                        <input
                            type="text"
                            id="player2"
                            className="player"
                            required
                        />
                    </div>
                    <div className="form-grid">
                        <label htmlFor="player3">Joueur 3: </label>
                        <input type="text" id="player3" />
                    </div>
                    <div className="form-grid">
                        <label htmlFor="player4">Joueur 4: </label>
                        <input type="text" id="player4" />
                    </div>
                    <div className="form-grid">
                        <label htmlFor="player5">Joueur 5: </label>
                        <input type="text" id="player5" />
                    </div>
                    <div className="form-grid">
                        <label htmlFor="player6">Joueur 6: </label>
                        <input type="text" id="player6" />
                    </div>

                    <button type="submit">VALIDER</button>
                </form>
            ) : (
                <>
                    <h2>T'es qui toi ?</h2>
                    <div className="players-select-name">
                        <div
                            className="player-select"
                            onClick={(e) => {
                                e.target.classList.add("selected");
                                handleSelect(0);
                            }}
                        >
                            {players[0]}
                        </div>
                        <div
                            className="player-select"
                            onClick={(e) => {
                                e.target.classList.add("selected");
                                handleSelect(1);
                            }}
                        >
                            {players[1]}
                        </div>
                        {players[2] && (
                            <div
                                className="player-select"
                                onClick={(e) => {
                                    e.target.classList.add("selected");
                                    handleSelect(2);
                                }}
                            >
                                {players[2]}
                            </div>
                        )}
                        {players[3] && (
                            <div
                                className="player-select"
                                onClick={(e) => {
                                    e.target.classList.add("selected");
                                    handleSelect(3);
                                }}
                            >
                                e{players[3]}
                            </div>
                        )}
                        {players[4] && (
                            <div
                                className="player-select"
                                onClick={(e) => {
                                    e.target.classList.add("selected");
                                    handleSelect(4);
                                }}
                            >
                                {players[4]}
                            </div>
                        )}
                        {players[5] && (
                            <div
                                className="player-select"
                                onClick={(e) => {
                                    e.target.classList.add("selected");
                                    handleSelect(5);
                                }}
                            >
                                {players[5]}
                            </div>
                        )}
                        {playerIndexName !== undefined ? (
                            <NavLink to={"/game"}>
                                <button type="submit" className="launch-game">
                                    LANCEZ LA PARTIE
                                </button>
                            </NavLink>
                        ) : (
                            <button type="submit" className="no-launch-game">
                                CLIC SUR TON NOM
                            </button>
                        )}
                    </div>
                </>
            )}
            <p className="copyright">Codé par Arnaud P. - Tous droits reservés</p>
        </div>
    );
};

export default SelectPlayers;
