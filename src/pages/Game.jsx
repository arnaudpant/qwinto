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
import Scores from "../components/Scores";

function Game() {
    // CONTEXT
    const { playerToPlay, setPlayerToPlay, players, playerIndexName } = useGlobalContext();

    // ARRAY LINES
    const [casesOrange, setCasesOrange] = useState([
        0, 0, 0, 0, 0, 0, 0, 0, 0
    ]);
    const [casesJaune, setCasesJaune] = useState([
        0, 0, 0, 0, 0, 0, 0, 0, 0
    ]);
    const [casesViolet, setCasesViolet] = useState([
        0, 0, 0, 0, 0, 0, 0, 0, 0
    ]);
    const [indexCaseColor, setIndexCaseColor] = useState();

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


    // LAUNCH DICE
    const launchDice = () => {
        dicesColor.includes("orange") &&
        setDiceOrange(Math.floor(Math.random() * 6 + 1));
        dicesColor.includes("jaune") &&
        setDiceJaune(Math.floor(Math.random() * 6 + 1));
        dicesColor.includes("violet") &&
        setDiceViolet(Math.floor(Math.random() * 6 + 1));
    };
    
    // TEST DICE
    const validValue = () => {
        if (indexCaseColor[1] === "orange") {
            const arrayTemp = [...casesOrange];
            arrayTemp[indexCaseColor[0]] = diceResult;
            setCasesOrange(arrayTemp);
        }
        if (indexCaseColor[1] === "jaune") {
            const arrayTemp = [...casesJaune];
            arrayTemp[indexCaseColor[0]] = diceResult;
            setCasesJaune(arrayTemp);
        }
        if (indexCaseColor[1] === "violet") {
            const arrayTemp = [...casesViolet];
            arrayTemp[indexCaseColor[0]] = diceResult;
            setCasesViolet(arrayTemp);
        }

        
    }


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
                <h1>Q<span>WIN</span>TO</h1>
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
                    setIndexCaseColor={setIndexCaseColor}
                    
                />
                <LineYellow
                    diceResult={diceResult}
                    dicesColor={dicesColor}
                    setIndexCaseColor={setIndexCaseColor}
                />
                <LineViolet
                    diceResult={diceResult}
                    dicesColor={dicesColor}
                    setIndexCaseColor={setIndexCaseColor}
                />
                {diceResult > 0 ? (
                    <div
                        className="btn-submit"
                        onClick={() => {
                            validValue()
                            memoLastLaunch(dicesColor);
                            resetDice();
                        }}
                    >
                        VALIDER
                    </div>
                ) : (
                    <div className="coup-manques-vide"></div>
                )}
                {playerIndexName === playerToPlay ? (
                    <LineCoupsManques />
            ) : (
                <div className="coup-manques-vide"></div>
            )}
                <LastLaunch lastLaunch={lastLaunch} />
                <LineHystorique dicesHystorique={dicesHystorique} />
                <Scores casesOrange={casesOrange} casesJaune={casesJaune} casesViolet={casesViolet} />
            <p className="copyright">Codé par Arnaud P. - Tous droits reservés</p>
            </div>
        </div>
    );
}

export default Game;
