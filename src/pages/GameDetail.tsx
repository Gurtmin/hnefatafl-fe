import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Game } from '../generated/models/Game';
import {api} from "../lib/api.ts";
import BoardRow from "./BoardRow";
import {GamesIdBoardMoveTilePostRequest, GamesIdBoardSelectTilePostRequest, GamesIdGetRequest} from "../generated";
import { GameContext } from '../context/GameContext';
import {
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
} from '@mui/material';

export default function GameDetail() {
    const {id} = useParams<{ id: string }>();
    const [game, setGame] = useState<Game | null>(null);

    useEffect(() => {
        api.gamesIdGet({id} as GamesIdGetRequest)
            .then((response) => {
                setGame(response);
            })
            .catch((error) => {
                console.error('Chyba při načítání her:', error);
            });
    }, [id]);

    const handleTileClick = (rowIndex, colIndex) => {
        const requestParams: GamesIdBoardSelectTilePostRequest={
            id: id,
            selectTileRequest: {
                x: colIndex,
                y: rowIndex,
            },
        } as GamesIdBoardSelectTilePostRequest;

        api.gamesIdBoardSelectTilePost(requestParams)
            .then((response) => {
                setGame(response);
            })
            .catch((error) => {
                console.error('Chyba při načítání her:', error);
            });

        // console.log('XXX selectTile - row: ' + rowIndex + ", col: " + colIndex);
    };

    if (!game) return <div className="p-4">Loading...</div>;

    return (
        <GameContext.Provider value={{ handleTileClick }}>
            <h1 className="text-xl font-bold">{game.type}</h1>
            <div className="p-4 space-y-4">
                <FormControl>
                    <FormLabel id="game-type-label">Aktuální hráč</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="game-type-label"
                        name="game-type"
                        value={game.players.me}
                        // onChange={handleChange}
                    >
                        <FormControlLabel value="Viking" control={<Radio />} label="Vikingové" />
                        <FormControlLabel value="Monster" control={<Radio />} label="Monstra" />
                    </RadioGroup>
                </FormControl>
                <table>
                    <tbody>
                    {game.board.rows.map((row,index) => (
                        <BoardRow cols={row.cols} rowIndex={index}/>
                    ))}
                    </tbody>
                </table>
                <Link to="/games" className="text-blue-600 underline">Back to Games</Link>

                <pre className="bg-gray-100 p-4 rounded">{JSON.stringify(game, null, 2)}</pre>
            </div>
        </GameContext.Provider>
    );

    function BoardCell(props) {
        return (
            <td>
                <input
                    className="CELL"
                    type="image"
                    height="30px"
                    width="30px"
                    alt="CELL"
                    src="cell.png"
                />
            </td>
        );
    }
}