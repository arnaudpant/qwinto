import React, { useContext, createContext, useState } from "react";
const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [players, setPlayers] = useState([]);
    const [playerIndexName, setPlayerIndexName] = useState();
    const [playerToPlay, setPlayerToPlay] = useState(0);

    return (
        <AppContext.Provider
            value={{
                setPlayers,
                players,
                setPlayerIndexName,
                playerIndexName,
                playerToPlay,
                setPlayerToPlay
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
