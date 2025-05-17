import { createContext, useContext } from 'react';
import {PlayerEnum} from "@/generated";

export const GameContext = createContext({
    handleTileClick: (rowIndex: number, colIndex: number) => {
    },

    changeActivePlayer: (playerString: PlayerEnum) => {
    },

    openModalSwitchPlayer: () => {
    },
    closeModalSwitchPlayer: () => {
    },
    closeModalGameRules: () => {
    },
    showHelp: () => {
    }
})

export const useGame = () => useContext(GameContext);
