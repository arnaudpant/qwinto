import React from "react";

const LineViolet = ({ diceResult, dicesColor }) => {
    const testDice = () => {
        if (dicesColor.includes("violet") === true) {
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
                        testDice() && e.target.innerText === ""
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
                        testDice() && e.target.innerText === ""
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
                        testDice() && e.target.innerText === ""
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
                        testDice() && e.target.innerText === ""
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
                        testDice() && e.target.innerText === ""
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
                        testDice() && e.target.innerText === ""
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
                        testDice() && e.target.innerText === ""
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
                        testDice() && e.target.innerText === ""
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
                        testDice() && e.target.innerText === ""
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
