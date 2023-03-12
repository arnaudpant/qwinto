

const Dices = ({
    launchDice,
    diceOrange,
    diceJaune,
    diceViolet,
    diceResult,
    resetDice
}) => {

    const selectDices = () => {

    }

    return (
        <div className="dices">
            <div
                className="dice dice-orange"
                onClick={() => {
                    diceOrange === 0 && 
                    launchDice("orange")}}
            >
                {diceOrange > 0 && diceOrange}
            </div>
            <div
                className="dice dice-jaune"
                onClick={() => {
                    diceJaune === 0 &&
                    launchDice("jaune")}}
            >
                {diceJaune > 0 && diceJaune}
            </div>
            <div
                className="dice dice-violet"
                onClick={() => {
                    diceViolet === 0 &&
                    launchDice("violet")}}
            >
                {diceViolet > 0 && diceViolet}
            </div>
            <div className="dice">=</div>
            <div className="dice dice-sum">{diceResult > 0 && diceResult}</div>
            <div className="btn-submit" onClick={()=>resetDice()}>VALIDER</div>
        </div>
    );
};

export default Dices;
