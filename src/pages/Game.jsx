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
    const testDiceValue = (index, color) => {
        let arrayColor = []
        if(color === "orange"){
            arrayColor = [...casesOrange]
        } else if (color === "jaune") {
            arrayColor = [...casesJaune]
        }else{
            arrayColor = [...casesViolet]
        }

        setIndexCase(index);
        // TEST 1
        for (let i = index + 1; i < arrayColor.length - (index - 1); i++) {
            if (arrayColor[i] !== 0) {
                if (diceResult >= arrayColor[i]) {
                    alert("Valeur trop petite");
                    return false;
                }
            }
        }
        // TEST 2
        for (let y = index - 1; y <= 0; y--) {
            if (arrayColor[y] !== 0) {
                if (diceResult <= arrayColor[y]) {
                    alert("Valeur trop grande");
                    return false;
                }
            }
        }
        // TEST 3
        if (
            diceResult === casesJaune[index] ||
            diceResult === casesViolet[index] ||
            diceResult === casesOrange[index]
        ) {
            alert("Une seule valeur identique par colonne");
            return false;
        }

        return true;
    };

    // VALID VALUE IN ARRAY
    const validValueDices = () => {
        let arrayTemp = [...casesOrange];
        arrayTemp[indexCase] === 0 && (arrayTemp[indexCase] = diceResult);
        setCasesOrange(arrayTemp);
    };

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
                    indexCase={indexCase}
                    testDiceValue={testDiceValue}
                />
                <LineYellow
                    diceResult={diceResult}
                    dicesColor={dicesColor}
                    indexCase={indexCase}
                    testDiceValue={testDiceValue}
                />
                <LineViolet
                    diceResult={diceResult}
                    dicesColor={dicesColor}
                    indexCase={indexCase}
                    testDiceValue={testDiceValue}
                />
                {diceResult > 0 && (
                    <div
                        className="btn-submit"
                        onClick={() => {
                            validValueDices();
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
