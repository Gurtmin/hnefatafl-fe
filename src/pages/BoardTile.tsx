import React from 'react';
import {Tile, TileFigureEnum} from "../generated/models/Tile";
import { useGame } from '../context/GameContext';

const tileImageMap: Record<TileFigureEnum, string> = {
    Empty: "/assets/tiles/free.svg",
    Odin: "/assets/tiles/odin.svg",
    Monster: "/assets/tiles/beast.svg",
    Warrior: "/assets/tiles/viking.svg",
    Throne: "/assets/tiles/impassable.svg",
    Exit: "/assets/tiles/impassable.svg",
};

interface IndexedBoardTile extends Tile {
    rowIndex: number;
    colIndex: number;
}

const BoardTile: React.FC<IndexedBoardTile> = ({ tile, rowIndex, colIndex }) => {
    const { handleTileClick } = useGame();

    return (
        <td>
            <input
                className={`tile-button ${tile.isSelected ? 'tile-selected' : ''} ${tile.isMoveEnabled ? 'tile-move-enabled' : ''}`}
                // className={`tile ${selected ? 'selected' : ''}`}
                type="image"
                height="40px"
                width="40px"
                alt={tile.figure[0]}
                src={tileImageMap[tile.figure] || "/assets/tiles/Empty.svg"}
                onClick={() => handleTileClick(rowIndex,colIndex)}
            />
        </td>
    );
};

export default BoardTile;
