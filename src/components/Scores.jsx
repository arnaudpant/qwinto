import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../Context";

const Scores = ({ casesOrange, casesJaune, casesViolet }) => {
    // CONTEXT
    const { coupsRates } = useGlobalContext();

    const [scoreOrange, setScoreOrange] = useState(0);
    const [scoreJaune, setScoreJaune] = useState(0);
    const [scoreViolet, setScoreViolet] = useState(0);
    const [scoreLosange1, setScoreLosange1] = useState(0);
    const [scoreLosange2, setScoreLosange2] = useState(0);
    const [scoreLosange3, setScoreLosange3] = useState(0);
    const [scoreLosange4, setScoreLosange4] = useState(0);
    const [scoreLosange5, setScoreLosange5] = useState(0);
    const [scoreNegatif, setScoreNegatif] = useState(0);

    if (casesOrange[1] > 0 && casesJaune[2] > 0 && casesViolet[3] > 0) {
        setScoreLosange1(casesOrange[1]);
    }
    if (casesOrange[4] > 0 && casesJaune[5] > 0 && casesViolet[6] > 0) {
        setScoreLosange2(casesOrange[4]);
    }
    if (casesOrange[5] > 0 && casesJaune[6] > 0 && casesViolet[7] > 0) {
        setScoreLosange3(casesJaune[6]);
    }
    if (casesOrange[0] > 0 && casesJaune[1] > 0 && casesViolet[2] > 0) {
        setScoreLosange4(casesViolet[2]);
    }
    if (casesOrange[6] > 0 && casesJaune[7] > 0 && casesViolet[8] > 0) {
        setScoreLosange5(casesViolet[8]);
    }

    useEffect(() => {
        if (casesOrange) {
            if (casesOrange.every((el) => el !== 0)) {
                setScoreOrange(
                    casesOrange.reduce(
                        (accumulator, currentValue) =>
                            accumulator + currentValue,
                        0
                    )
                );
            } else {
                setScoreOrange(casesOrange.filter((el) => el !== 0).length);
            }
        }
    }, [casesOrange]);

    useEffect(() => {
        if (casesJaune) {
            if (casesJaune.every((el) => el !== 0)) {
                setScoreJaune(
                    casesJaune.reduce(
                        (accumulator, currentValue) =>
                            accumulator + currentValue,
                        0
                    )
                );
            } else {
                setScoreJaune(casesJaune.filter((el) => el !== 0).length);
            }
        }
    }, [casesJaune]);

    useEffect(() => {
        if (casesViolet) {
            if (casesViolet.every((el) => el !== 0)) {
                setScoreViolet(
                    casesViolet.reduce(
                        (accumulator, currentValue) =>
                            accumulator + currentValue,
                        0
                    )
                );
            } else {
                setScoreViolet(casesViolet.filter((el) => el !== 0).length);
            }
        }
    }, [casesViolet]);

    useEffect(() => {
        coupsRates > 0 && setScoreNegatif(coupsRates * 5);
    }, [coupsRates]);

    return (
        <>
            <h4>Scores</h4>
            <div className="line-score">
                <div className="cases-score score-orange">
                    {scoreOrange > 0 && scoreOrange}
                </div>
                <div className="cases-score score-jaune">
                    {scoreJaune > 0 && scoreJaune}
                </div>
                <div className="cases-score score-violet">
                    {scoreViolet > 0 && scoreViolet}
                </div>
                <div>+</div>
                <div className="cases-score cases-score-losange">
                    {scoreLosange1 > 0 && scoreLosange1}
                </div>
                <div className="cases-score cases-score-losange">
                    {scoreLosange2 > 0 && scoreLosange2}
                </div>
                <div className="cases-score cases-score-losange">
                    {scoreLosange3 > 0 && scoreLosange3}
                </div>
                <div className="cases-score cases-score-losange">
                    {scoreLosange4 > 0 && scoreLosange4}
                </div>
                <div className="cases-score cases-score-losange">
                    {scoreLosange5 > 0 && scoreLosange5}
                </div>
                <div>-</div>
                <div className="cases-score score-blanc">
                    {scoreNegatif > 0 && scoreNegatif}
                </div>
                <div>=</div>
                <div className="case-score-final">
                    {scoreOrange +
                        scoreJaune +
                        scoreViolet +
                        scoreLosange1 +
                        scoreLosange2 +
                        scoreLosange3 +
                        scoreLosange4 +
                        scoreLosange5 -
                        scoreNegatif}
                </div>
            </div>
        </>
    );
};

export default Scores;
