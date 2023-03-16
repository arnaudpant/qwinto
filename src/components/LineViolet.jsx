import React from "react";

const LineViolet = ({ diceResult , dicesColor, indexCase, testDiceValue }) => {

    const testDice = () => {
        if (dicesColor.includes("violet") === true || indexCase[0] !== 0) {
            return true;
        } else {
            return false;
        }
    };

    return (
        <div className="line line-violet">
            {/* 1 */}
            <div className="case-pleine">
                <div
                    className="case-cocher case-rond"
                    id="1"
                    onClick={(e) => {
                        testDiceValue(0, "violet") &&
                        testDice() &&
                        e.target.innerText === ""
                            ? (e.target.innerText = diceResult)
                            : (e.target.innerText = "");
                    }}
                ></div>
            </div>
            {/* 2 */}
            <div className="case-pleine">
                <div
                    className="case-cocher case-rond"
                    id="2"
                    onClick={(e) => {
                        testDiceValue(1, "violet") &&
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
                    className="case-cocher case-losange"
                    id="3"
                    onClick={(e) => {
                        testDiceValue(2, "violet") &&
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
                        testDiceValue(3, "violet") &&
                        testDice() &&
                        e.target.innerText === ""
                            ? (e.target.innerText = diceResult)
                            : (e.target.innerText = "");
                    }}
                ></div>
            </div>
            {/* 5 */}
            <div className="case-vide case-pleine"></div>
            {/* 6 */}
            <div className="case-pleine">
                <div
                    className="case-cocher case-rond"
                    id="6"
                    onClick={(e) => {
                        testDiceValue(5, "violet") &&
                        testDice() &&
                        e.target.innerText === ""
                            ? (e.target.innerText = diceResult)
                            : (e.target.innerText = "");
                    }}
                ></div>
            </div>
            {/* 7 */}
            <div className="case-pleine">
                <div
                    className="case-cocher case-rond"
                    id="7"
                    onClick={(e) => {
                        testDiceValue(6, "violet") &&
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
                    className="case-cocher case-rond"
                    id="8"
                    onClick={(e) => {
                        testDiceValue(7, "violet") &&
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
                        testDiceValue(8, "violet") &&
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
                        testDiceValue(9, "violet") &&
                        testDice() &&
                        e.target.innerText === ""
                            ? (e.target.innerText = diceResult)
                            : (e.target.innerText = "");
                    }}
                ></div>
            </div>
            {/* 11 */}
            <div className="case-vide"></div>
            {/* 12 */}
            <div className="case-vide"></div>
        </div>
    );
};

export default LineViolet;
