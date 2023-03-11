import React from "react";

const DicesOtherPlayers = ({
    setDicesColor,
    dicesColor,
    setDiceResult,
    resetDice,
}) => {
    const arrayDice = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
    ];

    return (
        <>
            <p>Selectionner les couleurs de dés</p>
            <div className="dices">
                <div
                    className="dice dice-orange"
                    onClick={() => {
                        setDicesColor([...dicesColor, "orange"]);
                    }}
                >
                    {dicesColor.includes("orange") && "X"}
                </div>
                <div
                    className="dice dice-jaune"
                    onClick={() => {
                        setDicesColor([...dicesColor, "jaune"]);
                    }}
                >
                    {dicesColor.includes("jaune") && "X"}
                </div>
                <div
                    className="dice dice-violet"
                    onClick={() => {
                        setDicesColor([...dicesColor, "violet"]);
                    }}
                >
                    {dicesColor.includes("violet") && "X"}
                </div>
            </div>
            <p>CLiquer sur la valeur des dés</p>
            <div className="list-values-dices">
                {arrayDice.map((dice) => (
                    <div
                        className="mini-dice"
                        key={dice}
                        onClick={() => setDiceResult(dice)}
                    >
                        {dice}
                    </div>
                ))}
            </div>
            <div className="btn">
                <div
                    className="btn-submit"
                    onClick={() => {
                        resetDice();
                    }}
                >
                    VALIDER
                </div>
                <div
                    className="btn-reset"
                    onClick={() => {
                        setDicesColor([]);
                    }}
                >
                    RESET
                </div>
            </div>
        </>
    );
};

export default DicesOtherPlayers;
