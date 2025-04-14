import React from 'react';
import {ActivePlayer, BoardRowsInner, Game, PlayerEnum, TileFigureEnum} from "../generated";
import BoardTile from "./BoardTile";
import {Tooltip} from "@mui/material";
import {useGame} from "@/context/GameContext";

interface IndexedGame{
    game: Game;
}

const activePlayerImageMap: Record<ActivePlayer, string> = {
    Monster: "/assets/tiles/odin.svg",
    Viking: "/assets/tiles/beast.svg",
};

const activePlayerTooltipMap: Record<ActivePlayer, React.ReactNode> = {
    Monster: (
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5em' }}>
          <span>Na tahu je obránce</span>
          <img
            src="/assets/tiles/viking.svg"
            alt="Monster"
            style={{ height: '2em' }}
          />
          <span> nebo </span>
          <img
              src="/assets/tiles/odin.svg"
              alt="Monster"
              style={{ height: '2em' }}
          />
        </span>
    ),
    Viking: (
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5em' }}>
          <span>Na tahu je útočník</span>
          <img
              src="/assets/tiles/beast.svg"
              alt="Monster"
              style={{ height: '2em' }}
          />
        </span>
    ),
};

const connectedPlayerImageMap: Record<PlayerEnum, string> = {
    None: "/assets/tiles/spectator.svg",
    Both: "/assets/tiles/both.svg",
    Monster: "/assets/tiles/odin.svg",
    Viking: "/assets/tiles/beast.svg",
};

const connectedPlayerTooltipMap: Record<PlayerEnum, string> = {
    None: "V této hře nejsi přihlášen. Proto jsi v roli spektátora.",
    Both: "V této hře jsi připojen jako Obránce i útočník. To slouží k takzvanému Hot-Seat módu hry, kdy oba hráči se střídají na jednom zařízení",
    Monster: "V této hře jsi připojen jako Obránce.",
    Viking: "V této hře jsi připojen jako Útočník.",
};

const BoardHeader: React.FC<IndexedGame> = ({ game}) => {
    const { openModalSwitchPlayer } = useGame();
    const { showHelp } = useGame();

    return (
        <div className="game-panel">
            <Tooltip title={connectedPlayerTooltipMap[game.players.me ?? PlayerEnum.None]}>
                <img src={connectedPlayerImageMap[game.players.me ?? PlayerEnum.None]} alt="Vaše role" onClick={openModalSwitchPlayer} className="player-role" />
            </Tooltip>
            <h1 className="game-title">{game.type}</h1>
            <Tooltip title={activePlayerTooltipMap[game.players.active]}>
                <img src={activePlayerImageMap[game.players.active]} alt="Aktuální hráč" className="active-player" />
            </Tooltip>
            <button className="back-button" onClick={showHelp}>Help</button>
        </div>
    );
};

export default BoardHeader;
