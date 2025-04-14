import React from 'react';
import {ActivePlayer, Game, PlayerEnum} from "../generated";
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl, FormControlLabel,
    FormLabel, Radio, RadioGroup,
} from "@mui/material";
import Button from "@mui/material/Button";
import {useGame} from "@/context/GameContext";

interface IndexedGame{
    game: Game;
    open: Boolean;
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

function convertStringToPlayerEnum(value: string): PlayerEnum {
    if (Object.values(PlayerEnum).includes(value as PlayerEnum)) {
        return value as PlayerEnum;
    }
    return PlayerEnum.None;
}
const ModalSwitchPlayer: React.FC<IndexedGame> = ({ game, open}) => {
    const { closeModalSwitchPlayer } = useGame();
    const { changeActivePlayer } = useGame();

    return (
        <Dialog open={open} onClose={closeModalSwitchPlayer} slotProps={{
            paper: {
                sx: {
                    backgroundImage: 'url(/assets/textures/wooden_desk_01.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    color: 'white',
                    backgroundBlendMode: 'darken',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }}>
            <DialogTitle>{game.type}</DialogTitle>
            <DialogContent>
                <FormControl>
                    <FormLabel id="game-type-label">Připojen jako</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="game-type-label"
                        name="game-type"
                        value={game.players.me}
                        onChange={(e) => changeActivePlayer(convertStringToPlayerEnum( e.target.value))}
                    >
                        <FormControlLabel value="None" control={<Radio />} label="Spektátor" />
                        <FormControlLabel value="Viking" control={<Radio />} label="Vikingové" />
                        <FormControlLabel value="Monster" control={<Radio />} label="Monstra" />
                        <FormControlLabel value="Both" control={<Radio />} label="HOT-SEAT" />
                    </RadioGroup>
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={closeModalSwitchPlayer}>Zavřít</Button>
            </DialogActions>
        </Dialog>
    );
};

export default ModalSwitchPlayer;
