import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/Card';
import { Game } from '../generated/models/Game';
import {api} from "../lib/api.ts";
import {Box, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Typography, CardActionArea} from '@mui/material'
import {GamesPostRequest} from "../generated/apis/DefaultApi";
import { toast } from 'react-toastify';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

export default function GameList() {
    const [games, setGames] = useState<Game[]>([]);
    const [gameName, setGameName] = useState('');

    const [page, setPage] = useState(0);
    const [pageSize] = useState(10);
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
      <h1 className="text-xl font-bold">Games</h1>
        <Button onClick={handleOpen}>Nová hra</Button>
      <div className="grid gap-4">
        <Stack spacing={2}>
        {games.map((game,index)=> (
            <Card>
                <CardActionArea
                    // onClick={() => setSelectedCard(index)}
                    onClick={() => goToDetail(game.id)}
                    // data-active={selectedCard === index ? '' : undefined}
                    sx={{
                        height: '100%',
                        '&[data-active]': {
                            backgroundColor: 'action.selected',
                            '&:hover': {
                                backgroundColor: 'action.selectedHover',
                            },
                        },
                    }}
                >
                    <CardContent sx={{ height: '100%' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography variant="h5" component="div">
                                {game.type}
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                                <Typography variant="body2" color="text.secondary">
                                    {game.players.active??"Over"}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {game.players.me??"-"}
                                </Typography>
                            </Box>
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>
        ))}
        </Stack>
      </div>
        <div className="flex justify-center items-center gap-4 mt-4">
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
