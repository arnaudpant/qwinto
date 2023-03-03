import { useEffect, useState } from "react";
import Dices from "./components/Dices";
import LineCoupsManques from "./components/LineCoupsManques";
import LineOrange from "./components/LineOrange";
import LineViolet from "./components/LineViolet";
import LineYellow from "./components/LineYellow";
import "./style/style.scss";

function App() {
    const [casesOrange, setCasesOrange] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [casesJaune, setCasesJaune] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [casesViolet, setCasesViolet] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);

    // DICES
    const [diceOrange, setDiceOrange] = useState(0);
    const [diceJaune, setDiceJaune] = useState(0);
    const [diceViolet, setDiceViolet] = useState(0);
    const [diceResult, setDiceResult] = useState();
    const [dicesColor, setDicesColor] = useState([]);

    useEffect(() => {
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

    return (
        <div className="app-container">
            <div className="carte-jeux">
                <h1>QWINTO</h1>
                <Dices
                    launchDice={launchDice}
                    diceOrange={diceOrange}
                    diceJaune={diceJaune}
                    diceViolet={diceViolet}
                    diceResult={diceResult}
                />
                <LineOrange diceResult={diceResult} dicesColor={dicesColor} />
                <LineYellow diceResult={diceResult} dicesColor={dicesColor} />
                <LineViolet diceResult={diceResult} dicesColor={dicesColor} />
                <LineCoupsManques />
            </div>
            
        </div>
    );
}

export default App;
