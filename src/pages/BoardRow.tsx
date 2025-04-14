import React from 'react';
import {BoardRowsInner} from "../generated";
import BoardTile from "./BoardTile";
interface IndexedBoardRow extends BoardRowsInner {
    rowIndex: number;
}

const BoardRow: React.FC<IndexedBoardRow> = ({ cols, rowIndex, isActivePlayerConnected}) => {
    return (
        <tr>
            {

                cols?.map((tile, colIndex) => (
                    <BoardTile key={colIndex} tile={tile} rowIndex={rowIndex} colIndex={colIndex} isActivePlayerConnected={isActivePlayerConnected}/>
                ))
            }
        </tr>
    );
};

export default BoardRow;
