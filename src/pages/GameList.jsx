import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import config from '../api/config';

export default function GameList() {
  const [games, setGames] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${config.API_BASE}/games`)
      .then(res => res.json())
      .then(setGames);
  }, []);

  const createGame = () => {
    fetch(`${config.API_BASE}/games`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({}),
    })
      .then(res => res.json())
      .then(game => navigate(`/games/${game.id}`));
  };

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold">Games</h1>
      <Button onClick={createGame}>Create New Game</Button>
      <div className="grid gap-4">
        {games.map(game => (
          <Card key={game.id}>
            <CardContent className="p-4">
              <Link to={`/games/${game.id}`} className="text-blue-600 underline">
                Game #{game.id}
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
