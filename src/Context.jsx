import React, { useContext, createContext, useEffect, useState } from "react";
const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [players, setPlayers] = useState([]);
    const [playerIndexName, setPlayerIndexName] = useState();

    // useEffect ( () => {
    //     console.log(players);
    // }, [players])

    return (
        <AppContext.Provider
            value={{
                setPlayers,
                players,
                setPlayerIndexName,
                playerIndexName,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

// Creation d'un hook personnalisé pour passer le contexte
export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };
