import { useGlobalContext } from "../Context";

const Dices = ({
    setDicesColor,
    dicesColor,
    diceJaune,
    diceOrange,
    diceViolet,
    launchDice,
    diceResult,
    setDiceResult,
}) => {
    // CONTEXT
    const { playerIndexName, playerToPlay } = useGlobalContext();

    const arrayDice = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
    ];

    return (
        <>
            {playerIndexName === playerToPlay ? (
                <p>Selectionner le ou les dés à lancer</p>
            ) : (
                <p>Selectionner les couleurs des dés et leur somme</p>
            )}

            <div className="dices">
                {/* Dés orange */}
                <div
                    className="dice dice-orange"
                    onClick={() => {
                        dicesColor.includes("orange")
                            ? setDicesColor([])
                            : setDicesColor([...dicesColor, "orange"]);
                    }}
                >
                    {dicesColor.includes("orange") ? (
                        diceOrange === 0 ? (
                            "X"
                        ) : (
                            <>{diceOrange}</>
                        )
                    ) : (
                        ""
                    )}
                </div>
                {/* Dés jaune */}
                <div
                    className="dice dice-jaune"
                    onClick={() => {
                        dicesColor.includes("jaune")
                            ? setDicesColor([])
                            : setDicesColor([...dicesColor, "jaune"]);
                    }}
                >
                    {dicesColor.includes("jaune") ? (
                        diceJaune === 0 ? (
                            "X"
                        ) : (
                            <>{diceJaune}</>
                        )
                    ) : (
                        ""
                    )}
                </div>
                {/* Dés violet */}
                <div
                    className="dice dice-violet"
                    onClick={() => {
                        dicesColor.includes("violet")
                            ? setDicesColor([])
                            : setDicesColor([...dicesColor, "violet"]);
                    }}
                >
                    {dicesColor.includes("violet") ? (
                        diceViolet === 0 ? (
                            "X"
                        ) : (
                            <>{diceViolet}</>
                        )
                    ) : (
                        ""
                    )}
                </div>
                {/* Dés noir */}
                <div className="dice">=</div>
                <div className="dice dice-sum">
                    {diceResult > 0 && diceResult}
                </div>
            </div>

            {playerIndexName === playerToPlay ? (
                <div className="list-values-dices">
                    {diceResult === 0 && (
                        <div
                            className="btn-submit"
                            onClick={() => {
                                launchDice();
                            }}
                        >
                            LANCER
                        </div>
                    )}
                </div>
            ) : (
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
            )}
        </>
    );
};

export default Dices;
