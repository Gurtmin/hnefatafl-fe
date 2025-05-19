import React from 'react';
import {ActivePlayer, Game, PlayerEnum} from "../generated";
import {Tooltip} from "@mui/material";
import {useGame} from "@/context/GameContext";
import {
    activePlayerImageMap, activePlayerTooltipMap,
    connectedPlayerImageMap,
    connectedPlayerTooltipMap
} from '../constants/ConnectedPlayer.tsx';
import {useNavigate} from "react-router-dom";

interface IndexedGame{
    game: Game;
}


const BoardHeader: React.FC<IndexedGame> = ({ game}) => {
    const { openModalSwitchPlayer } = useGame();
    const { showHelp } = useGame();
    const navigate = useNavigate();

    const goBack = () => {
        navigate(`/games`);
    };

    return (
        <div className="GamePanel">
            <div className="GamePanelHeader">{game.type}</div>

            <div className="GamePanelTableText">Tvoje role</div>
            <Tooltip className="GamePanelTableImage" title={connectedPlayerTooltipMap[game.players.me ?? PlayerEnum.None]}>
                <img
                    src={connectedPlayerImageMap[game.players.me ?? PlayerEnum.None]}
                    alt=""
                    onClick={openModalSwitchPlayer}
                    className="GamePanelTableImage"
                />
            </Tooltip>

            <div className="GamePanelTableText">Aktivní hráč</div>
            <Tooltip className="GamePanelTableImage" title={activePlayerTooltipMap[game.players.active]}>
                <img
                    src={activePlayerImageMap[game.players.active]}
                    alt=""
                    className="GamePanelTableImage"
                />
            </Tooltip>

            <div className="GamePanelNavigation">
                <img
                    src="/assets/back.svg"
                    alt=""
                    onClick={() => goBack()}
                    className="GamePanelNavigationButton"
                />
                <img
                    src="/assets/help.svg"
                    alt=""
                    onClick={showHelp}
                    className="GamePanelNavigationButton"
                />
            </div>
        </div>
    );
};

export default BoardHeader;
