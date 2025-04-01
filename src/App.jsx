import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GameList from './pages/GameList';
import GameDetail from './pages/GameDetail';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/games" element={<GameList />} />
        <Route path="/games/:id" element={<GameDetail />} />
      </Routes>
    </Router>
  );
}
