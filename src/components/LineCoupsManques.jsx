import React, { useState } from "react";

const LineCoupsManques = () => {
    const [coupsRates, setCoupsRates] = useState(1);

    const incrementeCoupRate = (nbr) => {
        setCoupsRates(nbr += 1)
        coupsRates === 4 && alert("GAME OVER")
    }

    return (
        <>
            <h2>Coups ratés</h2>
            <div className="line-rates">
                <div
                    className="case-ratee"
                    onClick={(e) => {
                        incrementeCoupRate(coupsRates)
                        e.target.innerText = "X";
                    }}
                ></div>
                <div
                    className="case-ratee"
                    onClick={(e) => {
                        incrementeCoupRate(coupsRates)
                        e.target.innerText = "X";
                    }}
                ></div>
                <div
                    className="case-ratee"
                    onClick={(e) => {
                        incrementeCoupRate(coupsRates)
                        e.target.innerText = "X";
                    }}
                ></div>
                <div
                    className="case-ratee"
                    onClick={(e) => {
                        incrementeCoupRate(coupsRates)
                        e.target.innerText = "X";
                    }}
                ></div>
            </div>
        </>
    );
};

export default LineCoupsManques;
