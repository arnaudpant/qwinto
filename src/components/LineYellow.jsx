import React from "react";

const LineYellow = ({ diceResult, dicesColor, setIndexCaseColor }) => {
    const testDice = () => {
        if (dicesColor.includes("jaune") === true) {
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
                        setIndexCaseColor([0, "jaune"]);
                        testDice() && e.target.innerText === ""
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
                        setIndexCaseColor([1, "jaune"]);
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
                        setIndexCaseColor([2, "jaune"]);
                        testDice() && e.target.innerText === ""
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
                        setIndexCaseColor([3, "jaune"]);
                        testDice() && e.target.innerText === ""
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
                        setIndexCaseColor([4, "jaune"]);
                        testDice() && e.target.innerText === ""
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
                        setIndexCaseColor([5, "jaune"]);
                        testDice() && e.target.innerText === ""
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
                        setIndexCaseColor([6, "jaune"]);
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
                        setIndexCaseColor([7, "jaune"]);
                        testDice() && e.target.innerText === ""
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
                        setIndexCaseColor([8, "jaune"]);
                        testDice() && e.target.innerText === ""
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
