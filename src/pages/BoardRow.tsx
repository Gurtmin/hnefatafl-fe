import React from 'react';
import {BoardRowsInner} from "../generated";
import BoardTile from "./BoardTile";
interface IndexedBoardRow extends BoardRowsInner {
    rowIndex: number;
}

const BoardRow: React.FC<IndexedBoardRow> = ({ cols, rowIndex, isActivePlayerConnected}) => {
    return (
        <div className="GameTableRow">
            {
                cols?.map((tile, colIndex) => (
                    <BoardTile key={colIndex} tile={tile} rowIndex={rowIndex} colIndex={colIndex} isActivePlayerConnected={isActivePlayerConnected}/>
                ))
            }
        </div>
    );
};

export default BoardRow;
