const Dices = ({
    setDicesColor,
    dicesColor,
    diceJaune,
    diceOrange,
    diceViolet,
    launchDice,
    diceResult,
}) => {
    return (
        <>
            <p>Selectionner le ou les dés à lancer</p>
            <div className="dices">
                <div
                    className="dice dice-orange"
                    onClick={() => {
                        dicesColor.includes("orange") ? setDicesColor([]) :
                        setDicesColor([...dicesColor, "orange"]);
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
                <div
                    className="dice dice-jaune"
                    onClick={() => {
                        dicesColor.includes("jaune") ? setDicesColor([]) :
                        setDicesColor([...dicesColor, "jaune"]);
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
                <div
                    className="dice dice-violet"
                    onClick={() => {
                        dicesColor.includes("violet") ? setDicesColor([]) :
                        setDicesColor([...dicesColor, "violet"]);
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
                <div className="dice">=</div>
                <div className="dice dice-sum">
                    {diceResult > 0 && diceResult}
                </div>
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
        </>
    );
};

export default Dices;
