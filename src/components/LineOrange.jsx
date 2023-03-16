const LineOrange = ({ diceResult, dicesColor, indexCase, testDiceValue }) => {
    // Test pour affichage si la couleur de ligne correspond
    const testDice = () => {
        if (dicesColor.includes("orange") === true || indexCase[0] !== 0) {
            return true;
        } else {
            return false;
        }
    };

    return (
        <div className="line line-orange">
            {/* 1 */}
            <div className="case-vide"></div>

            {/* 2 */}
            <div className="case-vide"></div>

            {/* 3 */}
            <div className="case-pleine">
                <div
                    className="case-cocher case-rond"
                    id="3"
                    onClick={(e) => {
                        testDiceValue(2, "orange") &&
                        testDice() &&
                        e.target.innerText === ""
                            ? (e.target.innerText = diceResult)
                            : (e.target.innerText = "");
                    }}
                ></div>
            </div>
            {/* 4 */}
            <div className="case-pleine">
                <div
                    className="case-cocher case-losange"
                    id="4"
                    onClick={(e) => {
                        testDiceValue(3, "orange") &&
                        testDice() &&
                        e.target.innerText === ""
                            ? (e.target.innerText = diceResult)
                            : (e.target.innerText = "");
                    }}
                ></div>
            </div>
            {/* 5 */}
            <div className="case-pleine">
                <div
                    className="case-cocher case-rond"
                    id="5"
                    onClick={(e) => {
                        testDiceValue(4, "orange") &&
                        testDice() &&
                        e.target.innerText === ""
                            ? (e.target.innerText = diceResult)
                            : (e.target.innerText = "");
                    }}
                ></div>
            </div>
            {/* 6 */}
            <div className="case-vide case-pleine"></div>
            {/* 7 */}
            <div className="case-pleine">
                <div
                    className="case-cocher case-rond"
                    id="7"
                    onClick={(e) => {
                        testDiceValue(6, "orange") &&
                        testDice() &&
                        e.target.innerText === ""
                            ? (e.target.innerText = diceResult)
                            : (e.target.innerText = "");
                    }}
                ></div>
            </div>
            {/* 8 */}
            <div className="case-pleine">
                <div
                    className="case-cocher case-losange"
                    id="8"
                    onClick={(e) => {
                        testDiceValue(7, "orange") &&
                        testDice() &&
                        e.target.innerText === ""
                            ? (e.target.innerText = diceResult)
                            : (e.target.innerText = "");
                    }}
                ></div>
            </div>
            {/* 9 */}
            <div className="case-pleine">
                <div
                    className="case-cocher case-rond"
                    id="9"
                    onClick={(e) => {
                        testDiceValue(8, "orange") &&
                        testDice() &&
                        e.target.innerText === ""
                            ? (e.target.innerText = diceResult)
                            : (e.target.innerText = "");
                    }}
                ></div>
            </div>
            {/* 10 */}
            <div className="case-pleine">
                <div
                    className="case-cocher case-rond"
                    id="10"
                    onClick={(e) => {
                        testDiceValue(9, "orange") &&
                        testDice() &&
                        e.target.innerText === ""
                            ? (e.target.innerText = diceResult)
                            : (e.target.innerText = "");
                    }}
                ></div>
            </div>
            {/* 11 */}
            <div className="case-pleine">
                <div
                    className="case-cocher case-rond"
                    id="11"
                    onClick={(e) => {
                        testDiceValue(10, "orange") &&
                        testDice() &&
                        e.target.innerText === ""
                            ? (e.target.innerText = diceResult)
                            : (e.target.innerText = "");
                    }}
                ></div>
            </div>
            {/* 12 */}
            <div className="case-pleine">
                <div
                    className="case-cocher case-rond"
                    id="12"
                    onClick={(e) => {
                        testDiceValue(11, "orange") &&
                        testDice() &&
                        e.target.innerText === ""
                            ? (e.target.innerText = diceResult)
                            : (e.target.innerText = "");
                    }}
                ></div>
            </div>
        </div>
    );
};

export default LineOrange;
