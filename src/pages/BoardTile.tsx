import React from 'react';
import {Tile, TileFigureEnum} from "../generated/models/Tile";
import { useGame } from '../context/GameContext';

const tileImageMap: Record<TileFigureEnum, string> = {
    Empty: "/assets/tiles/free.svg",
    Odin: "/assets/tiles/odin.svg",
    DeadOdin: "/assets/tiles/deadOdin.svg",
    EscapedOdin: "/assets/tiles/escapedOdin.svg",
    Monster: "/assets/tiles/viking.svg",
    Warrior: "/assets/tiles/beast.svg",
    Throne: "/assets/tiles/throne.svg",
    Exit: "/assets/tiles/exit.svg",
};

interface IndexedBoardTile extends Tile {
    rowIndex: number;
    colIndex: number;
}

const BoardTile: React.FC<IndexedBoardTile> = ({ tile, rowIndex, colIndex, isActivePlayerConnected }) => {
    const { handleTileClick } = useGame();

    return (
        <div className="GameTableCell">
            <input
                className={
                    `tile-button
                    ${tile.isSelected ? isActivePlayerConnected ? 'tile-selected tile-blink' : 'tile-selected-opponent tile-blink' : ''}
                    ${tile.isMoveEnabled ? isActivePlayerConnected ? 'tile-move-enabled' : 'tile-move-enabled-opponent' : ''}
                 `}
                // className={`tile ${selected ? 'selected' : ''}`}
                type="image"
                alt={tile.figure[0]}
                src={tileImageMap[tile.figure] || "/assets/tiles/Empty.svg"}
                onClick={() => handleTileClick(rowIndex,colIndex)}
            />
        </div>
    );
};

export default BoardTile;
