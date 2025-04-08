import { createContext, useContext } from 'react';

export const GameContext = createContext({
    handleTileClick: (rowIndex: number, colIndex: number) => {}, // výchozí (prázdná) funkce
});

export const useGame = () => useContext(GameContext);
