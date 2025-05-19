import React, { useEffect, useState } from 'react';
import { Game } from '../generated/models/Game';
import {api} from "../lib/api.ts";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Typography,
    Tooltip
} from '@mui/material'
import {GamesPostRequest} from "../generated/apis/DefaultApi";
import { toast } from 'react-toastify';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import {PlayerEnum} from "@/generated";
import {
    connectedPlayerImageMap,
    connectedPlayerTooltipMap,
    activePlayerImageMap,
    activePlayerTooltipMap
} from "@/constants/ConnectedPlayer";

export default function GameList() {
    const [games, setGames] = useState<Game[]>([]);
    const [gameName, setGameName] = useState('');

    const [page, setPage] = useState(0);
    const [pageSize] = useState(6);
    const [totalPages, setTotalPages] = useState(0);
    const [gameCreated, setGameCreated] = useState(true);
    const [selectedCard, setSelectedCard] = React.useState(0);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const navigate = useNavigate();

    const goToDetail = (id:string) => {
        navigate(`/games/${id}`);
    };

    function refreshList() {
        api.gamesGet({ page, size: pageSize })
            .then((response) => {
                setGames(response.items);
                setTotalPages(response.total);
            })
            .catch((error) => {
                toast.error('Nepodařilo se načíst hry');
                console.error('Chyba při načítání her:', error);
            });
    }

    useEffect(() => {
        console.log("✅ GameList");
        refreshList();
        if (gameCreated) {
            setGameCreated(false);
        }
    }, [page, gameCreated]);

  const createGame = (type:String) => {
      const request: GamesPostRequest = {
          gameCreateRequest: {
              type: type,
          },
      };

      handleClose();
      api.gamesPost(request
      )
          .then((response) => {
              toast.success(`Hra s nazvem ${type} vytvorena`);
              setGameCreated(true);
          })
          .catch((error) => {
              toast.error(`Hru s nazvem ${type} nelze vytvorit`, error);
              console.error(`Hru s navem ${type} nelze vytvorit`, error);
          });

  };

  return (
    <div className="p-4 space-y-4">
        <div className="Wrapper">
            <div className="Content horizontal">
                <div className="AddButton Container rotated fit" onClick={handleOpen}>
                    + Nová hra
                </div>
                <div className="GameList">
                    {games.map((game,index)=> (
                        <div className="Container rotated" onClick={() => goToDetail(game.id)}>
                            <div className="GameListItem">
                                <Typography variant="h5" component="div" className="GameListItemCaption">
                                    {game.type}
                                </Typography>
                                <div className="GamePanelTableText signedAsLabel">Přihlášen jako</div>
                                <Tooltip className="GamePanelTableImage signedAsValue" title={connectedPlayerTooltipMap[game.players.me ?? PlayerEnum.None]}>
                                    <img
                                        src={connectedPlayerImageMap[game.players.me ?? PlayerEnum.None]}
                                        alt=""
                                        // onClick={openModalSwitchPlayer}
                                        className="GamePanelTableImage signedAsValue"
                                    />
                                </Tooltip>

                                <div className="GamePanelTableText activePlayerLabel">Aktivní hráč</div>
                                <Tooltip className="GamePanelTableImage activePlayerValue" title={activePlayerTooltipMap[game.players.active]}>
                                    <img
                                        src={activePlayerImageMap[game.players.active]}
                                        alt=""
                                        className="GamePanelTableImage activePlayerValue"
                                    />
                                </Tooltip>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center items-center gap-4 mt-4 order-1">
                    <Button
                        onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
                        disabled={page === 0}
                    >Předchozí</Button>
                    <span>Stránka {page + 1} / {totalPages}</span>
                    <Button
                        onClick={() => setPage((prev) => Math.min(prev + 1, totalPages - 1))}
                        disabled={page + 1 >= totalPages}
                    >Další</Button>
                </div>
            </div>
        </div>

        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Nová hra</DialogTitle>
            <DialogContent>
                <TextField
                    fullWidth
                    label="Název nové hry"
                    variant="outlined"
                    margin="dense"
                    value={gameName}
                    onChange={(e) => setGameName(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Zavřít</Button>
                <Button variant="contained" onClick={() => createGame(gameName)}>Potvrdit</Button>
            </DialogActions>
        </Dialog>
    </div>
  );
}
