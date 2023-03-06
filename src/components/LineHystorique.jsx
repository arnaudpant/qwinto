import React from "react";
import { isEmpty } from "../utils/utils";

const LineHystorique = ({ dicesHystorique }) => {
    return (
        <div className="hystorique">
            <p>Historique: </p>
            {isEmpty &&
                dicesHystorique.map((elt, index) => (
                    <div className="list-hystorique" key={index}>
                        {elt}
                    </div>
                ))}
        </div>
    );
};

export default LineHystorique;
