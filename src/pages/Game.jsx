import { useGlobalContext } from "../Context";
import { useEffect, useState } from "react";
import Dices from "../components/Dices";
import LineCoupsManques from "../components/LineCoupsManques";
import LineHystorique from "../components/LineHystorique";
import LineOrange from "../components/LineOrange";
import LineViolet from "../components/LineViolet";
import LineYellow from "../components/LineYellow";
import ListPlayers from "../components/ListPlayers";
import DicesOtherPlayers from "../components/DicesOtherPlayers";

function Game() {
    // Context
    const { playerIndexName, playerToPlay, setPlayerToPlay, players } = useGlobalContext();

    // const [casesOrange, setCasesOrange] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    // const [casesJaune, setCasesJaune] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    // const [casesViolet, setCasesViolet] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);

    // DICES
    const [diceOrange, setDiceOrange] = useState(0);
    const [diceJaune, setDiceJaune] = useState(0);
    const [diceViolet, setDiceViolet] = useState(0);
    const [diceResult, setDiceResult] = useState();
    const [dicesColor, setDicesColor] = useState([]);
    const [dicesHystorique, setDicesHystorique] = useState([]);

    useEffect(() => {
        // Joueur physique lance les dés
        setDiceResult(
            Number(diceOrange) + Number(diceJaune) + Number(diceViolet)
        );
    }, [diceOrange, diceJaune, diceViolet]);

    const launchDice = (colorDice) => {
        setDicesColor([...dicesColor, colorDice]);
        colorDice === "orange"
            ? setDiceOrange(Math.floor(Math.random() * 6 + 1))
            : colorDice === "jaune"
            ? setDiceJaune(Math.floor(Math.random() * 6 + 1))
            : setDiceViolet(Math.floor(Math.random() * 6 + 1));
    };

    const resetDice = () => {
        setDicesHystorique([...dicesHystorique, diceResult]);
        setDiceOrange(0);
        setDiceJaune(0);
        setDiceViolet(0);
        setPlayerToPlay(playerToPlay + 1);
        playerToPlay === players.length - 1 && setPlayerToPlay(0);
        setDicesColor([]);
        setDiceResult("");
    };

    return (
        <div className="app-container">
            <ListPlayers />
            <div className="carte-jeux">
                <h1>QWINTO</h1>
                {playerIndexName === playerToPlay ? (
                    <Dices
                        launchDice={launchDice}
                        diceOrange={diceOrange}
                        diceJaune={diceJaune}
                        diceViolet={diceViolet}
                        diceResult={diceResult}
                        resetDice={resetDice}
                    />
                ) : (
                    <DicesOtherPlayers
                        setDicesColor={setDicesColor}
                        dicesColor={dicesColor}
                        setDiceResult={setDiceResult}
                        resetDice={resetDice}
                    />
                )}
                <LineOrange diceResult={diceResult} dicesColor={dicesColor} />
                <LineYellow diceResult={diceResult} dicesColor={dicesColor} />
                <LineViolet diceResult={diceResult} dicesColor={dicesColor} />
                <LineCoupsManques />
                <LineHystorique dicesHystorique={dicesHystorique} />
            </div>
        </div>
    );
}

export default Game;
