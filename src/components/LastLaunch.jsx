
const LastLaunch = ({ lastLaunch }) => {


    return (
        <div className="last-result">
            <p>Dernier lancé: </p>
            <div
                className={
                    lastLaunch !== undefined &&
                    lastLaunch.includes("orange")
                        ? "last-dice last-dice-orange"
                        : "last-dice"
                }
            ></div>
            <div
                className={
                    lastLaunch !== undefined &&
                    lastLaunch.includes("jaune")
                        ? "last-dice last-dice-jaune"
                        : "last-dice"
                }
            ></div>
            <div
                className={
                    lastLaunch !== undefined &&
                    lastLaunch.includes("violet")
                        ? "last-dice last-dice-violet"
                        : "last-dice"
                }
            ></div>
        </div>
    );
};

export default LastLaunch;
