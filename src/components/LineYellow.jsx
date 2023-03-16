import React from "react";

const LineYellow = ({ diceResult,dicesColor, indexCase, testDiceValue }) => {

    const testDice = () => {
        if (dicesColor.includes("jaune") === true || indexCase[0] !== 0) {
            return true;
        } else {
            return false;
        }
    };

    return (
        <div className="line line-yellow">
            {/* 1 */}
            <div className="case-vide"></div>
            {/* 2 */}
            <div className="case-pleine">
                <div
                    className="case-cocher case-rond"
                    id="2"
                    onClick={(e) => {
                        testDiceValue(1, "jaune") &&
                        testDice() &&
                        e.target.innerText === ""
                            ? (e.target.innerText = diceResult)
                            : (e.target.innerText = "");
                    }}
                ></div>
            </div>
            {/* 3 */}
            <div className="case-pleine">
                <div
                    className="case-cocher case-rond"
                    id="3"
                    onClick={(e) => {
                        testDiceValue(2, "jaune") &&
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
                    className="case-cocher case-rond"
                    id="4"
                    onClick={(e) => {
                        testDiceValue(3, "jaune") &&
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
                        testDiceValue(4, "jaune") &&
                        testDice() &&
                        e.target.innerText === ""
                            ? (e.target.innerText = diceResult)
                            : (e.target.innerText = "");
                    }}
                ></div>
            </div>
            {/* 6 */}
            <div className="case-pleine">
                <div
                    className="case-cocher case-rond"
                    id="6"
                    onClick={(e) => {
                        testDiceValue(5, "jaune") &&
                        testDice() &&
                        e.target.innerText === ""
                            ? (e.target.innerText = diceResult)
                            : (e.target.innerText = "");
                    }}
                ></div>
            </div>
            {/* 7 */}
            <div className="case-vide case-pleine"></div>
            {/* 8 */}
            <div className="case-pleine">
                <div
                    className="case-cocher case-rond"
                    id="8"
                    onClick={(e) => {
                        testDiceValue(7, "jaune") &&
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
                    className="case-cocher case-losange"
                    id="9"
                    onClick={(e) => {
                        testDiceValue(8, "jaune") &&
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
                        testDiceValue(9, "jaune") &&
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
                        testDiceValue(10, "jaune") &&
                        testDice() &&
                        e.target.innerText === ""
                            ? (e.target.innerText = diceResult)
                            : (e.target.innerText = "");
                    }}
                ></div>
            </div>
            {/* 12 */}
            <div className="case-vide"></div>

        </div>
    );
};

export default LineYellow;
