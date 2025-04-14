import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Game } from '../generated/models/Game';
import {api} from "../lib/api.ts";
import BoardRow from "./BoardRow";
import {
    GamesIdBoardSelectTilePostRequest,
    GamesIdGetRequest,
    GamesIdJoinPostRequest,
    PlayerEnum
} from "../generated";
import { GameContext } from '../context/GameContext';
import ModalGameRules from "@/pages/ModalGameRules";
import BoardHeader from "@/pages/BoardHeader";
import ModalSwitchPlayer from "@/pages/ModalSwitchPlayer";


export default function GameDetail() {
    const {id} = useParams<{ id: string }>();
    const [game, setGame] = useState<Game | null>(null);
    const [loggedUser, setLoggedUser] = useState<PlayerEnum>(PlayerEnum.None);
    const [isModalRulesOpen, setModalRulesOpen] = useState(false);
    const [isModalSwitchPlayerOpen, setModalSwitchPlayerOpen] = useState(false);

    const openModalSwitchPlayer = () =>{
        setModalSwitchPlayerOpen(true);
    }
    const closeModalSwitchPlayer = () => setModalSwitchPlayerOpen(false);

    useEffect(() => {
        api.gamesIdGet({id} as GamesIdGetRequest)
            .then((response) => {
                setGame(response);
                setLoggedUser(response.players?.me ?? PlayerEnum.None);
            })
            .catch((error) => {
                console.error('Chyba při načítání her:', error);
            });
    }, [id, loggedUser]);

    const showHelp = () => {
        setModalRulesOpen(true);
    }

    const changeActivePlayer = (playerString: PlayerEnum) => {
        const requestParams: GamesIdJoinPostRequest = {
            id: id,
            joinPlayerRequest: {
                player: playerString,
            },
        } as GamesIdJoinPostRequest;
        console.log('Clicked to: ', playerString);

        api.gamesIdJoinPost(requestParams)
            .then((response) => {
                setLoggedUser(response?.player ?? PlayerEnum.None);
                setModalSwitchPlayerOpen( false);
            })
            .catch((error) => {
                console.error('Chyba při join:', error);
            });
    }

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
    };

    if (!game) return <div className="p-4">Loading...</div>;

    const isActivePlayerConnected = (game?.players.active == game?.players.me || game?.players.me == PlayerEnum.Both)

    return (
        <GameContext.Provider value={{ handleTileClick, closeModalSwitchPlayer, openModalSwitchPlayer, changeActivePlayer, showHelp }}>
            <div className="table-container">
                <BoardHeader game={game}/>
                <table className="table-content">
                    <tbody>
                    {game.board.rows.map((row,index) => (
                        <BoardRow key={index} cols={row.cols} rowIndex={index} isActivePlayerConnected={isActivePlayerConnected}/>
                    ))}
                    </tbody>
                </table>
            </div>
            <ModalGameRules open={isModalRulesOpen}/>
            <ModalSwitchPlayer game={game} open={isModalSwitchPlayerOpen}/>
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