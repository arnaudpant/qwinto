import { useGlobalContext } from "../Context";

const LineCoupsManques = () => {

     // CONTEXT
     const { setCoupsRates } = useGlobalContext();
    return (
        <div className="coup-manques">
            <h2>Coups ratés</h2>
            <div className="line-rates">
                <div
                    className="case-ratee"
                    onClick={(e) => {
                        setCoupsRates(1);
                        e.target.innerText = "X";
                    }}
                ></div>
                <div
                    className="case-ratee"
                    onClick={(e) => {
                        setCoupsRates(2);
                        e.target.innerText = "X";
                    }}
                ></div>
                <div
                    className="case-ratee"
                    onClick={(e) => {
                        setCoupsRates(3);
                        e.target.innerText = "X";
                    }}
                ></div>
                <div
                    className="case-ratee"
                    onClick={(e) => {
                        setCoupsRates(4);
                        e.target.innerText = "X";
                        alert("GAME OVER");
                    }}
                ></div>
            </div>
        </div>
    );
};

export default LineCoupsManques;
