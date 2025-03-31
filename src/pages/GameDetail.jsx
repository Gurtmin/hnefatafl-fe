import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import config from '../api/config';

export default function GameDetail() {
  const { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    fetch(`${config.API_BASE}/games/${id}`)
      .then(res => res.json())
      .then(setGame);
  }, [id]);

  if (!game) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold">Game Detail #{game.id}</h1>
      <pre className="bg-gray-100 p-4 rounded">{JSON.stringify(game, null, 2)}</pre>
      <Link to="/" className="text-blue-600 underline">Back to Games</Link>
    </div>
  );
}
