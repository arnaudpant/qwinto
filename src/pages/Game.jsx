import { useGlobalContext } from "../Context";
import { useEffect, useState } from "react";
import ListPlayers from "../components/ListPlayers";
import Dices from "../components/Dices";
import LineOrange from "../components/LineOrange";
import LineYellow from "../components/LineYellow";
import LineViolet from "../components/LineViolet";
import LineCoupsManques from "../components/LineCoupsManques";
import LineHystorique from "../components/LineHystorique";
import LastLaunch from "../components/LastLaunch";

function Game() {
    // CONTEXT
    const { playerToPlay, setPlayerToPlay, players } = useGlobalContext();

    // ARRAY LINES
    const [casesOrange, setCasesOrange] = useState([
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ]);
    const [casesJaune, setCasesJaune] = useState([
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ]);
    const [casesViolet, setCasesViolet] = useState([
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ]);
    const [indexCase, setIndexCase] = useState();

    // DICES VALUES
    const [diceOrange, setDiceOrange] = useState(0);
    const [diceJaune, setDiceJaune] = useState(0);
    const [diceViolet, setDiceViolet] = useState(0);
    // DICES SUM
    const [diceResult, setDiceResult] = useState();
    // DICES COLORS
    const [dicesColor, setDicesColor] = useState([]);
    // DICES HYSTORIQUE
    const [dicesHystorique, setDicesHystorique] = useState([]);
    const [lastLaunch, setLastLaunch] = useState([]);

    // USEEFFECT
    useEffect(() => {
        // Joueur physique lance les dés
        setDiceResult(
            Number(diceOrange) + Number(diceJaune) + Number(diceViolet)
        );
    }, [diceOrange, diceJaune, diceViolet]);

    // TEST DICE



    // LAUNCH DICE
    const launchDice = () => {
        dicesColor.includes("orange") &&
            setDiceOrange(Math.floor(Math.random() * 6 + 1));
        dicesColor.includes("jaune") &&
            setDiceJaune(Math.floor(Math.random() * 6 + 1));
        dicesColor.includes("violet") &&
            setDiceViolet(Math.floor(Math.random() * 6 + 1));
    };

    const resetDice = () => {
        setDicesHystorique([...dicesHystorique, diceResult]);
        setDiceOrange(0);
        setDiceJaune(0);
        setDiceViolet(0);
        setPlayerToPlay(playerToPlay + 1);
        playerToPlay === players.length - 1 && setPlayerToPlay(0);
        setDicesColor([]);
        setDiceResult(0);
    };

    const memoLastLaunch = (colors) => {
        setLastLaunch(colors);
    };

    return (
        <div className="app-container">
            <ListPlayers />
            <div className="carte-jeux">
                <h1>QWINTO</h1>
                <Dices
                    setDicesColor={setDicesColor}
                    dicesColor={dicesColor}
                    diceOrange={diceOrange}
                    diceJaune={diceJaune}
                    diceViolet={diceViolet}
                    launchDice={launchDice}
                    diceResult={diceResult}
                    setDiceResult={setDiceResult}
                    resetDice={resetDice}
                />
                <LineOrange
                    diceResult={diceResult}
                    dicesColor={dicesColor}
                />
                <LineYellow
                    diceResult={diceResult}
                    dicesColor={dicesColor}
                />
                <LineViolet
                    diceResult={diceResult}
                    dicesColor={dicesColor}
                />
                {diceResult > 0 && (
                    <div
                        className="btn-submit"
                        onClick={() => {
                            memoLastLaunch(dicesColor);
                            resetDice();
                        }}
                    >
                        VALIDER
                    </div>
                )}
                <LineCoupsManques />
                <LastLaunch lastLaunch={lastLaunch} />
                <LineHystorique dicesHystorique={dicesHystorique} />
            </div>
        </div>
    );
}

export default Game;
