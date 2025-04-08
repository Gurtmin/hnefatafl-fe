import React from 'react';
import {BoardRowsInner} from "../generated";
import BoardTile from "./BoardTile";
interface IndexedBoardRow extends BoardRowsInner {
    rowIndex: number;
}

const BoardRow: React.FC<IndexedBoardRow> = ({ cols, rowIndex}) => {
    return (
        <tr>
            {
                cols?.map((tile, colIndex) => ( <BoardTile tile={tile} rowIndex={rowIndex} colIndex={colIndex}/> ))
            }
        </tr>
    );
};

export default BoardRow;
